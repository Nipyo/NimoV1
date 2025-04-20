'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, FileCheck, Globe, Phone, MapPin, BriefcaseMedical, Stethoscope, Microscope} from "lucide-react"
import ImageCarousel from "@/components/image-carousel"
import FeatureCard from "@/components/feature-card"
import Image from "@/node_modules/next/image"

export default function Home() {
  const features = [
    {
      title: "Specialist Consultation",
      description: "Most experienced medical professionals in the city.",
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      link: "/about",
    },
    {
      title: "Scheduled Booking",
      description: "Your time is valuable to us.",
      icon: <Calendar className="h-8 w-8 text-primary" />,
      link: "/booking",
    },
    {
      title: "Diagnostic Services",
      description: "Get in touch with our medical center for inquiries or support.",
      icon: <Microscope className="h-8 w-8 text-primary" />,
      link: "/services",
    },

    {
      title: " Visa & Employment Medical Examinations",
      description: "Goverment-approved immigration medical center. Online services for work permit",
      icon: <BriefcaseMedical className="h-8 w-8 text-primary" />,
      link: "/services",
    },
  ]

  const carouselImages = [
    {
      src: "/Carousel1.png?height=600&width=1200",
      alt: "Modern Medical Facility",
      caption: "Your Health is our Mission",
    },
    {
      src: "/Carousel2.png?height=600&width=1200",
      alt: "Professional Medical Staff",
      caption: "Experienced medical professionals dedicated to your care",
    },
    {
      src: "/Carousel4.png?height=600&width=1200",
      alt: "Efficient Process",
      caption: "Health is Wealth Keep this Treasure Safe",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-black/50 absolute z-10" />
          <img
            src="/Team.png?height=800&width=1600"
            alt="Medical Center"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Migration Health Assessment Center
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">
          Also, book your medical appointments effortlessly with Nippon's online appointment system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="text-lg px-8 py-6">
                Book Examination <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/How_we_do">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white/20"
              >
                Know More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="w-full py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Medical Center</h2>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      {/* Featured Content */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Examination Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Book Appointment</h3>
              <p className="text-muted-foreground">Schedule your visa medical examination online or by phone.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Medical Examination</h3>
              <p className="text-muted-foreground">
                Complete your comprehensive medical check-up with our professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Receive Certificate</h3>
              <p className="text-muted-foreground">
                Get your medical certificate for your visa application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-primary mr-2 mt-1" />
                <p className="text-lg">New-Buspark, MacchaPokhari, Kathmandu, Nepal</p>
              </div>
              <p className="text-lg mb-6">
                Conveniently located in Kathmandu Metropolitan , Our medical center is easily accessible by public transportation
                and close to the Embassy of Japan.
              </p>
              <Link href="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
            <div className="flex-1 h-[300px] w-full bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=600&text=Map"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Visa Medical Examination?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our online booking system makes it easy to schedule your examination at a time that works for you.
          </p>
          <Link href="/booking">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
