-- Create email send state table for rate limiting and batch configuration
CREATE TABLE IF NOT EXISTS email_send_state (
  id INT PRIMARY KEY DEFAULT 1,
  batch_size INT DEFAULT 10,
  send_delay_ms INT DEFAULT 200,
  retry_after_until TIMESTAMP WITH TIME ZONE,
  auth_email_ttl_minutes INT DEFAULT 15,
  transactional_email_ttl_minutes INT DEFAULT 60,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Insert default state
INSERT INTO email_send_state (id) VALUES (1) ON CONFLICT (id) DO NOTHING;