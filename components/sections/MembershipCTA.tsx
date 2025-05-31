import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MembershipCTA() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 md:p-12 lg:p-16">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,225,125,0.2),transparent_40%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,225,125,0.2),transparent_40%)]"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Experience the Elysium Difference
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Join Dubai's most innovative and exclusive members-only club where elite business meets artificial intelligence. Applications are reviewed monthly, with limited spots available.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                asChild
              >
                <Link href="/membership">
                  Apply for Membership <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}