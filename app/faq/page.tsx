import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  // Sample FAQ data - replace with your actual content later
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment through our online booking system. Simply navigate to the Booking page, select your preferred service, choose an available date and time, and fill in your contact details. You'll receive a confirmation email once your booking is complete.",
    },
    {
      question: "What happens if I need to cancel or reschedule?",
      answer:
        "We understand that plans can change. You can cancel or reschedule your appointment by contacting us at least 24 hours in advance. Please call us or email us with your booking details, and we'll be happy to assist you.",
    },
    {
      question: "How long do the services typically take?",
      answer:
        "The duration of our services varies depending on the package you choose. The Basic Package typically takes 1 hour, the Standard Package takes 2 hours, and the Premium Package takes 3 hours. These times are approximate and may vary slightly based on individual needs.",
    },
    {
      question: "Do you offer gift certificates?",
      answer:
        "Yes, we offer gift certificates for all our services. They make perfect gifts for special occasions. You can purchase them online or by contacting our customer service team.",
    },
    {
      question: "What forms of payment do you accept?",
      answer:
        "We accept all major credit cards, debit cards, and cash payments. Payment is typically collected at the time of service, though some packages may require a deposit at booking.",
    },
    {
      question: "Are there any age restrictions for your services?",
      answer:
        "Some of our services have age restrictions. Please check the specific service details or contact us directly for more information about age requirements.",
    },
    {
      question: "Do I need to prepare anything before my appointment?",
      answer:
        "Preparation requirements vary depending on the service you've booked. We'll provide specific instructions in your confirmation email, or you can contact us directly if you have any questions.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer full refunds for cancellations made at least 48 hours in advance. Cancellations made within 24-48 hours will receive a 50% refund. Unfortunately, we cannot offer refunds for cancellations made less than 24 hours before the appointment.",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Find answers to common questions about our services and booking process.
      </p>

      <div className="max-w-3xl mx-auto mb-16">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="max-w-3xl mx-auto text-center bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-6">
          If you couldn't find the answer to your question, please don't hesitate to contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button variant="default">Contact Us</Button>
          </Link>
          <Link href="/booking">
            <Button variant="outline">Book an Appointment</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
