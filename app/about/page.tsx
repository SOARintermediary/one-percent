import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Users, Shield, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card'
import MembershipCTA from '@/components/sections/MembershipCTA'

export const metadata = {
  title: 'About | Elysium AI',
  description: 'Learn about Elysium AI, Dubai\'s premier artificial intelligence-powered private members club for elite business professionals.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-about-pattern bg-cover bg-center"
          style={{ backgroundPosition: "center 30%" }}
        ></div>
        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Our Vision
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              Transforming elite business networking through the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight">
                Our <span className="gold-gradient">Story</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Elysium AI began as a vision to redefine the intersection of business networking and technology. In the rapidly evolving landscape of Dubai's business sector, we identified a unique opportunity to create more than just another members club.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our founders, a collective of tech visionaries and business leaders, developed a proprietary AI system that could analyze complex business environments, identify strategic opportunities, and facilitate meaningful connections between professionals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                What started as an experimental concept has evolved into Dubai's most innovative private members club, where artificial intelligence enhances human connection rather than replacing it.
              </p>
              <Separator className="my-6" />
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <span className="text-4xl font-playfair font-bold gold-gradient">2023</span>
                  <p className="text-sm text-muted-foreground">Founded</p>
                </div>
                <div>
                  <span className="text-4xl font-playfair font-bold gold-gradient">150+</span>
                  <p className="text-sm text-muted-foreground">Elite Members</p>
                </div>
                <div>
                  <span className="text-4xl font-playfair font-bold gold-gradient">$50M+</span>
                  <p className="text-sm text-muted-foreground">Business Generated</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-xl overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Business professionals" 
                    width={400}
                    height={500}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden mt-8">
                  <Image 
                    src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="AI visualization" 
                    width={400}
                    height={500}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card p-4 md:p-6 rounded-xl shadow-elegant max-w-xs">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/10 p-2 rounded-full">
                    <Sparkles className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Social Experiment</h4>
                    <p className="text-xs text-muted-foreground mt-1">A revolutionary approach to combining human networking with artificial intelligence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Our <span className="gold-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide our vision and shape our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuesData.map((value, index) => (
              <Card key={index} className="bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
                <div className="p-6 text-center">
                  <div className="bg-amber-500/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Leadership <span className="gold-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The visionaries behind Elysium AI's revolutionary concept.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamData.map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-playfair text-xl font-medium">{member.name}</h3>
                <p className="text-amber-500 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight">
                Frequently Asked <span className="gold-gradient">Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Learn more about Elysium AI and how our exclusive club is reshaping the future of business networking in Dubai.
              </p>
              <div className="pt-4">
                <Button 
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                  asChild
                >
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                  <Separator className="mt-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <MembershipCTA />
    </div>
  )
}

const valuesData = [
  {
    icon: <Sparkles className="h-6 w-6 text-amber-500" />,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our club, from our AI technology to our member experiences."
  },
  {
    icon: <Users className="h-6 w-6 text-amber-500" />,
    title: "Community",
    description: "We foster meaningful connections that transcend traditional networking, creating a true community of leaders."
  },
  {
    icon: <Shield className="h-6 w-6 text-amber-500" />,
    title: "Integrity",
    description: "We uphold the highest standards of ethics and privacy in all our interactions and data handling."
  },
  {
    icon: <Calendar className="h-6 w-6 text-amber-500" />,
    title: "Innovation",
    description: "We continuously evolve our AI capabilities and club offerings to stay at the forefront of technology and luxury."
  }
];

const teamData = [
  {
    name: "Aisha Al Mansoori",
    role: "Founder & CEO",
    bio: "Former tech executive with extensive experience in AI development and luxury hospitality. Visionary behind Elysium's unique concept.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "James Chen",
    role: "Chief Technology Officer",
    bio: "AI pioneer with multiple patents in machine learning and natural language processing. Architect of Elysium's proprietary AI system.",
    image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Sophia Rahman",
    role: "Membership Director",
    bio: "Former luxury brand executive with expertise in creating exceptional client experiences and curating exclusive communities.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const faqData = [
  {
    question: "What makes Elysium AI different from other members clubs?",
    answer: "Elysium AI integrates advanced artificial intelligence into every aspect of the membership experience, from personalized business insights to curated networking connections, creating a truly unique and valuable community."
  },
  {
    question: "How are members selected?",
    answer: "Our selection process evaluates potential members based on professional accomplishments, industry influence, and potential contributions to our community. We maintain a diverse membership across industries while ensuring all members meet our standards of excellence."
  },
  {
    question: "What is the 'social experiment' aspect of Elysium?",
    answer: "The social experiment refers to our innovative approach of combining AI technology with traditional networking. We're exploring how artificial intelligence can enhance human connections rather than replace them, creating more meaningful and productive business relationships."
  },
  {
    question: "What type of AI technology does Elysium use?",
    answer: "Our proprietary AI system incorporates multiple technologies including natural language processing, predictive analytics, and machine learning algorithms. This allows us to provide personalized business insights, strategic recommendations, and optimal networking connections."
  },
  {
    question: "How much does membership cost?",
    answer: "Membership fees vary based on the tier selected. We offer different levels of access and services, with annual fees starting at AED 100,000. For detailed pricing information, please contact our membership team."
  }
];