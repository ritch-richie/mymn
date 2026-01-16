-- Create updated_at function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create events table
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL CHECK (category IN ('exhibitions', 'school_visits', 'outreach')),
  location TEXT NOT NULL,
  venue TEXT,
  event_date DATE,
  display_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create event_images table for carousels
CREATE TABLE public.event_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_images ENABLE ROW LEVEL SECURITY;

-- Public read policies (anyone can view visible events)
CREATE POLICY "Anyone can view visible events"
  ON public.events FOR SELECT
  USING (is_visible = true);

CREATE POLICY "Anyone can view event images"
  ON public.event_images FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.events
    WHERE events.id = event_images.event_id
    AND events.is_visible = true
  ));

-- Create indexes for performance
CREATE INDEX idx_events_category ON public.events(category);
CREATE INDEX idx_events_location ON public.events(location);
CREATE INDEX idx_events_visible ON public.events(is_visible);
CREATE INDEX idx_event_images_event_id ON public.event_images(event_id);

-- Create updated_at trigger
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON public.events
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();