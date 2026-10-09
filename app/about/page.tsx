import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Shield, Leaf, Users, Award, ArrowRight, CheckCircle, Globe, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Professional team" fill className="object-cover" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-emerald-600/20 text-emerald-100 border-emerald-400">
            About Our Company
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Leading the Future of
            <span className="block text-emerald-400">Sustainable Logistics</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            With over 25 years of expertise, we're driving innovation in bulk liquid storage, transportation, and
            logistics while championing safety, sustainability, and operational excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-8">
                To provide integrated, sustainable logistics solutions that drive efficiency, safety, and environmental
                responsibility across global supply chains. We are committed to supporting our clients' success while
                contributing to the energy transition and a more sustainable future.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Deliver reliable, safe operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Champion environmental sustainability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Foster innovation and continuous improvement</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Eye className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Our Vision</h2>
              <p className="text-lg text-slate-600 mb-8">
                To be the leading European provider of integrated logistics solutions, recognized for our commitment to
                safety, sustainability, and innovation. We envision a future where efficient logistics operations
                contribute to a cleaner, more sustainable world.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">European market leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">Sustainable industry transformation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">Technology-driven innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-slate-200 text-slate-800">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">What Drives Us Forward</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every service we provide, ensuring we deliver excellence
              while maintaining the highest ethical standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Safety First</h3>
                <p className="text-slate-600">
                  Safety is our top priority in every operation, with comprehensive protocols and continuous training to
                  protect our people and environment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Sustainability</h3>
                <p className="text-slate-600">
                  We're committed to environmental stewardship and supporting the transition to cleaner, more
                  sustainable energy solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Excellence</h3>
                <p className="text-slate-600">
                  We strive for operational excellence through continuous improvement, innovation, and maintaining the
                  highest quality standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Partnership</h3>
                <p className="text-slate-600">
                  We build lasting partnerships with our clients, suppliers, and communities based on trust,
                  transparency, and mutual success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
                Our Impact
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Driving Results Through Excellence</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our commitment to operational excellence and sustainable practices has enabled us to achieve significant
                milestones while supporting our clients' success across global markets.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-slate-600">Years of Experience</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">700K+</div>
                  <div className="text-slate-600">CBM Storage Capacity</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
                  <div className="text-slate-600">Vessels in Fleet</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                  <div className="text-slate-600">Strategic Locations</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/1.1-IMG-2-ART-WEB-17-05-2023-1024x683-1.webp"
                alt="Modern industrial facility"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                  <span className="font-semibold text-slate-900">Growing</span>
                </div>
                <div className="text-sm text-slate-600">Sustainable Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-emerald-200 text-emerald-800">
              Sustainability Commitment
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Leading the Energy Transition</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're actively supporting the global transition to cleaner energy through innovative storage solutions,
              sustainable practices, and strategic partnerships in renewable energy sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Green Operations</h3>
                <p className="text-slate-600 mb-6">
                  Implementing energy-efficient technologies and sustainable practices across all our facilities and
                  operations.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• Renewable energy integration</li>
                  <li>• Emission reduction programs</li>
                  <li>• Waste minimization initiatives</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Biofuel Support</h3>
                <p className="text-slate-600 mb-6">
                  Specialized storage and handling capabilities for biofuels and renewable energy products supporting
                  the clean energy transition.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• Biodiesel storage facilities</li>
                  <li>• Ethanol handling systems</li>
                  <li>• Renewable feedstock support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Certifications</h3>
                <p className="text-slate-600 mb-6">
                  Maintaining the highest environmental and quality standards through internationally recognized
                  certifications.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• ISO 14001 Environmental</li>
                  <li>• ISO 9001 Quality Management</li>
                  <li>• OHSAS 18001 Safety</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Partner with us to build a more sustainable, efficient, and innovative logistics industry that benefits
            businesses and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8">
              Explore Partnership Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 bg-transparent"
            >
              Learn More About Our Mission
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
