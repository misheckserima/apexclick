export interface Service {
  id: string
  title: string
  description: string
  image: string
  alt: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  alt: string
  socialLinks: {
    facebook: string
    twitter: string
    instagram: string
    linkedin: string
  }
}

export interface Testimonial {
  id: string
  name: string
  position: string
  content: string
  image: string
  alt: string
}

export interface Achievement {
  id: string
  icon: string
  target: number
  label: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface ContactForm {
  name: string
  phone: string
  email: string
  message: string
}

export interface NewsletterForm {
  email: string
}
