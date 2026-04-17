import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Calendar, MapPin, Users, CheckCircle2, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Sponsor Information | Hack DI",
  description: "Learn about sponsorship opportunities for Hack DI, Darul Islah's inaugural 24-hour hackathon.",
}

export default function SponsorInfoPage() {
  return (
    <div className="min-h-screen bg-deepgreen text-white flex flex-col">
      <Navbar />

      <main className="flex-grow relative">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-deepgreen/80 via-deepgreen to-deepgreen/80" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center font-mono">
              Sponsor <span className="text-gold">Hack DI</span>
            </h1>

            <div className="h-px w-24 bg-gold/50 mx-auto my-8"></div>

            <div className="bg-deepgreen-50/10 backdrop-blur-sm p-8 rounded-lg border border-deepgreen-100 mb-12">
              <h2 className="text-2xl font-bold mb-6 font-mono">About Hack DI</h2>
              <p className="text-gray-300 mb-6">
                Hack DI is Darul Islah's inaugural 24-hour hackathon, bringing together high school and college students
                to innovate, collaborate, and develop solutions to real-world problems. This event offers participants
                mentorship, workshops, networking opportunities, and a platform to showcase their skills.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Dates</h3>
                    <p className="text-gray-300">June 28-29, 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-300">Darul Islah Community Center</p>
                    <p className="text-gray-300">320 Fabry Terrace, Teaneck, NJ</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Expected Attendance</h3>
                    <p className="text-gray-300">50-100 participants</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ExternalLink className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Online Presence</h3>
                    <p className="text-gray-300">
                      Website:{" "}
                      <a href="https://hack.darulislah.org" className="text-gold hover:underline">
                        hack.darulislah.org
                      </a>
                    </p>
                    <p className="text-gray-300">
                      Instagram:{" "}
                      <a href="https://instagram.com/hackdarulislah" className="text-gold hover:underline">
                        @hackdarulislah
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-deepgreen-50/10 backdrop-blur-sm p-8 rounded-lg border border-deepgreen-100 mb-12">
              <h2 className="text-2xl font-bold mb-6 font-mono">Sponsorship Tiers</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-deepgreen-100">
                      <th className="py-4 px-2 text-left">Benefit</th>
                      <th className="py-4 px-2 text-center">
                        Bronze
                        <br />
                        ($250)
                      </th>
                      <th className="py-4 px-2 text-center">
                        Silver
                        <br />
                        ($750)
                      </th>
                      <th className="py-4 px-2 text-center">
                        Gold
                        <br />
                        ($1,500)
                      </th>
                      <th className="py-4 px-2 text-center">
                        Platinum
                        <br />
                        ($3,000)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-deepgreen-100/50">
                      <td className="py-3 px-2">Logo on website and banners</td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-deepgreen-100/50">
                      <td className="py-3 px-2">Verbal thank-you</td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-deepgreen-100/50">
                      <td className="py-3 px-2">Social media mention</td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-deepgreen-100/50">
                      <td className="py-3 px-2">Logo on T-shirts</td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-deepgreen-100/50">
                      <td className="py-3 px-2">Swag bag inclusion</td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-deepgreen-100/50">
                      <td className="py-3 px-2">Table at venue</td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-deepgreen-100/50">
                      <td className="py-3 px-2">Resume book access</td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-deepgreen-100/50">
                      <td className="py-3 px-2">Email blast feature</td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-deepgreen-100/50">
                      <td className="py-3 px-2">Host workshop</td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-deepgreen-100/50">
                      <td className="py-3 px-2">Premium booth</td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-deepgreen-100/50">
                      <td className="py-3 px-2">Jummah pitch (1,000+ audience)</td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-deepgreen-100/50">
                      <td className="py-3 px-2">Premier Sponsor Recognition</td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center"></td>
                      <td className="py-3 px-2 text-center">
                        <CheckCircle2 className="h-5 w-5 text-gold mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-300 font-medium">Commitment Deadline: June 15, 2025</p>
                <p className="text-gray-300 mt-2">
                  Darul Islah is a 501(c)(3) nonprofit - all donations are tax-deductible.
                </p>
              </div>
            </div>

            <div className="bg-deepgreen-50/10 backdrop-blur-sm p-8 rounded-lg border border-deepgreen-100 mb-12">
              <h2 className="text-2xl font-bold mb-6 font-mono">Contact Information</h2>

              <div className="flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-12">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-300">(201) 960-5959</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:hackathon@darulislah.org" className="text-gold hover:underline">
                      hackathon@darulislah.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-300">
                  To become a sponsor, contact Hasan Arain at (201) 960-5959 or{" "}
                  <a href="mailto:hackathon@darulislah.org" className="text-gold hover:underline">
                    hackathon@darulislah.org
                  </a>
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 shadow-[0_0_5px_rgba(225,186,67,0.2)] hover:shadow-[0_0_10px_rgba(225,186,67,0.4)]"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
