import { Github, Linkedin, Mail, Phone, Twitter, Youtube } from 'lucide-react';

function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white px-4 pt-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        
        {/* Contact Form */}
        <form className="max-w-lg mx-auto mb-12 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <a href="mailto:meerajahmadgonnuru@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition duration-300">
            <Mail className="w-6 h-6" />
            meerajahmadgonnuru@gmail.com
          </a>
          <a href="tel:+919502553535" className="flex items-center gap-2 hover:text-blue-400 transition duration-300">
            <Phone className="w-6 h-6" />
            +919502553535
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <SocialLink href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" icon={<Linkedin />} />
          <SocialLink href="https://x.com/GMeeraj" icon={<Twitter />} />
          <SocialLink href="https://github.com/G-Meeraj" icon={<Github />} />
          <SocialLink href="https://www.youtube.com/@kolamax7845" icon={<Youtube />} />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition duration-300"
    >
      {icon}
    </a>
  );
}

export default Contact;