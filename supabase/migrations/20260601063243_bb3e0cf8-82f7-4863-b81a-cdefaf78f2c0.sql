-- Create leads table for capturing user inquiries from contact form
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT,
  company TEXT,
  phone TEXT,
  source TEXT NOT NULL,
  bottleneck TEXT,
  resource_slug TEXT,
  role TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  ip_hash TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create index on email for quick lookups
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_source ON leads(source);