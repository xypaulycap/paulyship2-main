"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Anchor,
  Truck,
  Shield,
  Award,
  MapPin,
  Users,
  Phone,
  Mail,
  Globe,
  Clock,
  User,
  User2,
  Send,
  Clock1,
} from "lucide-react";
import Link from "next/link";

const heroImages = [
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/5.jpg",
]; // Add your paths here

export default function HomePage() {
  const terminals = [
    {
      name: "Rotterdam Terminal",
      location: "Netherlands",
      description:
        "Our flagship facility in Europe's largest port, offering comprehensive storage and transshipment services.",
      capacity: "250,000 CBM",
      services: [
        "Tank Storage",
        "Ship-to-Ship Transfer",
        "Barge Operations",
        "Rail Connections",
      ],
      contact: {
        phone: "+31 10 123 4567",
        email: "info@orianashippingbv.nl",
      },
      image: "/images/7.jpg",
    },
    {
      name: "Houston Terminal",
      location: "USA",
      description:
        "Strategic Gulf Coast location providing access to major US markets and international shipping routes.",
      capacity: "180,000 CBM",
      services: [
        "Bulk Storage",
        "Pipeline Connections",
        "Truck Loading",
        "Marine Operations",
      ],
      contact: {
        phone: "+1 713 555 0123",
        email: "info@orianashippingbv.nl",
      },
      image: "/images/8.jpg",
    },
    {
      name: "Singapore Terminal",
      location: "Singapore",
      description:
        "Asia-Pacific hub offering specialized storage for chemicals and petroleum products.",
      capacity: "120,000 CBM",
      services: [
        "Chemical Storage",
        "Blending Operations",
        "Container Services",
        "Bunker Supply",
      ],
      contact: {
        phone: "+65 6123 4567",
        email: "info@orianashippingbv.nl",
      },
      image: "/images/9.jpg",
    },
    {
      name: "Fujairah Terminal",
      location: "UAE",
      description:
        "Asia-Pacific hub offering specialized storage for chemicals and petroleum products.",
      capacity: "160,000 CBM",
      services: [
        "Chemical Storage",
        "Blending Operations",
        "Container Services",
        "Bunker Supply",
      ],
      contact: {
        phone: "+65 6123 4567",
        email: "info@orianashippingbv.nl",
      },
      image: "/images/v1.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change every 5 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            key={heroImages[currentIndex]} // Force re-render for transition
            src={heroImages[currentIndex]}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="flex flex-col items-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-emerald-600/20 text-emerald-100 border-emerald-400"
            >
              Leading European Market Solutions
            </Badge>
            <Badge
              variant="secondary"
              className="mb-6 bg-red-600/20 text-red-100 border-red-400"
            >
              KVV: 64773663
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Expert Shipping and
            <span className="block text-emerald-400">Storage Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Delivering reliable transportation and bulk liquid storage solutions
            with a focus on safety, sustainability, and innovation across
            strategic global locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 text-lg"
            >
              Discover Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              View Terminals
            </Button>
          </div>
        </div>

        {/* Curved bottom element */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{
            clipPath: "ellipse(100% 100% at 50% 100%)",
          }}
        />
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-300">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From bulk liquid storage to vessel leasing, we provide integrated
              services that drive efficiency and reliability across the supply
              chain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <img
                src="/images/6.jpg"
                alt="Tank Storage"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <CardContent className="p-8 text-center">
                {/* <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Anchor className="h-8 w-8 text-blue-600" />
                </div> */}
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Tank Storage
                </h3>
                <p className="text-slate-600 mb-6">
                  Temperature-controlled bulk liquid storage facilities with
                  real-time monitoring and advanced safety systems across
                  strategic locations.
                </p>
                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>• Capacity: 50,000 - 500,000 CBM</li>
                  <li>• Temperature-controlled systems</li>
                  <li>• 24/7 monitoring and security</li>
                </ul>
                <Link href="/services#tank" scroll={true}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <img
                src="/images/v3.jpeg"
                alt="Tank Storage"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <CardContent className="p-8 text-center">
                {/* <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <Truck className="h-8 w-8 text-emerald-600" />
                </div> */}
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Transshipment
                </h3>
                <p className="text-slate-600 mb-6">
                  Efficient cargo transfer services with state-of-the-art
                  equipment and experienced teams ensuring seamless operations.
                </p>
                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>• Ship-to-ship transfers</li>
                  <li>• Multi-modal logistics</li>
                  <li>• Customs clearance support</li>
                </ul>
                <Link href="/services#transship" scroll={true}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-emerald-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <img
                src="/images/v4.jpeg"
                alt="Tank Storage"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <CardContent className="p-8 text-center">
                {/* <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div> */}
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Vessel Leasing
                </h3>
                <p className="text-slate-600 mb-6">
                  Flexible leasing options for specialized vessels with
                  comprehensive maintenance and operational support services.
                </p>
                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>• Chemical tankers available</li>
                  <li>• Flexible lease terms</li>
                  <li>• Full maintenance included</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-amber-50 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terminal Details */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-300">
              Connected Across Continents
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our terminal network spans three continents with 4 terminal
              locations, providing comprehensive coverage of major trade routes
              and ensuring reliable supply chain connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {terminals.map((terminal) => (
              <div
                key={terminal.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <Image
                  src={terminal.image || "/placeholder.svg"}
                  alt={`${terminal.name} facility`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6 flex-1 flex flex-col">
                  <Badge
                    variant="secondary"
                    className="mb-3 self-start bg-emerald-300 text-emerald-800"
                  >
                    {terminal.location}
                  </Badge>

                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    {terminal.name}
                  </h2>

                  <p className="text-base text-slate-600 mb-6 flex-1">
                    {terminal.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Storage Capacity
                      </h4>
                      <div className="flex items-center space-x-2">
                        <Anchor className="h-5 w-5 text-green-900" />
                        <span className="text-xl font-bold text-green-900">
                          {terminal.capacity}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Key Services
                      </h4>
                      <ul className="space-y-1">
                        {terminal.services.slice(0, 2).map((service) => (
                          <li
                            key={service}
                            className="text-sm text-slate-600 flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-900 rounded-full" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      All Services Available
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {terminal.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center space-x-2 text-sm text-slate-600"
                        >
                          <div className="w-2 h-2 bg-emerald-900 rounded-full" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16 ">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">
                  710K+
                </h3>
                <p className="text-slate-600">Total Storage Capacity (CBM)</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">4</h3>
                <p className="text-slate-600">Strategic Terminal Locations</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User2 className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">100%</h3>
                <p className="text-slate-600">Client Satisfaction</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock1 className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">24/7</h3>
                <p className="text-slate-600">Customer Support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 bg-emerald-100 text-emerald-800"
              >
                Our Commitment
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-300">
                Driving Sustainable Innovation in Logistics
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We are committed to leading the energy transition while
                maintaining the highest standards of safety, environmental
                responsibility, and operational excellence. Our integrated
                approach ensures reliable, sustainable solutions for our clients
                worldwide.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Safety First
                    </h4>
                    <p className="text-sm text-slate-600">
                      ISO 9001 & 14001 certified operations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Quality Assured
                    </h4>
                    <p className="text-sm text-slate-600">
                      Continuous improvement processes
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Strategic Locations
                    </h4>
                    <p className="text-sm text-slate-600">
                      Rotterdam, Houston, Singapore, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Expert Team
                    </h4>
                    <p className="text-sm text-slate-600">
                      25+ years industry experience
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/about" scroll={true}>
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                  Learn About Our Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <Image
                src="/images/oil-storage-tank-construction.jpg"
                alt="Sustainable industrial operations"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-1">
                  25+
                </div>
                <div className="text-sm text-slate-600">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="p-6 m-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Send Us a Message
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Fill out the form below and our team will get back to you within 24
          hours.
        </p>

        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="" className="mt-1" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="email"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="Company" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="service">Service Interest</Label>
            <Select>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="storage">Tank Storage</SelectItem>
                <SelectItem value="transshipment">Transshipment</SelectItem>
                <SelectItem value="leasing">Vessel Leasing</SelectItem>
                <SelectItem value="integrated">Integrated Solutions</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your requirements..."
              className="mt-1 min-h-[120px]"
            />
          </div>

          <Button size="lg" className="w-full bg-green-900 hover:bg-green-700">
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </form>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact our experts today to discuss how our integrated logistics
            solutions can drive efficiency and sustainability for your
            operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
