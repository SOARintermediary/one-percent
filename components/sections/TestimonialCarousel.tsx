"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    quote: "Elysium AI has transformed how I approach business networking. The AI-powered connections have led to three major partnerships in just two months.",
    name: "Sarah Al Maktoum",
    title: "CEO, FutureTech Investments",
    image: "https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The strategic insights provided by Elysium's AI advisory system helped me identify a market gap that became the foundation of my newest venture.",
    name: "Ahmed Rahman",
    title: "Founder, Quantum Ventures",
    image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Beyond the exceptional networking, Elysium provides a sanctuary for Dubai's business elite. It's where ideas and innovation naturally flourish.",
    name: "Elena Zhang",
    title: "International Business Director, Global Trade Partners",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The exclusive events hosted at Elysium connect you with the right people at the right time. It's networking elevated to an art form.",
    name: "Michael Winters",
    title: "Managing Partner, Stratosphere Capital",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const goToTestimonial = (index: number) => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setActiveIndex(index)
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const nextTestimonial = () => {
    goToTestimonial((activeIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    goToTestimonial((activeIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [activeIndex])

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            What Our <span className="gold-gradient">Members Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how Elysium AI is transforming the business landscape for Dubai's elite.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="w-full flex-shrink-0 bg-background border-none shadow-elegant"
                >
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 relative aspect-square md:aspect-auto">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:bg-gradient-to-l md:from-transparent md:to-black/40"></div>
                      </div>
                      <div className="md:col-span-3 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                        <Quote className="h-10 w-10 text-amber-500/20 mb-4" />
                        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <h4 className="font-playfair text-lg font-medium">{testimonial.name}</h4>
                          <p className="text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Button 
            variant="outline" 
            size="icon"
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border-white/10 hover:bg-background"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button 
            variant="outline" 
            size="icon"
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border-white/10 hover:bg-background"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index 
                    ? "bg-amber-500 w-8" 
                    : "bg-muted-foreground/20 hover:bg-muted-foreground/40"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}