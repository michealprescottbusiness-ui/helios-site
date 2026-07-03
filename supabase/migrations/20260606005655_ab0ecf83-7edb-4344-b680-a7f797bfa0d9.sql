-- Enable RLS on email-related tables
ALTER TABLE email_send_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_send_state ENABLE ROW LEVEL SECURITY;
ALTER TABLE suppressed_emails ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_unsubscribe_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow service role (backend) to access all email tables
CREATE POLICY "Allow service role" ON email_send_log
  FOR ALL USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Allow service role" ON email_send_state
  FOR ALL USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Allow service role" ON suppressed_emails
  FOR ALL USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Allow service role" ON email_unsubscribe_tokens
  FOR ALL USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Allow service role" ON leads
  FOR ALL USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');