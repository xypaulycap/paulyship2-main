import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Award,
  Users,
  FileCheck,
  AlertTriangle,
  Leaf,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
} from "lucide-react"
import Image from "next/image"

export default function HSEQPage() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management Systems",
      issuer: "Lloyd's Register",
      validUntil: "2025",
      icon: Award,
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management Systems",
      issuer: "DNV GL",
      validUntil: "2025",
      icon: Leaf,
    },
    {
      name: "ISO 45001:2018",
      description: "Occupational Health & Safety",
      issuer: "Bureau Veritas",
      validUntil: "2025",
      icon: Shield,
    },
    {
      name: "ISPS Code",
      description: "International Ship & Port Facility Security",
      issuer: "Port Authority",
      validUntil: "2024",
      icon: FileCheck,
    },
  ]

  const safetyMetrics = [
    { label: "Lost Time Injury Rate", value: 0.12, target: 0.15, unit: "per 200,000 hours" },
    { label: "Environmental Incidents", value: 0, target: 0, unit: "incidents/year" },
    { label: "Safety Training Hours", value: 2400, target: 2000, unit: "hours/year" },
    { label: "Audit Compliance", value: 98.5, target: 95, unit: "%" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/1.jpg"
            alt="Safety and quality operations"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-emerald-600/20 text-emerald-100 border-emerald-400">
            Safety & Quality Excellence
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            HSEQ &<span className="block text-emerald-400">Certifications</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our commitment to Health, Safety, Environment, and Quality excellence drives every aspect of our operations,
            ensuring the highest standards of performance and compliance.
          </p>
        </div>
      </section>

      {/* HSEQ Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
                Our Commitment
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Safety is Our Foundation</h2>
              <p className="text-lg text-slate-600 mb-8">
                We maintain an unwavering commitment to the health and safety of our employees, contractors, and
                communities. Our comprehensive HSEQ management system ensures continuous improvement and regulatory
                compliance across all operations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Zero Harm Philosophy</h4>
                    <p className="text-slate-600">
                      Every employee has the right to return home safely every day. We maintain a zero-tolerance
                      approach to preventable incidents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Environmental Stewardship</h4>
                    <p className="text-slate-600">
                      We minimize our environmental impact through sustainable practices and continuous monitoring of
                      our operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Quality Excellence</h4>
                    <p className="text-slate-600">
                      Our quality management systems ensure consistent, reliable service delivery that exceeds customer
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/1.jpg"
                alt="Safety training and operations"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-1">0</div>
                <div className="text-sm text-slate-600">Lost Time Injuries (2023)</div>
              </div>
            </div>
          </div>

          {/* Safety Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyMetrics.map((metric, index) => (
              <Card key={metric.label} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-slate-900 text-sm">{metric.label}</h4>
                    <TrendingUp className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">
                    {typeof metric.value === "number" && metric.value < 1 && metric.value > 0
                      ? metric.value.toFixed(2)
                      : metric.value}
                  </div>
                  <div className="text-xs text-slate-500 mb-3">{metric.unit}</div>
                  <Progress
                    value={metric.unit === "%" ? metric.value : (metric.value / metric.target) * 100}
                    className="h-2"
                  />
                  <div className="text-xs text-slate-500 mt-2">
                    Target: {metric.target} {metric.unit}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              International Standards
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Certified Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our operations are certified to the highest international standards, demonstrating our commitment to
              quality, safety, and environmental responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert) => (
              <Card key={cert.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">{cert.description}</p>
                  <div className="text-sm text-slate-500 space-y-1">
                    <div>Issued by: {cert.issuer}</div>
                    <div>Valid until: {cert.validUntil}</div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 w-full bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              Download All Certificates
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Safety Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Comprehensive Safety Programs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our integrated approach to safety encompasses training, monitoring, and continuous improvement across all
              operational areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Safety Training</h3>
                <p className="text-slate-600 mb-6">
                  Comprehensive training programs ensure all personnel are equipped with the knowledge and skills to
                  work safely.
                </p>
                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>• Mandatory safety induction</li>
                  <li>• Regular refresher training</li>
                  <li>• Emergency response drills</li>
                  <li>• Specialized equipment training</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Risk Management</h3>
                <p className="text-slate-600 mb-6">
                  Systematic identification, assessment, and mitigation of risks across all operational activities.
                </p>
                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>• Hazard identification studies</li>
                  <li>• Risk assessment protocols</li>
                  <li>• Incident investigation</li>
                  <li>• Preventive action plans</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Continuous Improvement</h3>
                <p className="text-slate-600 mb-6">
                  Regular audits, reviews, and improvements ensure our safety standards continue to evolve and improve.
                </p>
                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>• Internal safety audits</li>
                  <li>• Management reviews</li>
                  <li>• Performance monitoring</li>
                  <li>• Best practice sharing</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/c.jpg"
                alt="Environmental monitoring"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Leaf className="h-5 w-5 text-emerald-600" />
                  <span className="font-semibold text-slate-900">Carbon Neutral</span>
                </div>
                <div className="text-sm text-slate-600">Operations by 2030</div>
              </div>
            </div>

            <div>
              <Badge variant="secondary" className="mb-4 bg-emerald-200 text-emerald-800">
                Environmental Excellence
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Protecting Our Environment</h2>
              <p className="text-lg text-slate-600 mb-8">
                We are committed to minimizing our environmental impact through innovative technologies, sustainable
                practices, and continuous monitoring of our operations.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">Real-time emissions monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">Waste reduction and recycling programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">Energy efficiency improvements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">Biodiversity protection initiatives</span>
                </div>
              </div>

              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                View Environmental Report
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Our Safety Standards?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our HSEQ team is available to discuss our safety protocols, certifications, and compliance requirements.
          </p>
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8">
            Contact HSEQ Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
