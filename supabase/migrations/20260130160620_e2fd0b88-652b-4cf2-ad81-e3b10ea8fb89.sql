-- Add admin-only policies for gallery_images management
CREATE POLICY "Only admins can insert gallery images"
ON public.gallery_images
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update gallery images"
ON public.gallery_images
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete gallery images"
ON public.gallery_images
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));