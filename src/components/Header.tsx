import { useState, useEffect } from 'react'
import { Menu, X, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: '首页', href: '#home' },
  { name: '产品中心', href: '#products' },
  { name: '关于我们', href: '#about' },
  { name: '企业优势', href: '#advantages' },
  { name: '联系我们', href: '#contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className={cn(
            "p-2 rounded-xl transition-all duration-300",
            isScrolled ? "bg-primary" : "bg-primary-foreground/20"
          )}>
            <Leaf className={cn(
              "w-6 h-6 transition-colors",
              isScrolled ? "text-primary-foreground" : "text-primary-foreground"
            )} />
          </div>
          <span className={cn(
            "text-xl font-bold transition-colors",
            isScrolled ? "text-foreground" : "text-primary-foreground"
          )}>
            绿丰农业
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "nav-link font-medium",
                isScrolled ? "text-foreground/80 hover:text-foreground" : "text-primary-foreground/90 hover:text-primary-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant={isScrolled ? "default" : "hero"} size="default">
            免费咨询
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="切换菜单"
        >
          {isOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary font-medium py-2 border-b border-border/50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="default" className="mt-2">
            免费咨询
          </Button>
        </nav>
      </div>
    </header>
  )
}
