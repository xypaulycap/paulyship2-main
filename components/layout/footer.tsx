import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Anchor, MapPin, Phone, Mail, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Anchor className="h-5 w-5 text-white" />
                
              </div> */}
              <img src="/images/logo7.jpeg" alt="" className="w-[75px]" />
              <span className="text-xl font-bold text-green-900">Oriana Shipping B.V</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Leading provider of integrated logistics solutions, specializing in bulk liquid storage, transshipment,
              and vessel leasing services across strategic global locations.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-slate-800">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-slate-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-slate-800">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Tank Storage
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Transshipment
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Vessel Leasing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Logistics Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Specialty Chemicals
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/terminals" className="text-slate-300 hover:text-white transition-colors">
                  Our Terminals
                </Link>
              </li>
              <li>
                <Link href="/hseq" className="text-slate-300 hover:text-white transition-colors">
                  HSEQ & Certifications
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-300 hover:text-white transition-colors">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300">
                  <div> Zwanebloem 9,</div>
                  <div>3344 BM, </div>
                  <div>Hendrik-ido-ambacht</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300">+31 10 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300">info@orianashippingbv.nl</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Button size="icon" className="bg-blue-600 hover:bg-blue-700 flex-shrink-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-slate-400 mt-2">Get updates on industry news and our services.</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-slate-400">
            © Oriana Shipping B.V. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-slate-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
