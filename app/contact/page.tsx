import Image from 'next/image'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import ContactForm from '@/components/sections/ContactForm'

export const metadata = {
  title: 'Contact | Elysium AI',
  description: 'Connect with Elysium AI, Dubai\'s premier artificial intelligence-powered private members club for elite business professionals.',
}

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Get in <span className="gold-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We're here to answer your questions about Elysium AI and guide you through the membership process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-elegant">
                <div className="aspect-video relative">
                  <Image 
                    src="https://images.pexels.com/photos/14896489/pexels-photo-14896489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Elysium AI Club Dubai" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="font-playfair text-2xl font-semibold mb-6">Our Location</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <p className="font-medium">Elysium AI Club</p>
                        <p className="text-muted-foreground">
                          Burj Khalifa District<br />
                          Downtown Dubai<br />
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:membership@elysiumai.com" className="text-muted-foreground hover:text-amber-500 transition-colors">
                          membership@elysiumai.com
                        </a>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <p className="font-medium">Telephone</p>
                        <a href="tel:+97144123456" className="text-muted-foreground hover:text-amber-500 transition-colors">
                          +971 4 412 3456
                        </a>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 11:00 PM<br />
                          Saturday - Sunday: 10:00 AM - 9:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Visit <span className="gold-gradient">Elysium AI</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our exclusive club is located in the heart of Downtown Dubai, offering easy access and breathtaking views.
            </p>
          </div>

          <div className="aspect-video relative rounded-xl overflow-hidden shadow-elegant">
            <Image 
              src="https://images.pexels.com/photos/1619854/pexels-photo-1619854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Dubai Downtown Map View" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="max-w-xl">
                <h3 className="font-playfair text-2xl font-semibold text-white mb-2">Central Location</h3>
                <p className="text-white/80 mb-4">
                  Situated in the prestigious Burj Khalifa District, Elysium AI offers convenient access to Dubai's business and luxury centers.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                    5 min from Dubai Mall
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                    15 min from DIFC
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                    20 min from Dubai International Airport
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Frequently Asked <span className="gold-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Quick answers to common questions about contacting and visiting Elysium AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactFaqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const contactFaqs = [
  {
    question: "Is parking available at Elysium AI?",
    answer: "Yes, complimentary valet parking is available for all visitors and members at our Downtown Dubai location."
  },
  {
    question: "Do I need an appointment to visit?",
    answer: "Yes, Elysium AI is a private members club. Non-members must schedule an appointment or be invited by a current member to visit our facilities."
  },
  {
    question: "How quickly will I hear back after submitting a membership inquiry?",
    answer: "Our membership team typically responds to all inquiries within 24-48 hours during business days."
  },
  {
    question: "Can I request a tour of the facilities before applying?",
    answer: "Yes, we offer guided tours for prospective members by appointment. Please contact our membership team to arrange a convenient time."
  }
];