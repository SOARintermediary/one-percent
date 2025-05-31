"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/ThemeToggle'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Membership', path: '/membership' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-playfair text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">ELYSIUM</span>
            <span className="text-sm font-medium tracking-wider">AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.path} legacyBehavior passHref>
                      <NavigationMenuLink 
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary",
                          pathname === item.path ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="default" 
              size="sm"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 hidden md:block"
            >
              Apply for Membership
            </Button>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-accent"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-md border-b">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className={cn(
                      "block py-2 text-base font-medium transition-colors hover:text-primary",
                      pathname === item.path ? "text-primary" : "text-muted-foreground"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button 
                  variant="default" 
                  size="sm"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 w-full mt-2"
                >
                  Apply for Membership
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}