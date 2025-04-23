"use client"

import React, { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { useToast } from "@/hooks/use-toast"

type AppointmentFormData = {
  fullName: string
  email: string
  dob: Date | null
  appointmentDate: Date | null
  message: string
  phonenumber: string
  passportNo: string
  issueDate: Date | null
  expiryDate: Date | null
  gender: string
  age:string
}

export default function BookingForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: "",
    email: "",
    dob: null,
    appointmentDate: null,
    message: "",
    phonenumber:"",
    passportNo: "",
    issueDate: null,
    expiryDate: null,
    gender: "",
    age:"",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (!formData.fullName || !formData.email || !formData.passportNo || !formData.gender) {
      toast({
        title: "Incomplete Form",
        description: "Please fill all the required fields.",
        variant: "destructive",
      })
      return
    }
  
    setIsSubmitting(true)
  
    try {
      const response = await axios.post("https://localhost:7034/api/Booking/create", {
        ...formData,
        dob: formData.dob?.toISOString(),
        appointmentDate: formData.appointmentDate?.toISOString(),
        issueDate: formData.issueDate?.toISOString(),
        expiryDate: formData.expiryDate?.toISOString(),
      })  
  
      console.log("Submitted:", response.data)
  
      toast({
        title: "Appointment Submitted",
        description: `Appointment for ${formData.fullName} submitted successfully!`,
      })
  
      setFormData({
        fullName: "",
        email: "",
        dob: null,
        appointmentDate: null,
        message: "",
        phonenumber:"",
        passportNo: "",
        issueDate: null,
        expiryDate: null,
        gender: "",
        age:"",
      })
    } catch (error) {
      console.error("Submission error:", error)
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   if (!formData.fullName || !formData.email || !formData.passportNo || !formData.gender) {
  //     toast({
  //       title: "Incomplete Form",
  //       description: "Please fill all the required fields.",
  //       variant: "destructive",
  //     })
  //     return
  //   }

  //   setIsSubmitting(true)

  //   // Simulate submission
  //   setTimeout(() => {
  //     console.log("Submitted:", formData)

  //     toast({
  //       title: "Appointment Submitted",
  //       description: 'Appointment for ${formData.fullName} submitted successfully!',
  //     })

  //     setFormData({
  //       fullName: "",
  //       email: "",
  //       dob: null,
  //       appointmentDate: null,
  //       message: "",
  //       phonenumber:"",
  //       passportNo: "",
  //       issueDate: null,
  //       expiryDate: null,
  //       gender: "",
  //       age:"",
  //     })

  //     setIsSubmitting(false)
  //   }, 1500)
  // }

  const renderDatePicker = (
    label: string,
    value: Date | null,
    onChange: (date: Date | null) => void
  ) => (
    <div className="space-y-1   ">

      <label className="block text-sm font-medium">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[50vw] justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, "PPP") : <span>Select a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
        <Calendar
  mode="single"
  selected={value ?? undefined}
  onSelect={(date) => onChange(date ?? null)}
  initialFocus
/>


        </PopoverContent>
      </Popover>
    </div>
  )

  return (
    
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 md:p-10 bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden space-y-6"> 
      <h2 className="text-lg font-semibold">Book an Appointment</h2>
      <Input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />

      <Input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Email"
        required
      />

      {renderDatePicker("Date of Birth", formData.dob, (date) => setFormData((prev) => ({ ...prev, dob: date })))}
      {renderDatePicker("Appointment Date", formData.appointmentDate, (date) =>
        setFormData((prev) => ({ ...prev, appointmentDate: date }))
      )}

      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows={3}
      />

      <Input
        name="phonenumber"
        value={formData.phonenumber}
        onChange={handleChange}
        type="tel"
        placeholder="Phone Number"
        required
      />

      <Input
        name="passportNo"
        value={formData.passportNo}
        onChange={handleChange}
        placeholder="Passport Number"
        required
      />

      {renderDatePicker("Passport Issue Date", formData.issueDate, (date) =>
        setFormData((prev) => ({ ...prev, issueDate: date }))
      )}
      {renderDatePicker("Passport Expiry Date", formData.expiryDate, (date) =>
        setFormData((prev) => ({ ...prev, expiryDate: date }))
      )}

      <div>
        <label className="block text-sm font-medium mb-1 text-">Gender</label>
        <Select
          value={formData.gender}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, gender: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Input
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="age"
        required
      />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Appointment"}
     </Button>
    </form>
    
  )
}