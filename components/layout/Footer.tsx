import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Mail, MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-playfair text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">ELYSIUM</span>
              <span className="text-sm font-medium tracking-wider">AI</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              An exclusive members-only social club for elite business professionals seeking advanced AI-powered networking and strategic business advice.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/membership" className="text-muted-foreground hover:text-primary transition-colors">Membership</Link>
              <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-medium">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-amber-500" />
                <p className="text-muted-foreground">
                  Downtown Dubai<br />
                  Burj Khalifa District<br />
                  Dubai, UAE
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-500" />
                <a href="mailto:membership@elysiumai.com" className="text-muted-foreground hover:text-primary transition-colors">
                  membership@elysiumai.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Elysium AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}