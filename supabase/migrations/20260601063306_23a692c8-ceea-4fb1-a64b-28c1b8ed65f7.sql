-- Create email_send_log table for tracking outbound emails
CREATE TABLE IF NOT EXISTS email_send_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  message_id TEXT,
  template_name TEXT NOT NULL,
  recipient_email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  error_message TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Indexes for common queries
CREATE INDEX idx_email_send_log_message_id ON email_send_log(message_id);
CREATE INDEX idx_email_send_log_status ON email_send_log(status);
CREATE INDEX idx_email_send_log_recipient ON email_send_log(recipient_email);
CREATE INDEX idx_email_send_log_created ON email_send_log(created_at DESC);