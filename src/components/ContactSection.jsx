import { LinkedIn, Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out through any of these channels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 mb-4 rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:srujan.polukonda@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                srujan.polukonda@gmail.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 mb-4 rounded-full bg-primary/10">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a
                href="tel:+447982944621"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +44 7982 944621
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 mb-4 rounded-full bg-primary/10">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Kent, United Kingdom</p>
            </div>
          </div>
        </div>

        {/* LinkedIn CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
          <a
            href="https://www.linkedin.com/in/saipolukonda/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            <LinkedIn className="h-5 w-5" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};