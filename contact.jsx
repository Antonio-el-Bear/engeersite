import React, { useState } from "react";
import { base44 } from "./api/base44Client";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { useToast } from "./components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project_type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.entities.ContactInquiry.create(formData);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        project_type: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-teal-400">Touch</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let's discuss how we can bring your engineering vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-gray-400 mb-8">
                Reach out to us and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">info@engitech.com</p>
                  <p className="text-gray-400">projects@engitech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-400">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Office</h3>
                  <p className="text-gray-400">
                    123 Engineering Plaza
                    <br />
                    Innovation District
                    <br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative h-64 rounded-xl overflow-hidden border border-teal-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-teal-400/50" />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-[#1A1A1A] p-8 rounded-xl border border-teal-500/10">
              <h2 className="font-display text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="bg-[#0A0A0A] border-teal-500/20 text-white focus:border-teal-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="bg-[#0A0A0A] border-teal-500/20 text-white focus:border-teal-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-[#0A0A0A] border-teal-500/20 text-white focus:border-teal-500"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-white mb-2 block">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="bg-[#0A0A0A] border-teal-500/20 text-white focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="project_type" className="text-white mb-2 block">
                  Project Type
                </Label>
                <Select
                  name="project_type"
                  value={formData.project_type}
                  onValueChange={(value) => handleChange("project_type", value)}
                >
                  <SelectTrigger 
                    id="project_type"
                    className="bg-[#0A0A0A] border-teal-500/20 text-white"
                    aria-label="Select project type"
                  >
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1A1A] border-teal-500/20 text-white">
                    <SelectItem value="Infrastructure Design">Infrastructure Design</SelectItem>
                    <SelectItem value="Structural Analysis">Structural Analysis</SelectItem>
                    <SelectItem value="Construction Management">Construction Management</SelectItem>
                    <SelectItem value="Sustainability Consulting">Sustainability Consulting</SelectItem>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="text-white mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project requirements"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="bg-[#0A0A0A] border-teal-500/20 text-white focus:border-teal-500 min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 text-lg font-medium"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}