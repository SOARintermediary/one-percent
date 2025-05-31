import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Shield, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import MembershipApplication from '@/components/sections/MembershipApplication'

export const metadata = {
  title: 'Membership | Elysium AI',
  description: 'Explore membership options for Elysium AI, Dubai\'s premier artificial intelligence-powered private members club.',
}

export default function MembershipPage() {
  return (
    <div className="flex flex-col w-full pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold tracking-tight">
                <span className="gold-gradient">Membership</span> Opportunities
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Elysium AI offers tiered membership options, each providing exclusive access to our revolutionary blend of AI-powered business intelligence and elite social networking.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                All memberships are subject to application approval, as we carefully curate our community to ensure the highest quality experience for all members.
              </p>
              <div className="flex items-center space-x-2 pt-2">
                <Shield className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-medium">Strictly limited membership availability</span>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Elysium AI Membership" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between">
                  <div>
                    <p className="text-white/70 text-sm">Applications Open</p>
                    <p className="text-white font-medium">Limited Spots Available</p>
                  </div>
                  <div className="bg-amber-500/90 text-white px-4 py-2 rounded-full text-sm font-medium mt-2 sm:mt-0">
                    <Clock className="inline-block h-4 w-4 mr-1" /> Next Review: May 15
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Membership <span className="gold-gradient">Tiers</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Select the membership level that aligns with your professional goals and networking needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={cn(
                  "bg-card border-border/50 rounded-xl overflow-hidden hover:shadow-card-hover transition-all duration-300",
                  tier.featured && "border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.1)]"
                )}
              >
                <CardHeader className={cn(
                  "pb-4",
                  tier.featured && "bg-gradient-to-r from-amber-500/10 to-amber-600/10"
                )}>
                  {tier.featured && (
                    <div className="bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full w-fit mb-2">
                      MOST POPULAR
                    </div>
                  )}
                  <CardTitle className="font-playfair text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <p className="text-3xl font-playfair font-bold">
                      {tier.price}
                      <span className="text-muted-foreground text-base font-normal">/year</span>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {tier.priceDetails}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-amber-500 mr-3 mt-0.5 shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className={cn(
                      "w-full",
                      tier.featured 
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white" 
                        : "bg-card border border-amber-500/20 text-amber-500 hover:bg-amber-500/10"
                    )}
                    asChild
                  >
                    <a href="#apply">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All memberships are subject to a one-time application fee of AED 5,000. Corporate membership packages are also available for organizations seeking multiple memberships. Please contact us for details.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits in Detail */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Membership <span className="gold-gradient">Benefits</span> in Detail
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover the comprehensive suite of exclusive benefits available to Elysium AI members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {detailedBenefits.map((benefit, index) => (
              <div key={index} className="space-y-4">
                <div className="bg-amber-500/10 w-12 h-12 flex items-center justify-center rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="font-playfair text-xl font-medium">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 md:py-28 bg-background" id="apply">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight">
                Application <span className="gold-gradient">Process</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Elysium AI maintains a selective application process to ensure our community consists of exceptional professionals who contribute to our unique ecosystem.
              </p>
              
              <div className="space-y-6 pt-2">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-medium">
                      {index + 1}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <MembershipApplication />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const membershipTiers = [
  {
    name: "Executive",
    description: "Entry-level access to Elysium AI's exclusive community and core features.",
    price: "AED 100,000",
    priceDetails: "One-time joining fee + annual dues",
    featured: false,
    benefits: [
      "Access to club facilities during standard hours",
      "Basic AI advisory services (2 sessions monthly)",
      "Invitation to select networking events",
      "Digital concierge services",
      "Access to member directory",
      "Business lounge access"
    ]
  },
  {
    name: "Founding",
    description: "Our most popular tier with comprehensive access and premium services.",
    price: "AED 250,000",
    priceDetails: "One-time joining fee + annual dues",
    featured: true,
    benefits: [
      "24/7 access to all club facilities",
      "Advanced AI advisory services (unlimited)",
      "Priority invitations to all events",
      "Dedicated relationship manager",
      "Private dining room access",
      "Guest privileges (up to 5 per month)",
      "International club reciprocity",
      "Exclusive investment opportunities"
    ]
  },
  {
    name: "Legacy",
    description: "The ultimate Elysium experience with bespoke services and maximum privileges.",
    price: "AED 500,000",
    priceDetails: "One-time joining fee + annual dues",
    featured: false,
    benefits: [
      "All Founding member benefits",
      "Personalized AI business strategy team",
      "Private event hosting privileges",
      "Global concierge services",
      "Helicopter transfer services",
      "Unlimited guest privileges",
      "Board meeting participation",
      "Early access to new club locations",
      "Lifetime membership option"
    ]
  }
];

const detailedBenefits = [
  {
    icon: <Star className="h-6 w-6 text-amber-500" />,
    title: "AI Advisory Services",
    description: "Our proprietary AI system analyzes your business goals, market trends, and competitive landscape to provide personalized strategic advice and growth opportunities."
  },
  {
    icon: <Users className="h-6 w-6 text-amber-500" />,
    title: "Curated Networking",
    description: "Beyond random introductions, our AI identifies the most valuable potential connections based on mutual benefit, compatibility, and strategic alignment."
  },
  {
    icon: <Calendar className="h-6 w-6 text-amber-500" />,
    title: "Exclusive Events",
    description: "From intimate dinners with industry titans to thought leadership panels, our events bring together the brightest minds in business, technology, and finance."
  },
  {
    icon: <Shield className="h-6 w-6 text-amber-500" />,
    title: "Private Facilities",
    description: "Our Downtown Dubai location offers luxurious meeting rooms, dining areas, lounges, and workspaces designed for productivity and privacy."
  },
  {
    icon: <Clock className="h-6 w-6 text-amber-500" />,
    title: "Concierge Services",
    description: "Our team handles everything from restaurant reservations and travel arrangements to business service referrals, saving you valuable time."
  },
  {
    icon: <ArrowRight className="h-6 w-6 text-amber-500" />,
    title: "Global Access",
    description: "Reciprocal arrangements with select international clubs ensure you have access to premium facilities and networks wherever business takes you."
  }
];

const applicationSteps = [
  {
    title: "Initial Application",
    description: "Complete our online application form with your professional background, achievements, and membership goals."
  },
  {
    title: "Preliminary Review",
    description: "Our membership committee reviews your application to assess alignment with our community values and standards."
  },
  {
    title: "Personal Interview",
    description: "Selected applicants are invited for a personal interview with a membership director to discuss mutual expectations."
  },
  {
    title: "Final Approval",
    description: "Applications are presented to the membership committee for final approval on a monthly basis."
  }
];