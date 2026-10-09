import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Anchor,
  Truck,
  Ship,
  Thermometer,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Zap,
  Target,
  AlertTriangle,
  Users,
  Globe,
  Clock1,
  ShieldAlert,
} from "lucide-react";
import Image from "next/image";

const page = () => {
  const terminals = [
    {
      name: "Bulk Liquid Shipping",
      location: "Netherlands",
      description:
        "Specialized shipping services for bulk liquids including petroleum products, chemicals, and edible oils. Our fleet of modern vessels and partnerships with leading shipping companies ensure safe, efficient, and compliant transportation of your liquid cargo across global routes.",
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
      image: "/images/v4.jpeg",
    },
    {
      name: "Container Shipping",
      location: "USA",
      description:
        "Reliable container shipping services for packaged goods and equipment. We offer both FCL (Full Container Load) and LCL (Less than Container Load) services with flexible scheduling and real-time tracking capabilities.",
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
      image: "/images/v2.jpeg",
    },
    {
      name: "Charter Services",
      location: "Singapore",
      description:
        "Custom charter solutions for specialized cargo requirements. Whether you need time charter, voyage charter, or bareboat charter, we provide flexible options tailored to your specific shipping needs and schedule.",
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
      image: "/images/5.jpg",
    },
    {
      name: "Project Cargo Shipping",
      location: "UAE",
      description:
        "Specialized handling and shipping for oversized, heavy, and project cargo. Our experienced team ensures safe transportation of complex shipments with proper documentation and compliance with international regulations.",
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
      image: "/images/2.jpg",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/SK_Saval_050718_0446-b-zonder-logos-v2__FocusFillWyIwLjAwIiwiMC4wMCIsMTMwNCw3MzNd_ext-WyJqcGciLCJ3ZWJwIl0.jpg"
            alt="Industrial operations"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-emerald-600/20 text-emerald-100 border-emerald-400"
          >
            Shipping Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Global Shipping Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive maritime logistics and shipping services connecting
            your cargo to markets worldwide
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
              Connected Across Continents
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Oriana shipping B.V. operates an extensive global shipping network
              connecting major ports and markets worldwide. Our strategic
              partnerships with leading shipping lines, freight forwarders, and
              logistics providers enable us to offer comprehensive maritime
              solutions across all major trade routes. From the busy ports of
              Rotterdam and Antwerp in Europe to the dynamic markets of
              Asia-Pacific and the Americas, our shipping services provide
              reliable, cost-effective, and sustainable transportation
              solutions. We handle everything from documentation and customs
              clearance to final delivery, ensuring a seamless shipping
              experience
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
                  {/* <Badge
                                variant="secondary"
                                className="mb-3 self-start bg-emerald-300 text-emerald-800"
                              >
                                {terminal.location}
                              </Badge> */}

                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    {terminal.name}
                  </h2>

                  <p className="text-base text-slate-600 mb-6 flex-1">
                    {terminal.description}
                  </p>

                  {/* <div className="grid sm:grid-cols-2 gap-4 mb-6">
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
                                </div> */}

                  {/* <div>
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
                                </div> */}
                  {/* </div> */}

                  {/* <div className="bg-gray-50 p-4 rounded-lg border">
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
                              </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Why Choose Our Shipping Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              EXCELLENCE IN MARITIME LOGISTICS.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  Global Coverage
                </h3>
                <p className="text-slate-600 mb-6">
                  Extensive network covering major ports and markets worldwide with reliable service to over 150 countries.
                </p>
                {/* <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>• Mandatory safety induction</li>
                  <li>• Regular refresher training</li>
                  <li>• Emergency response drills</li>
                  <li>• Specialized equipment training</li>
                </ul> */}
                {/* <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button> */}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock1 className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  24/7 Support
                </h3>
                <p className="text-slate-600 mb-6">
                  Round-the-clock customer support and real-time tracking for complete visibility of your shipments.
                </p>
                {/* <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>• Hazard identification studies</li>
                  <li>• Risk assessment protocols</li>
                  <li>• Incident investigation</li>
                  <li>• Preventive action plans</li>
                </ul> */}
                {/* <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button> */}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldAlert className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  Safety & Compliance
                </h3>
                <p className="text-slate-600 mb-6">
                  Rigorous safety protocols and full compliance with international maritime regulations and standards.
                </p>
                {/* <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>• Internal safety audits</li>
                  <li>• Management reviews</li>
                  <li>• Performance monitoring</li>
                  <li>• Best practice sharing</li>
                </ul> */}
                {/* <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
