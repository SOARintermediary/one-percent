import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Lightbulb, Award, Calendar, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import MembershipCTA from '@/components/sections/MembershipCTA'
import TestimonialCarousel from '@/components/sections/TestimonialCarousel'
import { Users, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
          style={{ backgroundPosition: "center 30%" }}
        ></div>
        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              <span className="block">ELYSIUM</span>
              <span className="text-sm md:text-base lg:text-lg tracking-widest mt-2 opacity-90">ARTIFICIAL INTELLIGENCE</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              Dubai&apos;s most exclusive members-only social club for elite business professionals, powered by artificial intelligence.
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
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 animate-bounce">
          <ArrowRight className="h-6 w-6 text-white opacity-60 transform rotate-90" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight">
                <span className="gold-gradient">The Future</span> of Elite Networking
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Elysium AI is more than a members club. It&apos;s a curated community where Dubai&apos;s most influential business leaders connect, collaborate, and receive personalized AI-powered insights tailored to their specific needs and ambitions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                What begins as a social experiment will evolve into Dubai's most sought-after membership, blending human connection with artificial intelligence to create unparalleled business opportunities.
              </p>
              <div className="pt-2">
                <Button 
                  variant="outline" 
                  className="border-amber-500/20 text-amber-500 hover:bg-amber-500/10"
                  asChild
                >
                  <Link href="/about">
                    Our Vision <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Business professionals networking" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 md:p-6 rounded-xl shadow-elegant max-w-xs">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/10 p-2 rounded-full">
                    <Lightbulb className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">AI-Powered Insights</h4>
                    <p className="text-xs text-muted-foreground mt-1">Personalized business intelligence tailored to your specific industry and goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Exclusive Member <span className="gold-gradient">Benefits</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Elysium AI offers an unparalleled suite of benefits designed for elite business professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <Card key={index} className="bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
                <div className="p-6">
                  <div className="bg-amber-500/10 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-medium mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advisory Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-amber-500/10 px-3 py-1 rounded-full text-amber-500 text-sm font-medium mb-2">
                Advanced Technology
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight">
                AI-Powered <span className="gold-gradient">Advisory Services</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our proprietary AI platform analyzes vast amounts of business data, market trends, and member profiles to deliver personalized insights that give you a competitive edge.
              </p>
              
              <ul className="space-y-3 pt-2">
                {aiFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square shadow-elegant">
              <Image 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI Advisory Technology" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 md:p-8">
                  <p className="text-white font-medium">
                    "Our AI system processes over 10,000 data points to generate strategic recommendations tailored to your specific business challenges."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Location Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-elegant order-2 lg:order-1">
              <Image 
                src="https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Elysium AI Dubai location" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight">
                Exceptional <span className="gold-gradient">Location</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Located in the heart of Downtown Dubai with breathtaking views of the Burj Khalifa, our exclusive club space offers the perfect setting for both business and relaxation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Club Amenities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      <span>Private meeting rooms</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      <span>Executive lounge</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      <span>Fine dining restaurant</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      <span>Concierge services</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Technology</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      <span>AI advisory terminals</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      <span>Virtual meeting spaces</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      <span>Digital concierge</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      <span>Advanced security</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button 
                className="mt-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                asChild
              >
                <Link href="/contact">
                  Schedule a Tour <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <MembershipCTA />
    </div>
  )
}

const benefitsData = [
  {
    icon: <Users className="h-6 w-6 text-amber-500" />,
    title: "Elite Networking",
    description: "Connect with Dubai's most successful business leaders, entrepreneurs, and investors in an exclusive setting."
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-amber-500" />,
    title: "AI Business Insights",
    description: "Access proprietary AI-powered business intelligence and strategic advice tailored to your specific needs."
  },
  {
    icon: <Award className="h-6 w-6 text-amber-500" />,
    title: "Prestige & Recognition",
    description: "Join an elite community that enhances your professional reputation and personal brand."
  },
  {
    icon: <Calendar className="h-6 w-6 text-amber-500" />,
    title: "Exclusive Events",
    description: "Participate in high-profile gatherings, speaker series, and networking functions with industry leaders."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-amber-500" />,
    title: "Curated Connections",
    description: "Our AI matches you with the most valuable connections based on your business goals and interests."
  },
  {
    icon: <Award className="h-6 w-6 text-amber-500" />,
    title: "Luxury Amenities",
    description: "Enjoy premium facilities including private meeting rooms, fine dining, and concierge services."
  }
];

const aiFeatures = [
  "Strategic business insights based on market trends and competitor analysis",
  "Personalized networking recommendations that align with your specific goals",
  "Industry-specific intelligence curated for your particular sector",
  "Risk assessment and opportunity identification customized to your business",
  "Regular strategy sessions with AI-augmented human advisors"
];