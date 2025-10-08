-- Create quote_requests table to store all quote form submissions
CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  project_type TEXT NOT NULL,
  mission TEXT NOT NULL,
  budget TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form submission)
CREATE POLICY "Anyone can submit a quote request"
ON public.quote_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated admin/manager users can view quote requests
CREATE POLICY "Only admins can view quote requests"
ON public.quote_requests
FOR SELECT
TO authenticated
USING (get_current_user_role() = ANY (ARRAY['admin'::text, 'manager'::text]));

-- Only authenticated admin/manager users can update quote requests
CREATE POLICY "Only admins can update quote requests"
ON public.quote_requests
FOR UPDATE
TO authenticated
USING (get_current_user_role() = ANY (ARRAY['admin'::text, 'manager'::text]));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_quote_requests_updated_at
BEFORE UPDATE ON public.quote_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster queries
CREATE INDEX idx_quote_requests_status ON public.quote_requests(status);
CREATE INDEX idx_quote_requests_created_at ON public.quote_requests(created_at DESC);