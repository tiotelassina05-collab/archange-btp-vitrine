-- Drop the unused Experts table
-- This table has RLS enabled but no policies defined, making it completely inaccessible
-- No application code references this table, so it's safe to remove
DROP TABLE IF EXISTS public."Experts" CASCADE;