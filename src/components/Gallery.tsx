import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const galleryImages = [
  { id: 1, src: '/images/gallery-1.jpg', alt: '产品展示1' },
  { id: 2, src: '/images/gallery-2.jpg', alt: '产品展示2' },
  { id: 3, src: '/images/gallery-3.jpg', alt: '产品展示3' },
  { id: 4, src: '/images/gallery-4.jpg', alt: '产品展示4' },
  { id: 5, src: '/images/gallery-5.jpg', alt: '产品展示5' },
]

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            企业风采
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient">福欧泰化工</span>风采展示
          </h2>
          <div className="divider-gradient mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            现代化生产设备、专业研发团队、优质产品展示
          </p>
        </div>

        {/* Gallery Grid - Optimized for 5 images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square bg-muted rounded-xl overflow-hidden border border-border/50 cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-primary-foreground text-sm font-medium px-3 py-1 bg-primary/80 rounded-full">
                  点击预览
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors"
          >
            <X className="w-8 h-8 text-primary-foreground" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-4 z-10 p-3 rounded-full bg-background/20 hover:bg-background/40 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-primary-foreground" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 z-10 p-3 rounded-full bg-background/20 hover:bg-background/40 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-primary-foreground" />
          </button>

          {/* Image */}
          <div 
            className="max-w-5xl max-h-[85vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Counter */}
            <div className="text-center mt-4">
              <span className="text-primary-foreground/80 text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                className={cn(
                  "w-16 h-16 rounded-lg overflow-hidden border-2 transition-all",
                  currentIndex === index 
                    ? "border-primary scale-110" 
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
