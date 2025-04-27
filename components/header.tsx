"use client"


import { useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ChevronDown } from "lucide-react"



const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Departments", href: "/departments" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

const mainNav = navigation.slice(0, 4);
const moreNav = navigation.slice(4);


export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.jpg" alt="MediVisa Japan Logo" width={60} height={70} />
        <span className="text-2xl font-bold text-primary">Nippon Medical Center</span>
         </Link>

        </div>

        {/* Desktop navigation */}
        {/* <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div> */}

<div className="hidden md:flex md:gap-x-8 items-center relative">
  {mainNav.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === item.href ? "text-primary" : "text-muted-foreground",
      )}
    >
      {item.name}
    </Link>
  ))}

<div className="relative">
  <button
    onClick={() => setIsDropdownOpen((prev) => !prev)}
    className="text-sm font-medium flex items-center gap-1 hover:text-primary text-muted-foreground"
  >
    More <ChevronDown className="w-4 h-4" />
  </button>

  {isDropdownOpen && (
    <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
      {moreNav.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={() => setIsDropdownOpen(false)} // optional: close dropdown on click
        >
          {item.name}
        </Link>
      ))}
    </div>
  )}
</div>

</div>


        <div className="hidden md:block">
          <Link href="/booking">
            <Button>Book Now</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold text-primary">
              MediVisa Japan
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}