import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Nippon Medical Center</h3>
            <p className="text-muted-foreground">
              Specialized medical examinations for visa applications.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                JPETS Health Examination
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                Immigration Health Examination
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Comprehensive Health Check
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground">
              <p>New-Buspark, Macchapokhari</p>
              <p>Kathmandu, Nepal</p>
              <p className="mt-2">Phone: (01) 4958923</p>
              <p>Email: info@nippon-medical.com.np</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Nippon Medical Center . All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
