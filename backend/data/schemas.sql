CREATE TABLE IF NOT EXISTS services (
  id TEXT primary key,
  display_name TEXT,
  description TEXT,
  go_live_ts TIMESTAMP
);
