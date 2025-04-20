import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Service {
  id: string
  name: string
  description: string
  price: string
  features: string[]
  popular?: boolean
  duration: string
}

export default function ServicesPage() {
  // Medical examination services for Japanese working visa
  const services: Service[] = [
    {
      id: "standard",
      name: "JPETS Health Examination",
      description: "Complete Japan Pre-Entry Tuberculosis Screening examination for Japanese Visa Applications",
      price: "रु 5,500",
      duration: "30-60 minutes",
      features: ["Physical examination", "Chest X-ray", "Sputum test", "IGRA test", "JPETS medical certificate"],
    },
    {
      id: "express",
      name: "Immigration Health Examination",
      description: "Expedited medical examination with next-day results, applicable for Working Visa Applicants",
      price: "रु 4,500",
      duration: "15-30 minutes",
      features: [
        "Government-approved Immigration health test",
        "Next-day results",
        "Priority processing",
        "Express medical certificate",
        "Digital copy of results",
      ],
      popular: true,
    },
    {
      id: "comprehensive",
      name: "Comprehensive Health Check",
      description: "Complete health assessment with migrating countries work permit requirements",
      price: "रु 6,500",
      duration: "30-60 minutes",
      features: [
        "All Immigration Health examination tests",
        "Electrocardiogram (ECG)",
        "Abdominal ultrasound",
        "Vision and hearing tests",
        "Detailed health report",
        "Work Permit Medical Online",
      ],
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Medical Examination Services</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        We offer specialized medical examinations for Japanese working visa applications. Choose the service that best
        meets your needs and timeline.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Examination Information</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            All our medical examinations are conducted by licensed physicians in accordance with Government of Nepal immigration
            requirements. Our medical certificates are accepted by the Government of Nepal for working visa
            applications.
          </p>
          <p>
            We recommend arriving 15 minutes before your scheduled appointment. Please bring your passport and any
            previous medical records if available. For certain tests, you may need to fast for 8-12 hours prior to your
            examination.
          </p>
          <h3>Examination Process</h3>
          <ol>
            <li>Registration and document verification</li>
            <li>Initial vital signs check (height, weight, blood pressure)</li>
            <li>Blood and urine sample collection</li>
            <li>Physical examination by a physician</li>
            <li>Chest X-ray</li>
            <li>Additional tests as required by your selected package</li>
            <li>Receive your medical certificate (timing depends on package selected)</li>
          </ol>
          <p>
            If you have any questions or special requirements, please don't hesitate to{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>
            . We're here to help!
          </p>
        </div>
      </section>

      <section className="bg-muted py-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Book Your Examination?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Schedule your visa medical examination today to proceed with your visa application.
        </p>
        <Link href="/booking">
          <Button size="lg" className="text-lg px-8">
            Book Examination
          </Button>
        </Link>
      </section>
    </main>
  )
}

interface ServiceCardProps {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={`rounded-lg border ${service.popular ? "border-primary shadow-lg relative" : "border-border"} overflow-hidden`}
    >
      {service.popular && (
        <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">Most Popular</div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">{service.price}</span>
          <span className="text-muted-foreground ml-2">/ session</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Duration: {service.duration}</p>
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={`/booking?service=${service.id}`} className="block w-full">
          <Button className="w-full">Book This Package</Button>
        </Link>
      </div>
    </div>
  )
}
