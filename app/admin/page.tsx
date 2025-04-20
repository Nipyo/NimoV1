"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { format } from "date-fns"
import { Calendar, Clock, Edit, Trash2, Download, Search } from "lucide-react"

interface Booking {
  id: string
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  notes: string
}

export default function AdminPage() {
  const { toast } = useToast()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [bookings, setBookings] = useState<Booking[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  useEffect(() => {
    // In a real app, you would fetch bookings from your backend
    // This is just a simulation with mock data
    if (isAuthenticated) {
      const mockBookings: Booking[] = [
        {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          phone: "(123) 456-7890",
          service: "Basic Package",
          date: "2023-06-15",
          time: "10:00 AM",
          notes: "First-time customer",
        },
        {
          id: "2",
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "(123) 456-7891",
          service: "Premium Package",
          date: "2023-06-16",
          time: "2:00 PM",
          notes: "",
        },
        {
          id: "3",
          name: "Bob Johnson",
          email: "bob@example.com",
          phone: "(123) 456-7892",
          service: "Standard Package",
          date: "2023-06-17",
          time: "11:00 AM",
          notes: "Returning customer",
        },
        {
          id: "4",
          name: "Alice Brown",
          email: "alice@example.com",
          phone: "(123) 456-7893",
          service: "Basic Package",
          date: "2023-06-18",
          time: "9:00 AM",
          notes: "",
        },
        {
          id: "5",
          name: "Charlie Wilson",
          email: "charlie@example.com",
          phone: "(123) 456-7894",
          service: "Premium Package",
          date: "2023-06-19",
          time: "3:00 PM",
          notes: "Special requirements discussed via email",
        },
      ]

      setBookings(mockBookings)
    }
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would validate the password against your backend
    // This is just a simple demo with a hardcoded password
    if (password === "admin123") {
      setIsAuthenticated(true)
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel.",
      })
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid password. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleDeleteBooking = (id: string) => {
    // In a real app, you would send a delete request to your backend
    setBookings(bookings.filter((booking) => booking.id !== id))
    setIsDeleteDialogOpen(false)

    toast({
      title: "Booking Deleted",
      description: "The booking has been successfully deleted.",
    })
  }

  const exportBookings = () => {
    // Create CSV content
    const headers = ["Name", "Email", "Phone", "Service", "Date", "Time", "Notes"]
    const csvContent = [
      headers.join(","),
      ...bookings.map((booking) =>
        [
          booking.name,
          booking.email,
          booking.phone,
          booking.service,
          booking.date,
          booking.time,
          `"${booking.notes.replace(/"/g, '""')}"`,
        ].join(","),
      ),
    ].join("\n")

    // Create a blob and download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", `bookings-${format(new Date(), "yyyy-MM-dd")}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "Export Successful",
      description: "Bookings have been exported to CSV.",
    })
  }

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.date.includes(searchTerm),
  )

  if (!isAuthenticated) {
    return (
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Admin Login</h1>

          <form onSubmit={handleLogin} className="space-y-6 bg-white p-8 rounded-lg border">
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
              />
              <p className="text-sm text-muted-foreground mt-2">For demo purposes, use: admin123</p>
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <p className="text-muted-foreground mb-8">Manage bookings and appointments</p>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full sm:w-[300px]"
          />
        </div>

        <Button onClick={exportBookings} variant="outline" className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" />
          Export to CSV
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No bookings found
                </TableCell>
              </TableRow>
            ) : (
              filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.name}</TableCell>
                  <TableCell>{booking.service}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {booking.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      {booking.time}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="text-sm">{booking.email}</div>
                      <div className="text-sm text-muted-foreground">{booking.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setSelectedBooking(booking)
                        // In a real app, you would implement an edit functionality
                        toast({
                          title: "Edit Feature",
                          description: "Edit functionality would be implemented in the full version.",
                        })
                      }}
                    >
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setSelectedBooking(booking)
                        setIsDeleteDialogOpen(true)
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the booking for {selectedBooking?.name}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => selectedBooking && handleDeleteBooking(selectedBooking.id)}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
