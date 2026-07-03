-- Create table for suppressed/unsubscribed emails
CREATE TABLE IF NOT EXISTS suppressed_emails (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  reason TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_suppressed_emails_email ON suppressed_emails(email);

-- Create table for email unsubscribe tokens (for safe unsubscribe links)
CREATE TABLE IF NOT EXISTS email_unsubscribe_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  token TEXT NOT NULL UNIQUE,
  used_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_email_unsubscribe_tokens_token ON email_unsubscribe_tokens(token);
CREATE INDEX idx_email_unsubscribe_tokens_email ON email_unsubscribe_tokens(email);