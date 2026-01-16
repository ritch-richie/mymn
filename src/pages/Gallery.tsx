import { Layout } from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

interface GalleryImage {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  event_type: string | null;
  event_date: string | null;
}

// Placeholder images for demo
const placeholderImages: GalleryImage[] = [
  {
    id: "1",
    title: "Community Open Day",
    description: "Visitors learning about Islamic calligraphy at our community open day event.",
    image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    event_type: "Open Day",
    event_date: "2024-03-15",
  },
  {
    id: "2",
    title: "School Visit - Primary School",
    description: "Students exploring Islamic artefacts during an educational session.",
    image_url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    event_type: "School Visit",
    event_date: "2024-02-20",
  },
  {
    id: "3",
    title: "Mosque Tour",
    description: "A guided tour of the local mosque with community members.",
    image_url: "https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?w=800&h=600&fit=crop",
    event_type: "Mosque Tour",
    event_date: "2024-01-10",
  },
  {
    id: "4",
    title: "University Interfaith Panel",
    description: "Panel discussion at the university during Discover Islam Week.",
    image_url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    event_type: "University",
    event_date: "2024-02-28",
  },
  {
    id: "5",
    title: "Community Exhibition",
    description: "Interactive exhibition showcasing Islamic art and culture.",
    image_url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    event_type: "Exhibition",
    event_date: "2023-11-15",
  },
  {
    id: "6",
    title: "Visit My Mosque Day",
    description: "Open doors event welcoming all members of the community.",
    image_url: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800&h=600&fit=crop",
    event_type: "Mosque Tour",
    event_date: "2024-03-01",
  },
];

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("*")
        .eq("is_visible", true)
        .order("display_order", { ascending: true });

      if (error) throw error;

      // Use placeholder images if no real images exist yet
      if (data && data.length > 0) {
        setImages(data);
      } else {
        setImages(placeholderImages);
      }
    } catch (error) {
      console.error("Error fetching gallery images:", error);
      setImages(placeholderImages);
    } finally {
      setLoading(false);
    }
  };

  const eventTypes = ["all", ...new Set(images.map((img) => img.event_type).filter(Boolean))];
  const filteredImages = filter === "all" 
    ? images 
    : images.filter((img) => img.event_type === filter);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex = direction === "next"
      ? (selectedIndex + 1) % filteredImages.length
      : (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Explore photos from our events, community gatherings, 
              and educational programs across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as string)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === type
                    ? "gradient-primary text-white"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {type === "all" ? "All Events" : type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl bg-muted animate-pulse"
                />
              ))}
            </div>
          ) : filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <ImageIcon className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No Images Yet
              </h3>
              <p className="text-muted-foreground">
                Gallery images will appear here soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => openLightbox(image, index)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted"
                >
                  <img
                    src={image.image_url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    {image.event_type && (
                      <span className="text-sm text-white/80">{image.event_type}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <img
                src={selectedImage.image_url}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain"
              />
              
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                {selectedImage.description && (
                  <p className="text-white/80">{selectedImage.description}</p>
                )}
                {selectedImage.event_date && (
                  <p className="text-sm text-white/60 mt-2">
                    {new Date(selectedImage.event_date).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;
