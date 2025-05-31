"use client"

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export default function AnimatedSection({ 
  children, 
  className,
  delay = 0,
  threshold = 0.2
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active')
          }, delay)
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, threshold])

  return (
    <div ref={sectionRef} className={cn('reveal', className)}>
      {children}
    </div>
  )
}