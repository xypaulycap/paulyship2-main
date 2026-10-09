import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
} from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - Tank Storage, Transshipment & Vessel Leasing",
  description: "Comprehensive logistics solutions including bulk liquid storage, transshipment operations, and vessel leasing services. Expert shipping and storage solutions across global terminals.",
  keywords: [
    "tank storage services",
    "bulk liquid storage",
    "transshipment operations",
    "vessel leasing",
    "chemical storage",
    "petroleum storage",
    "ship-to-ship transfer",
    "logistics solutions",
    "Oriana Shipping B.V services"
  ],
  openGraph: {
    title: "Our Services - Tank Storage, Transshipment & Vessel Leasing",
    description: "Comprehensive logistics solutions including bulk liquid storage, transshipment operations, and vessel leasing services.",
    url: "https://www.orianashippingbv.nl/services",
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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
          <Badge variant="secondary" className="mb-6 bg-emerald-600/20 text-emerald-100 border-emerald-400">
            Comprehensive Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From bulk liquid storage to specialized transportation, we deliver integrated logistics solutions that drive
            efficiency, safety, and sustainability across global supply chains.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="storage" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 h-auto p-1 bg-slate-100">
              <TabsTrigger value="storage" className="flex items-center gap-2 py-4 px-6 text-base">
                <Anchor className="h-5 w-5" />
                Tank Storage
              </TabsTrigger>
              <TabsTrigger value="transshipment" className="flex items-center gap-2 py-4 px-6 text-base">
                <Truck className="h-5 w-5" />
                Transshipment
              </TabsTrigger>
              <TabsTrigger value="leasing" className="flex items-center gap-2 py-4 px-6 text-base">
                <Ship className="h-5 w-5" />
                Vessel Leasing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="storage" className="space-y-12">
              <div id="tank" className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
                    Bulk Liquid Storage
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                    Advanced Tank Storage Solutions
                  </h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Our state-of-the-art storage facilities provide secure, temperature-controlled environments for a
                    wide range of bulk liquids, from petroleum products to specialty chemicals.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Thermometer className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Temperature Control</h4>
                        <p className="text-sm text-slate-600">Precise climate management systems</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Safety Systems</h4>
                        <p className="text-sm text-slate-600">Advanced fire suppression & monitoring</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <BarChart3 className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Real-time Monitoring</h4>
                        <p className="text-sm text-slate-600">24/7 inventory tracking & alerts</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Quality Assurance</h4>
                        <p className="text-sm text-slate-600">ISO certified processes</p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Request Storage Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="relative">
                  <Image
                    src="/images/5.jpg"
                    alt="Industrial storage tanks"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-1">500K+</div>
                    <div className="text-sm text-slate-600">CBM Capacity</div>
                  </div>
                </div>
              </div> */}

              {/* Storage Features */}
              {/* <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Anchor className="h-5 w-5 text-blue-600" />
                      </div>
                      Petroleum Products
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Specialized storage for crude oil, refined products, and petrochemicals with advanced safety
                      protocols.
                    </p>
                    <ul className="text-sm text-slate-500 space-y-1">
                      <li>• Crude oil storage</li>
                      <li>• Refined petroleum products</li>
                      <li>• Petrochemical storage</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Zap className="h-5 w-5 text-emerald-600" />
                      </div>
                      Specialty Chemicals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Temperature-controlled storage for specialty chemicals requiring precise environmental conditions.
                    </p>
                    <ul className="text-sm text-slate-500 space-y-1">
                      <li>• Chemical intermediates</li>
                      <li>• Specialty solvents</li>
                      <li>• Temperature-sensitive products</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-amber-600" />
                      </div>
                      Biofuels & Renewables
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Sustainable storage solutions for biofuels and renewable energy products supporting the energy
                      transition.
                    </p>
                    <ul className="text-sm text-slate-500 space-y-1">
                      <li>• Biodiesel storage</li>
                      <li>• Ethanol handling</li>
                      <li>• Renewable feedstocks</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="transshipment" className="space-y-12">
              <div id="transship" className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Image
                    src="/images/12.webp"
                    alt="Port transshipment operations"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">24/7</div>
                    <div className="text-sm text-slate-600">Operations</div>
                  </div>
                </div>

                <div>
                  <Badge variant="secondary" className="mb-4 bg-emerald-100 text-emerald-800">
                    Cargo Transfer Services
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                    Efficient Transshipment Operations
                  </h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Our strategic port locations and advanced equipment enable seamless cargo transfers, reducing
                    transit times and optimizing supply chain efficiency.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">Ship-to-ship liquid transfers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">Multi-modal logistics coordination</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">Customs clearance support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">Real-time cargo tracking</span>
                    </div>
                  </div>

                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Learn More About Transshipment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="leasing" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800">
                    Fleet Solutions
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Flexible Vessel Leasing</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Access our modern fleet of specialized vessels with flexible leasing terms, comprehensive
                    maintenance, and operational support to meet your shipping requirements.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Ship className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Chemical Tankers</h4>
                        <p className="text-sm text-slate-600">Specialized vessels for chemical transport</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Flexible Terms</h4>
                        <p className="text-sm text-slate-600">Short and long-term leasing options</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Full Maintenance</h4>
                        <p className="text-sm text-slate-600">Comprehensive maintenance included</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Global Coverage</h4>
                        <p className="text-sm text-slate-600">Worldwide operational support</p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                    Explore Fleet Options
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="relative">
                  <Image
                    src="/images/2.jpg"
                    alt="Chemical tanker vessel"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-3xl font-bold text-amber-600 mb-1">50+</div>
                    <div className="text-sm text-slate-600">Vessels Available</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section> */}

      <section className="py-20 bg-white">
  <div className="container mx-auto px-4 space-y-24">

    {/* 1. Tank Storage */}
    <div className="space-y-12" id="tank-storage">
       
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="/images/5.jpg"
            alt="Industrial storage tanks"
            width={800}
            height={600}
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-1">700K+</div>
            <div className="text-sm text-slate-600">CBM Capacity</div>
          </div>
        </div>
        <div>
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
            Bulk Liquid Storage
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Advanced Tank Storage Solutions
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our state-of-the-art storage facilities provide secure, temperature-controlled environments for a
            wide range of bulk liquids, from petroleum products to specialty chemicals.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Reuse feature icons */}
          </div>

          {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Request Storage Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button> */}
        </div>

       
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Storage Feature Cards */}
      </div>
    </div>

    {/* 2. Transshipment */}
    <div className="space-y-12" id="transshipment">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="/images/v3.jpeg"
            alt="Port transshipment operations"
            width={800}
            height={600}
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-1">24/7</div>
            <div className="text-sm text-slate-600">Operations</div>
          </div>
        </div>

        <div>
          <Badge variant="secondary" className="mb-4 bg-emerald-100 text-emerald-800">
            Cargo Transfer Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Efficient Transshipment Operations
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our strategic port locations and advanced equipment enable seamless cargo transfers, reducing
            transit times and optimizing supply chain efficiency.
          </p>

          <div className="space-y-4 mb-8">
            {/* List of Features */}
          </div>

          {/* <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Learn More About Transshipment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button> */}
        </div>
      </div>
    </div>

    {/* 3. Vessel Leasing */}
    <div className="space-y-12" id="vessel-leasing">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="/images/v4.jpeg"
            alt="Chemical tanker vessel"
            width={800}
            height={600}
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-amber-600 mb-1">50+</div>
            <div className="text-sm text-slate-600">Vessels Available</div>
          </div>
        </div>
        <div>
          <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800">
            Fleet Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Flexible Vessel Leasing</h2>
          <p className="text-lg text-slate-600 mb-8">
            Access our modern fleet of specialized vessels with flexible leasing terms, comprehensive
            maintenance, and operational support to meet your shipping requirements.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Leasing Features */}
          </div>

          {/* <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            Explore Fleet Options
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button> */}
        </div>

        
      </div>
    </div>

  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our experts can design integrated logistics solutions tailored to your specific requirements and operational
            challenges.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
            Contact Our Experts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
