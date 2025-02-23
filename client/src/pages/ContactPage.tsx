import { Mail, Phone, MapPin, Clock} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import SectionHeading from "@/components/custom/SectionHeading";
import CustomButton from "@/components/custom/button/CustomButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Form submission placeholder function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white">
      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <SectionHeading heading="Contact Us" />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="bg-white/10 p-6 shadow-lg text-gray-200">
            <h2 className="mb-6 text-2xl font-semibold">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    className="bg-white/5 text-white"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-white/5 text-white"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </Label>
                <Input
                  id="subject"
                  className="bg-white/5 text-white"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  className="bg-white/5 text-white"
                  placeholder="Your message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <CustomButton className="w-full">Send Message</CustomButton>
            </form>
          </Card>

          {/* Store Information */}
          <div className="space-y-6">
            <Card className="bg-white/10 p-6 shadow-lg text-gray-200">
              <h2 className="mb-4 text-2xl font-semibold">Store Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-orange-400" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-white/70">
                      123 Bike Lane, Cycling City, CC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-orange-400" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-orange-400" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-white/70">info@premiumcycles.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-orange-400" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-white/70">Mon-Fri: 9am-6pm</p>
                    <p className="text-white/70">Sat: 10am-4pm</p>
                    <p className="text-white/70">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media Links */}
            <Card className="bg-white/10 p-6 shadow-lg text-gray-200">
              <h2 className="mb-4 text-2xl font-semibold">Follow Us</h2>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="bg-white/5 text-white hover:bg-white/10"
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/5 text-white hover:bg-white/10"
                >
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/5 text-white hover:bg-white/10"
                >
                  Twitter
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
