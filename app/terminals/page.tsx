import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Anchor, Phone, Mail, ArrowRight, Globe, Clock, User2, Clock1 } from "lucide-react"
import Image from "next/image"

export default function TerminalsPage() {
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/6.jpg"
            alt="Global terminals map"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-600/20 text-blue-100 border-blue-400">
            Global Network
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Strategic Terminal
            <span className="block text-blue-400">Locations</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our strategically positioned terminals across major shipping hubs provide seamless access to global markets,
            ensuring efficient logistics solutions for our clients worldwide.
          </p>
        </div>
      </section>

      {/* Global Overview */}
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

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Storage at Multiple Locations?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our integrated terminal network allows for seamless multi-location operations and optimized supply chain
            management.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8">
            Discuss Multi-Terminal Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
