-- Enable Row Level Security on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leaderboard ENABLE ROW LEVEL SECURITY;  
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.carbon_logs ENABLE ROW LEVEL SECURITY;

-- Create profiles table for Supabase auth integration
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  auth_user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  user_id INTEGER UNIQUE REFERENCES public.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Users table policies (users can manage their own data)
CREATE POLICY "Users can view their own data" ON public.users
  FOR SELECT USING (id = (SELECT user_id FROM public.profiles WHERE auth_user_id = auth.uid()));

CREATE POLICY "Users can update their own data" ON public.users
  FOR UPDATE USING (id = (SELECT user_id FROM public.profiles WHERE auth_user_id = auth.uid()));

-- Profiles table policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth_user_id = auth.uid());

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth_user_id = auth.uid());

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth_user_id = auth.uid());

-- Leaderboard policies (public read, users can update their own entries)
CREATE POLICY "Everyone can view leaderboard" ON public.leaderboard
  FOR SELECT USING (true);

CREATE POLICY "Users can update their own leaderboard entry" ON public.leaderboard
  FOR UPDATE USING (student_id = (SELECT user_id FROM public.profiles WHERE auth_user_id = auth.uid()));

CREATE POLICY "Users can insert their own leaderboard entry" ON public.leaderboard
  FOR INSERT WITH CHECK (student_id = (SELECT user_id FROM public.profiles WHERE auth_user_id = auth.uid()));

-- Quizzes policies (public read for all authenticated users)
CREATE POLICY "Authenticated users can view quizzes" ON public.quizzes
  FOR SELECT TO authenticated USING (true);

-- Tasks policies (users can manage their own tasks)
CREATE POLICY "Users can view their own tasks" ON public.tasks
  FOR SELECT USING (student_id = (SELECT user_id FROM public.profiles WHERE auth_user_id = auth.uid()));

CREATE POLICY "Users can insert their own tasks" ON public.tasks
  FOR INSERT WITH CHECK (student_id = (SELECT user_id FROM public.profiles WHERE auth_user_id = auth.uid()));

CREATE POLICY "Users can update their own tasks" ON public.tasks
  FOR UPDATE USING (student_id = (SELECT user_id FROM public.profiles WHERE auth_user_id = auth.uid()));

-- Carbon logs policies (users can manage their own logs)
CREATE POLICY "Users can view their own carbon logs" ON public.carbon_logs
  FOR SELECT USING (student_id = (SELECT user_id FROM public.profiles WHERE auth_user_id = auth.uid()));

CREATE POLICY "Users can insert their own carbon logs" ON public.carbon_logs
  FOR INSERT WITH CHECK (student_id = (SELECT user_id FROM public.profiles WHERE auth_user_id = auth.uid()));

-- Function to automatically create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY definer SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (auth_user_id, display_name)
  VALUES (new.id, new.raw_user_meta_data->>'display_name');
  RETURN new;
END;
$$;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for profiles updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();