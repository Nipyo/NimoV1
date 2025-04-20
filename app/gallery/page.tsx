"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption: string
  category: string
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  // Sample gallery data - replace with your actual content later
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Interior Image 1",
      caption: "Our modern reception area",
      category: "interiors",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Interior Image 2",
      caption: "Comfortable waiting lounge",
      category: "interiors",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Event Image 1",
      caption: "Annual customer appreciation day",
      category: "events",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Event Image 2",
      caption: "Team building workshop",
      category: "events",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Customer Image 1",
      caption: "Happy customer testimonial",
      category: "customers",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Customer Image 2",
      caption: "Client success story",
      category: "customers",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Interior Image 3",
      caption: "Private consultation room",
      category: "interiors",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Event Image 3",
      caption: "Product launch event",
      category: "events",
    },
  ]

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Gallery</h1>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="interiors">Interiors</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <GalleryItem key={image.id} image={image} onClick={() => openLightbox(image)} />
            ))}
          </div>
        </TabsContent>

        {["interiors", "events", "customers"].map((category) => (
          <TabsContent key={category} value={category} className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages
                .filter((image) => image.category === category)
                .map((image) => (
                  <GalleryItem key={image.id} image={image} onClick={() => openLightbox(image)} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-white text-center">
              <p className="text-xl">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

interface GalleryItemProps {
  image: GalleryImage
  onClick: () => void
}

function GalleryItem({ image, onClick }: GalleryItemProps) {
  return (
    <div
      className="overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="aspect-square relative">
        <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
      </div>
      <div className="p-3 bg-muted">
        <p className="font-medium truncate">{image.caption}</p>
      </div>
    </div>
  )
}
