"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium">Our Location</h3>
                <p className="text-muted-foreground">New-Buspark, MacchaPokhari, Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-primary mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium">Phone Number</h3>
                <p className="text-muted-foreground">(977) 9851065231, 01-4958923</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 text-primary mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium">Email Address</h3>
                <p className="text-muted-foreground">info@nippon-medical.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-6 w-6 text-primary mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p className="text-muted-foreground">Sunday - Monday: 9am - 5pm</p>
                <p className="text-muted-foreground">Saturday: Closed</p>
                {/* <p className="text-muted-foreground">Sunday: Closed</p> */}
              </div>
            </div>
          </div>

          <div className="mt-8 h-[300px] w-full bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=600&text=Map"
              alt="Location Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
