-- Ensure newsletter_subscriptions table has comprehensive RLS policies
-- Drop existing policies to recreate them with explicit restrictions
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Staff can view newsletter subscriptions" ON newsletter_subscriptions;

-- Recreate INSERT policy - allow anyone to subscribe
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Recreate SELECT policy - only staff can view subscriptions
CREATE POLICY "Staff can view newsletter subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (get_current_user_role() = ANY (ARRAY['admin'::text, 'manager'::text]));

-- Add explicit deny policies for UPDATE and DELETE for maximum security
CREATE POLICY "Only admins can update newsletter subscriptions"
  ON newsletter_subscriptions
  FOR UPDATE
  TO authenticated
  USING (get_current_user_role() = 'admin'::text);

CREATE POLICY "Only admins can delete newsletter subscriptions"
  ON newsletter_subscriptions
  FOR DELETE
  TO authenticated
  USING (get_current_user_role() = 'admin'::text);