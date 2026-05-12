"use client"

import { useState } from "react"
import { Mail, MessageSquare, Send, Instagram, Youtube, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

const iconMap = {
  Mail,
  MessageSquare,
  Instagram,
  Youtube,
  Twitter,
}

export function Contact() {
  const { contact, socials } = siteConfig
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {contact.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="rounded-xl bg-card border border-border p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {contact.form.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  required
                >
                  <option value="">Select project type</option>
                  {contact.projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                {contact.form.submitButton}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Quick Contact
              </h3>
              {contact.methods.map((method, index) => {
                const Icon = iconMap[method.icon as keyof typeof iconMap] || Mail
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{method.title}</p>
                      <p className="text-sm text-muted-foreground">{method.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Response Time */}
            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <h4 className="font-semibold text-foreground mb-2">
                {contact.responseInfo.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                {contact.responseInfo.description}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">{contact.responseInfo.status}</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                {socials.map((social, index) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap] || Instagram
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
