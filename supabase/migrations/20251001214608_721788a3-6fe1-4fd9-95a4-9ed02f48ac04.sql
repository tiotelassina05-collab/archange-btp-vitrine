-- Fix critical security issue: Block anonymous access to clients table
-- The issue: existing policies are restrictive-only, which doesn't properly block anonymous users
-- Solution: Create proper permissive policies that explicitly require authentication AND staff roles

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Hotel staff can view clients" ON clients;
DROP POLICY IF EXISTS "Hotel staff can insert clients" ON clients;
DROP POLICY IF EXISTS "Hotel staff can update clients" ON clients;
DROP POLICY IF EXISTS "Hotel staff can delete clients" ON clients;

-- Ensure RLS is enabled (it should be already)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Create proper permissive policies that block anonymous access
-- SELECT: Only authenticated hotel staff can view client data
CREATE POLICY "Only authenticated staff can view clients"
  ON clients
  FOR SELECT
  TO authenticated
  USING (
    get_current_user_role() IN ('receptionniste', 'admin', 'manager')
  );

-- INSERT: Only authenticated hotel staff can add clients
CREATE POLICY "Only authenticated staff can insert clients"
  ON clients
  FOR INSERT
  TO authenticated
  WITH CHECK (
    get_current_user_role() IN ('receptionniste', 'admin', 'manager')
  );

-- UPDATE: Only authenticated hotel staff can update clients
CREATE POLICY "Only authenticated staff can update clients"
  ON clients
  FOR UPDATE
  TO authenticated
  USING (
    get_current_user_role() IN ('receptionniste', 'admin', 'manager')
  );

-- DELETE: Only authenticated admins/managers can delete clients
CREATE POLICY "Only authenticated admins can delete clients"
  ON clients
  FOR DELETE
  TO authenticated
  USING (
    get_current_user_role() IN ('admin', 'manager')
  );

-- Add a comment to document the security fix
COMMENT ON TABLE clients IS 'Contains sensitive PII - protected by RLS policies requiring authentication and staff roles';