"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, Building, MessageSquare, Loader2 } from "lucide-react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { toast } from "sonner"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you within 24 hours.')
        reset()
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const offices = [
    {
      name: "Headquarters",
      address: "Zwanebloem 9, 3344 BM, Hendrik-ido-ambacht",
      phone: "+31 10 123 4567",
      email: "info@orianashippingbv.nl",
      hours: "24/7 Operations",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/10.jpg"
            alt="Contact and communication"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-600/20 text-blue-100 border-blue-400">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Our
            <span className="block text-blue-400">Expert Team</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to discuss your logistics requirements? Our experienced team is available 24/7 to provide expert
            guidance and customized solutions for your business needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Send Us a Message</h2>
              <p className="text-lg text-slate-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="" 
                      className={`mt-1 ${errors.firstName ? 'border-red-500' : ''}`}
                      {...register("firstName", { required: "First name is required" })}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="" 
                      className={`mt-1 ${errors.lastName ? 'border-red-500' : ''}`}
                      {...register("lastName", { required: "Last name is required" })}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="" 
                    className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Company" 
                    className="mt-1"
                    {...register("company")}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="" 
                    className="mt-1"
                    {...register("phone")}
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <Select onValueChange={(value) => setValue("service", value)}>
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
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    className={`mt-1 min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                    {...register("message", { 
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters long"
                      }
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-green-900 hover:bg-green-800 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our global team is ready to assist you with expert guidance and tailored solutions.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">24/7 Support</h4>
                    <p className="text-slate-600 mb-2">Our operations team is available around the clock</p>
                    <p className="text-blue-600 font-medium">+31 10 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email Support</h4>
                    <p className="text-slate-600 mb-2">Send us your inquiries anytime</p>
                    <p className="text-emerald-600 font-medium">info@OrianashippingBV.nl</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Global Presence</h4>
                    <p className="text-slate-600 mb-2">Offices in Rotterdam, Houston, and Singapore</p>
                    <p className="text-amber-600 font-medium">4 Strategic Locations</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-4">Quick Response Times</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">General Inquiries</span>
                    <Badge variant="secondary">{"< 24 hours"}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Technical Support</span>
                    <Badge variant="secondary">{"< 4 hours"}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Emergency Response</span>
                    <Badge variant="destructive">Immediate</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-slate-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
        Our Global Offices
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        With offices strategically located across major shipping hubs, we
        provide local expertise with global reach.
      </p>
    </div>
    <div className="rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.8909735570555!2d4.6336525755406415!3d51.82642208734915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c42e936e0b816d%3A0xbbe63c4653e54238!2sZwanebloem%209%2C%203344%20BM%20Hendrik-Ido-Ambacht%2C%20Netherlands!5e0!3m2!1sen!2sng!4v1754645783193!5m2!1sen!2sng"
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      ></iframe>
    </div>
  </div>
</section>


      {/* Emergency Contact */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Emergency Contact</h2>
            <p className="text-lg text-slate-600 mb-8">
              For urgent operational matters or emergencies, our 24/7 response team is always available.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">+31 10 EMERGENCY</div>
              <div className="text-lg text-slate-600 mb-4">24/7 Emergency Hotline</div>
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
