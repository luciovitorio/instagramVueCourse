import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vhmvlktjhofdnojtsiwq.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZobXZsa3RqaG9mZG5vanRzaXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4MjE3ODUsImV4cCI6MTk5NDM5Nzc4NX0.9JxMZ8dgRkh2hRvyoLbeq-3i039PW9-Og13BR1aAVhw'
export const supabase = createClient(supabaseUrl, supabaseKey)
