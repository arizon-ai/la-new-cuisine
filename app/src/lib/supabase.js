import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://bd.os.arizonai.cloud';
const supabaseAnonKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc2NDc3NzE4MCwiZXhwIjo0OTIwNDUwNzgwLCJyb2xlIjoiYW5vbiJ9.2tvzSYHDGG3opuP_EZmiQR9FJFCJaMFLpypArO132ds';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
