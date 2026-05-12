// ===========================================
// RODIONE HUB - CENTRAL SITE CONFIGURATION
// Edit this file to change all website content
// ===========================================

export const siteConfig = {
  // -----------------------------------------
  // BRAND & IDENTITY
  // -----------------------------------------
  brand: {
    name: "RodiOne",
    tagline: "Hub",
    logo: "/images/rodione-logo.png",
    description: "Digital tools, templates and editing services for creators and video editors.",
    trustLine: "Built for editors, by an editor",
  },

  // -----------------------------------------
  // NAVIGATION
  // -----------------------------------------
  navigation: {
    links: [
      { href: "#store", label: "Store" },
      { href: "#portfolio", label: "Portfolio" },
      { href: "#community", label: "Community" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    ctaButton: {
      label: "Order Editing",
      href: "#contact",
    },
  },

  // -----------------------------------------
  // HERO SECTION (Experimental Design Studio Style)
  // -----------------------------------------
  hero: {
    // Main scramble text (displayed on hover effect)
    scrambleText: "RODIONE",
    // Labels
    topLabel: "GETTING CREATIVE",
    rightLabel: "RODIONE HUB",
    leftLabel: "EST. 2024",
    bottomBarcode: "rodionehub.site",
    // Corner navigation
    cornerNav: {
      topLeft: { label: "WORKS", href: "#portfolio" },
      topRight: { label: "STORE", href: "#store" },
      bottomLeft: { label: "ABOUT", href: "#faq" },
      bottomRight: { label: "CONTACT", href: "#contact" },
    },
    // Legacy fields for other components that might use them
    title: "RodiOne",
    titleAccent: "Hub",
    subtitle: "Digital tools, templates and editing services for creators and video editors.",
    trustBadge: "Built for editors, by an editor",
    buttons: {
      primary: { label: "Explore Store", href: "#store" },
      secondary: { label: "Order Editing", href: "#contact" },
    },
    stats: [
      { value: "500+", label: "Videos Edited" },
      { value: "50+", label: "Happy Clients" },
      { value: "5+", label: "Years Experience" },
      { value: "24/7", label: "Support" },
    ],
  },

  // -----------------------------------------
  // FEATURED PRODUCT
  // -----------------------------------------
  featuredProduct: {
    badge: "Featured Product",
    name: "Creator Editing Pack",
    status: "Coming Soon",
    description: "A premium pack of editing templates, thumbnail assets, sound design ideas and workflow tools for YouTube editors.",
    ctaButton: "Notify Me When Available",
    ctaSubtext: "Join the waitlist for early access",
    badges: [
      { icon: "Download", label: "Instant Download" },
      { icon: "Infinity", label: "Lifetime Access" },
      { icon: "Film", label: "Premiere Pro / After Effects" },
      { icon: "Youtube", label: "Made for YouTube Editors" },
    ],
  },

  // -----------------------------------------
  // WHAT'S INSIDE
  // -----------------------------------------
  whatsInside: {
    badge: "What's Inside",
    title: "Everything You Need to Edit Like a Pro",
    subtitle: "A complete toolkit designed to speed up your workflow and elevate your content quality.",
    features: [
      { icon: "Layers", title: "Editing Templates", description: "Ready-to-use project files and sequences for fast turnarounds" },
      { icon: "Palette", title: "Thumbnail Assets", description: "Eye-catching graphics, frames, and overlays for YouTube thumbnails" },
      { icon: "Music", title: "Sound Design Ideas", description: "Curated sound effects and music recommendations for impact" },
      { icon: "Zap", title: "Workflow Tools", description: "Keyboard shortcuts, presets, and automation scripts" },
      { icon: "FileVideo", title: "Motion Graphics", description: "Animated titles, transitions, and lower thirds" },
      { icon: "Type", title: "Typography Presets", description: "Professional text animations and font combinations" },
      { icon: "Wand2", title: "Color Grading LUTs", description: "Cinematic color profiles for instant mood changes" },
      { icon: "FolderOpen", title: "Project Organization", description: "Folder structures and naming conventions for efficiency" },
    ],
  },

  // -----------------------------------------
  // SEE IT IN ACTION
  // -----------------------------------------
  seeItInAction: {
    badge: "See It In Action",
    title: "Watch the Tools in Action",
    subtitle: "Real examples of how these tools can transform your editing workflow.",
    videos: [
      { title: "Before & After Transformation", description: "See how raw footage transforms into polished content" },
      { title: "Thumbnail Design Process", description: "From concept to click-worthy thumbnail in minutes" },
      { title: "Motion Graphics Demo", description: "Dynamic titles and transitions in action" },
    ],
    ctaButton: "View Full Showcase",
  },

  // -----------------------------------------
  // PORTFOLIO / CASE STUDIES
  // -----------------------------------------
  portfolio: {
    badge: "Portfolio",
    title: "Case Studies & Recent Work",
    subtitle: "A selection of projects showcasing our editing expertise and creative approach.",
    items: [
      { title: "Gaming Channel Rebrand", category: "Full Video Production", views: "2.5M+", client: "Gaming Creator" },
      { title: "Tech Review Series", category: "Editing & Motion Graphics", views: "1.2M+", client: "Tech YouTuber" },
      { title: "Vlog Transformation", category: "Color Grading & Editing", views: "800K+", client: "Lifestyle Creator" },
      { title: "Educational Content", category: "Animation & Editing", views: "3.1M+", client: "Edu Creator" },
      { title: "Music Video Edit", category: "Creative Editing", views: "500K+", client: "Music Artist" },
      { title: "Documentary Short", category: "Full Post-Production", views: "450K+", client: "Independent Filmmaker" },
    ],
    ctaButton: "View Full Portfolio",
  },

  // -----------------------------------------
  // STORE / PRODUCTS
  // -----------------------------------------
  store: {
    badge: "Store",
    title: "Digital Products & Services",
    subtitle: "Premium tools and editing services to take your content to the next level.",
    products: [
      {
        name: "Starter Template Pack",
        description: "Essential templates for beginners",
        price: "Free",
        status: "available",
        features: ["5 Project Templates", "Basic Transitions", "Quick Start Guide"],
        href: "#",
      },
      {
        name: "Creator Editing Pack",
        description: "Complete toolkit for YouTube editors",
        price: "$49",
        status: "coming-soon",
        features: ["50+ Templates", "Motion Graphics", "Sound Effects", "LUTs"],
        href: "#",
      },
      {
        name: "Pro Editor Bundle",
        description: "Everything plus exclusive content",
        price: "$99",
        status: "coming-soon",
        features: ["All Packs Included", "1-on-1 Support", "Future Updates", "Priority Access"],
        href: "#",
      },
      {
        name: "Custom Editing Service",
        description: "Professional video editing for your content",
        price: "From $150",
        status: "available",
        features: ["Full Video Edit", "Color Grading", "Thumbnail Design", "Revisions"],
        href: "#contact",
      },
    ],
  },

  // -----------------------------------------
  // COMMUNITY
  // -----------------------------------------
  community: {
    badge: "Community",
    title: "Editor Community",
    subtitle: "Join a growing community of video editors sharing knowledge, feedback, and support.",
    features: [
      { icon: "Users", title: "Private Discord", description: "Join a community of like-minded video editors and creators" },
      { icon: "MessageSquare", title: "Weekly Q&A", description: "Get your editing questions answered by professionals" },
      { icon: "Video", title: "Behind the Scenes", description: "Exclusive breakdowns of editing techniques and workflows" },
      { icon: "Trophy", title: "Challenges & Feedback", description: "Participate in editing challenges and get portfolio feedback" },
    ],
    testimonials: [
      { quote: "The templates saved me hours every week. My turnaround time has never been faster.", author: "Alex M.", role: "YouTube Editor" },
      { quote: "Finally found tools that match my workflow. Built by someone who actually edits.", author: "Sarah K.", role: "Content Creator" },
      { quote: "The community alone is worth it. Learning from other editors has been invaluable.", author: "Mike R.", role: "Freelance Editor" },
    ],
    ctaButton: "Join the Community",
    ctaSubtext: "Free to join with any pack purchase",
  },

  // -----------------------------------------
  // FAQ
  // -----------------------------------------
  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our products and services.",
    items: [
      { question: "What software do your templates work with?", answer: "Our templates are designed for Adobe Premiere Pro and After Effects. Most templates are compatible with CC 2020 and later versions. Each product page lists specific compatibility requirements." },
      { question: "Do I get lifetime access to purchased products?", answer: "Yes! All purchased products come with lifetime access. Once you buy a pack, you own it forever and can download it whenever you need. You'll also receive free updates to that product." },
      { question: "Can I use these templates for client work?", answer: "Absolutely. Our standard license allows you to use templates for unlimited personal and client projects. You cannot resell or redistribute the templates themselves." },
      { question: "How does the custom editing service work?", answer: "Simply fill out the contact form with details about your project. We'll review your requirements and provide a custom quote within 24 hours. Typical turnaround is 3-7 days depending on complexity." },
      { question: "What's included in the editing service?", answer: "Our editing service includes full video editing, color grading, basic motion graphics, audio mixing, and thumbnail design. We offer up to 3 revision rounds per project." },
      { question: "Do you offer refunds?", answer: "Due to the digital nature of our products, we generally don't offer refunds once files are downloaded. However, if you experience technical issues, please contact us and we'll work to resolve them." },
      { question: "When will the Creator Editing Pack be available?", answer: "We're currently putting the finishing touches on the Creator Editing Pack. Join the waitlist to be notified first when it launches and receive an exclusive early-bird discount." },
      { question: "How do I access the community?", answer: "Community access is included with any paid pack purchase. After your purchase, you'll receive an invitation link to our private Discord server within 24 hours." },
    ],
    contactCta: {
      title: "Still have questions?",
      subtitle: "Can't find the answer you're looking for? Reach out to us directly.",
      button: "Contact Us",
    },
  },

  // -----------------------------------------
  // CONTACT
  // -----------------------------------------
  contact: {
    badge: "Contact",
    title: "Let's Work Together",
    subtitle: "Ready to level up your content? Get in touch for custom editing services or any questions.",
    form: {
      title: "Send a Message",
      submitButton: "Send Message",
    },
    projectTypes: [
      { value: "editing", label: "Video Editing" },
      { value: "motion", label: "Motion Graphics" },
      { value: "thumbnail", label: "Thumbnail Design" },
      { value: "full", label: "Full Post-Production" },
      { value: "other", label: "Other" },
    ],
    methods: [
      { icon: "Mail", title: "Email", value: "hello@rodione.com", description: "For business inquiries" },
      { icon: "MessageSquare", title: "Discord", value: "Join Community", description: "For quick questions" },
    ],
    responseInfo: {
      title: "Typical Response Time",
      description: "We typically respond within 24 hours during business days. For urgent projects, please mention it in your message.",
      status: "Currently accepting new projects",
    },
  },

  // -----------------------------------------
  // SOCIAL LINKS
  // -----------------------------------------
  socials: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/rodione" },
    { icon: "Youtube", label: "YouTube", href: "https://youtube.com/@rodione" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/rodione" },
  ],

  // -----------------------------------------
  // FOOTER
  // -----------------------------------------
  footer: {
    description: "Digital tools, templates and editing services for creators and video editors. Built for editors, by an editor.",
    links: {
      products: [
        { label: "Creator Pack", href: "#store" },
        { label: "Free Templates", href: "#store" },
        { label: "Editing Service", href: "#contact" },
        { label: "Pro Bundle", href: "#store" },
      ],
      resources: [
        { label: "Portfolio", href: "#portfolio" },
        { label: "Community", href: "#community" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
      legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "License Agreement", href: "/license" },
        { label: "Refund Policy", href: "/refunds" },
      ],
    },
    copyright: "RodiOne. All rights reserved.",
    tagline: "Made with passion for the creator community",
  },
}

export type SiteConfig = typeof siteConfig
