import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  link: string
}

export default function FeatureCard({ title, description, icon, link }: FeatureCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full justify-between">
            Learn More <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
