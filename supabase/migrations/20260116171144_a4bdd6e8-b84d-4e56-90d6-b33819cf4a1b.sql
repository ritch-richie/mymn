-- Create contact_submissions table for storing form submissions
CREATE TABLE public.contact_submissions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- Create gallery_images table for manageable gallery
CREATE TABLE public.gallery_images (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT NOT NULL,
    event_type TEXT,
    event_date DATE,
    display_order INTEGER DEFAULT 0,
    is_visible BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Allow public read access for visible images
CREATE POLICY "Anyone can view visible gallery images"
ON public.gallery_images
FOR SELECT
USING (is_visible = true);

-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('gallery', 'gallery', true);

-- Allow public read access to gallery bucket
CREATE POLICY "Public read access for gallery"
ON storage.objects
FOR SELECT
USING (bucket_id = 'gallery');

-- Allow authenticated uploads to gallery bucket
CREATE POLICY "Authenticated users can upload to gallery"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'gallery');