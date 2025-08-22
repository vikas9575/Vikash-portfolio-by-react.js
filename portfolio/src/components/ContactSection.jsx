import { Instagram, Linkedin, Mail, MapPin, Send, Phone } from "lucide-react"
import { cn } from "../lib/utils"

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get IN <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          It's a great oportunity to work with eachother
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:vikashm9575@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    vikashm9575@mail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919575255975"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +91 (9575255975)
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-primary">
                    Indore, MP
                  </span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/vikash-mewada-09a47631a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><Linkedin /></a>
                <a href="https://www.instagram.com/invites/contact/?igsh=1070inlcnts6b&utm_content=ecsiq41"><Instagram /></a>
              </div>
            </div>
          </div>

          {/* Form */}
         
        </div>
      </div>
    </section>
  )
}
