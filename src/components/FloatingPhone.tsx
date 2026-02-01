import { Phone } from 'lucide-react'

export function FloatingPhone() {
  return (
    <a
      href="tel:400-816-0061"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="拨打电话"
    >
      <Phone className="w-6 h-6 group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        400-816-0061
      </span>
      
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
    </a>
  )
}
