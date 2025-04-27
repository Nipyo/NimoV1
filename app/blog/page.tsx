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
  location: string
}

export default function ServicesPage() {
  // Medical examination services for Japanese working visa
  const services: Service[] = [
    {
      id: "standard",
      name: "Step 1",
      description: "After booking an appointment arrival and registration at the center.",
      price: "रु 5-10 minutes",
      location: "Reception",
      features: ["Check for ID verification", "Data Collection", "Explanation", " Informed Consent",],
    },
    {
      id: "express",
      name: "Step 2",
      description: "Interview and physical examination.",
      price: "15-30 minutes",
      location: "Doctor Room",
      features: [
        "Government-approved Immigration Consultant",
        "Doctor Consultation",
        "Past History Check",
        "Lab Order",
      ],
      popular: true,
    },
    {
      id: "comprehensive",
      name: "Step 3 ",
      description: "Results",
      price: "रु 24-48 hours",
      location: "Service Desk",
      features: [
        "Government-Approval for Medical Certificate",
        "Globally Recognized Certificate",
        "Further Investigation",
        "Referrals for specialist care",
        "Detailed health certificate",
      ],
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-300 to-indigo-800">
    {/* Heading */}
    <h1 className="text-5xl font-bold mb-4 text-center text-white">
      IMMIGRATION MEDICAL EXAMINATION
    </h1>

    {/* Introduction */}
    <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed space-y-6 text-white">
        Nepal is in a high-risk zone for communicable diseases such as tuberculosis (TB), HIV/AIDS, syphilis,
        gonorrhea, hepatitis B, and hepatitis C. National statistics show that nearly <strong>15 million people</strong>—
        almost half of Nepal’s population—are infected with TB. Each year, around <strong>44,000 new cases</strong> are detected, 
        and <strong>5,000–7,000</strong> people die of TB.
        <br /><br />

        One infected person can transmit the disease to an average of <strong>20 healthy individuals</strong>. 
        For this reason, many countries restrict immigration for individuals with TB or suspected cases.
        <br /><br />

        As of 2016, the HIV prevalence among adults was <strong>0.17%</strong>, but certain high-risk groups—
        such as people who inject drugs, female sex workers, and LGBTQ+ individuals—have a prevalence rate of over <strong>5%</strong>.
        Thus, Nepal’s HIV epidemic is classified as a <em>concentrated epidemic</em>.
        <br /><br />

        Many countries also prohibit the entry of foreign students and workers with infectious diseases like TB, STIs, 
        HIV/AIDS, or pulmonary scars.
      </p>

      <h2 className="text-4xl font-bold mb-4 text-center text-white">
      Blogs
    </h2>
    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-white">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>

    {/* Examination Info */}
    <section className="max-w-4xl mx-auto mb-16 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Examination Information</h2>
      <div className="prose prose-lg max-w-none text-white">
        <p>
          All our medical examinations are conducted by licensed physicians in accordance with Government of Nepal immigration
          requirements. Our medical certificates are accepted for working visa applications.
        </p>
        <p>
          We recommend arriving <strong>15 minutes early</strong> to your appointment. Please bring your passport and any prior medical records. For some tests, fasting for <strong>8–12 hours</strong> may be required.
        </p>

        <h3>Examination Process</h3>
        <ol>
          <li>Registration and document verification</li>
          <li>Vital signs check (height, weight, blood pressure)</li>
          <li>Blood and urine sample collection</li>
          <li>Physical examination by a physician</li>
          <li>Chest X-ray</li>
          <li>Additional tests based on your selected package</li>
          <li>Receive your medical certificate (timing may vary)</li>
        </ol>

        <p>
          If you have any questions or special requirements, feel free to{" "}
          <Link href="/contact" className="text-primary hover:underline text-white">
            contact us
          </Link>
          . We're here to help!
        </p>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-muted py-12 rounded-lg text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Ready to Book Your Examination?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Schedule your visa medical examination today to proceed with your application.
      </p>
      <Link href="/booking">
        <Button size="lg" className="text-lg px-8">
          Book Examination
        </Button>
      </Link>
    </section>
  </main>
);
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
        <p className="text-muted-foreground mb-4 text-white">{service.description}</p>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold ">{service.price}</span>
          <span className="text-muted-foreground ml-2">/ session</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6 text-white">Location: {service.location}</p>
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
