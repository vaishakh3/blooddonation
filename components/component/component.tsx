/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Q0BUhHYYmWv
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Rubik } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { SVGProps } from 'react';

export function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-muted px-4 md:px-6 py-3 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">ആശ്രയ</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Donate
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Find Center
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Blood Types
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="md:hidden">
          <MenuIcon className="w-5 h-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="container px-4 md:px-6 text-center space-y-6">
          <h1 className="text-4xl font-bold text-red-500 sm:text-5xl md:text-6xl">രക്തദാനം മഹാദാനം</h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            Your donation can make a difference. Join us in our mission to ensure a safe and reliable blood supply.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Donate Now
          </Link>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Why Donate Blood?</h2>
            <p className="text-muted-foreground">
              Blood donation is a simple way to make a profound impact on the lives of others. Your donation can help
              save up to three lives and is essential for maintaining a healthy blood supply.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Who Can Donate?</h2>
            <p className="text-muted-foreground">
              Most healthy adults are eligible to donate blood. There are few restrictions, and the process is safe and
              quick. Donating blood is a safe and easy way to help your community.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">How to Donate</h2>
            <p className="text-muted-foreground">
              Donating blood is a simple process that takes about an hour. You can find a local blood drive or donation
              center and make an appointment to get started. Your donation can make a lifesaving difference.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Find a Donation Center</h2>
            <p className="text-muted-foreground">
              Search for blood donation centers near you and schedule an appointment to donate.
            </p>
          </div>
          <form className="flex gap-2 max-w-md mx-auto">
            <Input type="text" placeholder="Enter your zip code" className="flex-1" />
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Blood Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="a-positive">A+</SelectItem>
                <SelectItem value="a-negative">A-</SelectItem>
                <SelectItem value="b-positive">B+</SelectItem>
                <SelectItem value="b-negative">B-</SelectItem>
                <SelectItem value="ab-positive">AB+</SelectItem>
                <SelectItem value="ab-negative">AB-</SelectItem>
                <SelectItem value="o-positive">O+</SelectItem>
                <SelectItem value="o-negative">O-</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit">Search</Button>
          </form>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="#"
              className="group flex flex-col gap-4 rounded-lg bg-card p-6 hover:bg-card/90 transition-colors"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary px-4 py-2 text-primary-foreground">A+</div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">A Positive</h3>
              </div>
              <p className="text-muted-foreground">Learn more about A Positive blood type and how to donate.</p>
            </Link>
            <Link
              href="#"
              className="group flex flex-col gap-4 rounded-lg bg-card p-6 hover:bg-card/90 transition-colors"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary px-4 py-2 text-primary-foreground">A-</div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">A Negative</h3>
              </div>
              <p className="text-muted-foreground">Learn more about A Negative blood type and how to donate.</p>
            </Link>
            <Link
              href="#"
              className="group flex flex-col gap-4 rounded-lg bg-card p-6 hover:bg-card/90 transition-colors"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary px-4 py-2 text-primary-foreground">B+</div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">B Positive</h3>
              </div>
              <p className="text-muted-foreground">Learn more about B Positive blood type and how to donate.</p>
            </Link>
            <Link
              href="#"
              className="group flex flex-col gap-4 rounded-lg bg-card p-6 hover:bg-card/90 transition-colors"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary px-4 py-2 text-primary-foreground">B-</div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">B Negative</h3>
              </div>
              <p className="text-muted-foreground">Learn more about B Negative blood type and how to donate.</p>
            </Link>
            <Link
              href="#"
              className="group flex flex-col gap-4 rounded-lg bg-card p-6 hover:bg-card/90 transition-colors"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary px-4 py-2 text-primary-foreground">AB+</div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">AB Positive</h3>
              </div>
              <p className="text-muted-foreground">Learn more about AB Positive blood type and how to donate.</p>
            </Link>
            <Link
              href="#"
              className="group flex flex-col gap-4 rounded-lg bg-card p-6 hover:bg-card/90 transition-colors"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary px-4 py-2 text-primary-foreground">AB-</div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">AB Negative</h3>
              </div>
              <p className="text-muted-foreground">Learn more about AB Negative blood type and how to donate.</p>
            </Link>
            <Link
              href="#"
              className="group flex flex-col gap-4 rounded-lg bg-card p-6 hover:bg-card/90 transition-colors"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary px-4 py-2 text-primary-foreground">O+</div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">O Positive</h3>
              </div>
              <p className="text-muted-foreground">Learn more about O Positive blood type and how to donate.</p>
            </Link>
            <Link
              href="#"
              className="group flex flex-col gap-4 rounded-lg bg-card p-6 hover:bg-card/90 transition-colors"
              prefetch={false}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary px-4 py-2 text-primary-foreground">O-</div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">O Negative</h3>
              </div>
              <p className="text-muted-foreground">Learn more about O Negative blood type and how to donate.</p>
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#" prefetch={false}>
              Our Mission
            </Link>
            <Link href="#" prefetch={false}>
              Why Donate
            </Link>
            <Link href="#" prefetch={false}>
              Eligibility
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Donate</h3>
            <Link href="#" prefetch={false}>
              Donate Now
            </Link>
            <Link href="#" prefetch={false}>
              Find a Center
            </Link>
            <Link href="#" prefetch={false}>
              Blood Types
            </Link>
            <Link href="#" prefetch={false}>
              Schedule an Appointment
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
            <Link href="#" prefetch={false}>
              Events
            </Link>
            <Link href="#" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Connect</h3>
            <Link href="#" prefetch={false}>
              Facebook
            </Link>
            <Link href="#" prefetch={false}>
              Twitter
            </Link>
            <Link href="#" prefetch={false}>
              Instagram
            </Link>
            <Link href="#" prefetch={false}>
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C11.11 2 4 10 4 15.5C4 19.09 6.91 22 10.5 22C13.54 22 16 19.54 16 16.5C16 10 12.89 2 12 2ZM12 20C10.07 20 8.5 18.43 8.5 16.5C8.5 15.28 9.23 14.2 10.34 13.73L11.71 15.5C12.11 15.96 12.78 16.11 13.34 15.79C14.14 15.31 14.71 14.44 14.87 13.5H16.87C16.53 15.53 15.03 17.1 13 17.68V19.68C14.03 19.38 15 18.61 15.5 17.5H13.5C12.92 18.16 12.01 18.46 11.19 18.13L10.53 17.28L8.6 19.19C9.42 19.69 10.46 20 12 20Z" />
    </svg>
  )
}


function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
