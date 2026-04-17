import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award, ExternalLink, Users, MapPin, Heart, Instagram } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "2025 Winners | Hack DI",
  description: "Celebrating the winners and participants of Hack DI 2025 - Darul Islah's first-ever hackathon!",
}

export default function WinnersPage() {
  const winners = [
    {
      place: "1st Place",
      icon: <Trophy className="h-8 w-8 text-gold" />,
      project: "meemm",
      description:
        'A Muslim "X—the everything app." It\'s a directory of mosques and Muslim businesses, integrated with location-based tweets. The UI blends elements of Apple Maps and X/Twitter.',
      link: "https://www.meemm.me/",
      gradient: "from-gold/20 to-gold/5",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1st.jpg-wqdy1lrzBXhDAhVSviOUvk0AdGXNg0.jpeg",
      imageAlt: "1st place winners from meemm team presenting their project",
    },
    {
      place: "2nd Place",
      icon: <Medal className="h-8 w-8 text-gray-300" />,
      project: "Quran Quest",
      description:
        'A "Duolingo" for daily Quran reading. This app helps users track, gamify, and socialize their Quran interaction. The team built an impressive feature set including leaderboards, friend requests, streaks, the entire Quran uploaded, and a social system for comments and reflections.',
      link: "https://hackdi-d09ee.web.app/",
      gradient: "from-gray-300/20 to-gray-300/5",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd.jpg-86gPr13IIJXfbRuhPzJKHWFms3ZltR.jpeg",
      imageAlt: "2nd place winners from Quran Quest team presenting their project",
    },
    {
      place: "3rd Place",
      icon: <Award className="h-8 w-8 text-amber-600" />,
      project: "mqt3",
      description:
        "A directory guiding Muslim shopping choices based on Islamic principles. It's an evolution of the boycott directory concept, providing halal scores and insights on asceticism and anti-materialism relevant to each company or industry search.",
      link: "https://hackdi-e8ga.vercel.app/",
      gradient: "from-amber-600/20 to-amber-600/5",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd.jpg-qjLjxNS9XU3TazV4YLtXHoIDqSsVeb.jpeg",
      imageAlt: "3rd place winners from mqt3 team presenting their project",
    },
  ]

  return (
    <div className="min-h-screen bg-deepgreen text-white flex flex-col">
      <Navbar />

      <main className="flex-grow relative">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-deepgreen/80 via-deepgreen to-deepgreen/80" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
                <span className="text-gold">Hack DI 2025</span>
                <br />
                Winners
              </h1>
              <div className="h-px w-24 bg-gold/50 mx-auto my-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Alhamdulillah, Darul Islah's first-ever Hackathon was a success! 🎉
              </p>
            </div>

            {/* Event Summary */}
            <div className="bg-deepgreen-50/10 backdrop-blur-sm p-8 rounded-lg border border-deepgreen-100 mb-16">
              <h2 className="text-2xl font-bold mb-6 font-mono text-center">Event Highlights</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Users className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">30+ Participants</h3>
                  <p className="text-gray-300">From beginners to experienced coders</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Multi-State Reach</h3>
                  <p className="text-gray-300">Participants from Kentucky and Virginia</p>
                </div>
                <div className="text-center">
                  <Heart className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">24 Hours</h3>
                  <p className="text-gray-300">Of innovation for the Muslim community</p>
                </div>
              </div>

              <p className="text-gray-300 text-center max-w-4xl mx-auto">
                Participants were given 24 hours to build innovative projects aimed at benefiting the Muslim community.
                The skill level of participants varied from beginners to experienced coders, and it was inspiring to see
                how much they learned and accomplished in such a short time. The turnout and engagement from the
                community were truly encouraging.
              </p>
            </div>

            {/* Winners */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center font-mono">
                Winning <span className="text-gold">Projects</span>
              </h2>

              <div className="space-y-12">
                {winners.map((winner, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${winner.gradient} backdrop-blur-sm p-8 rounded-lg border border-deepgreen-100 hover:border-gold/50 transition-all duration-300`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Project Info */}
                      <div className="order-2 lg:order-1">
                        <div className="flex items-center gap-4 mb-4">
                          {winner.icon}
                          <h3 className="text-xl font-bold">{winner.place}</h3>
                        </div>

                        <h4 className="text-2xl font-bold mb-4 text-gold">{winner.project}</h4>
                        <p className="text-gray-300 mb-6 leading-relaxed">{winner.description}</p>

                        <Link href={winner.link} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="outline"
                            className="border-gold text-gold hover:bg-gold/10 shadow-[0_0_5px_rgba(225,186,67,0.2)] hover:shadow-[0_0_10px_rgba(225,186,67,0.4)] flex items-center gap-2 bg-transparent"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Project
                          </Button>
                        </Link>
                      </div>

                      {/* Team Photo */}
                      <div className="order-1 lg:order-2">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={winner.image || "/placeholder.svg"}
                            alt={winner.imageAlt}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram Embed Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center font-mono">
                Event <span className="text-gold">Highlights</span>
              </h2>

              <div className="bg-deepgreen-50/10 backdrop-blur-sm p-8 rounded-lg border border-deepgreen-100">
                <div className="flex items-center justify-center mb-6">
                  <Instagram className="h-6 w-6 text-gold mr-2" />
                  <h3 className="text-xl font-bold">Follow our journey on Instagram</h3>
                </div>

                <div className="flex justify-center">
                  <div className="w-full max-w-lg">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink="https://www.instagram.com/p/DLimgfJOCPa/?utm_source=ig_embed&amp;utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: "#FFF",
                        border: 0,
                        borderRadius: "3px",
                        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                        margin: "1px",
                        maxWidth: "540px",
                        minWidth: "326px",
                        padding: 0,
                        width: "calc(100% - 2px)",
                      }}
                    >
                      <div style={{ padding: "16px" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "50%",
                              flexGrow: 0,
                              height: "40px",
                              marginRight: "14px",
                              width: "40px",
                            }}
                          ></div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              flexGrow: 1,
                              justifyContent: "center",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#F4F4F4",
                                borderRadius: "4px",
                                flexGrow: 0,
                                height: "14px",
                                marginBottom: "6px",
                                width: "100px",
                              }}
                            ></div>
                            <div
                              style={{
                                backgroundColor: "#F4F4F4",
                                borderRadius: "4px",
                                flexGrow: 0,
                                height: "14px",
                                width: "60px",
                              }}
                            ></div>
                          </div>
                        </div>
                        <div style={{ padding: "19% 0" }}></div>
                        <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}>
                          <svg
                            width="50px"
                            height="50px"
                            viewBox="0 0 60 60"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                <g>
                                  <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div style={{ paddingTop: "8px" }}>
                          <div
                            style={{
                              color: "#3897f0",
                              fontFamily: "Arial,sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: 550,
                              lineHeight: "18px",
                            }}
                          >
                            View this post on Instagram
                          </div>
                        </div>
                        <div style={{ padding: "12.5% 0" }}></div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: "14px",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                backgroundColor: "#F4F4F4",
                                borderRadius: "50%",
                                height: "12.5px",
                                width: "12.5px",
                                transform: "translateX(0px) translateY(7px)",
                              }}
                            ></div>
                            <div
                              style={{
                                backgroundColor: "#F4F4F4",
                                height: "12.5px",
                                transform: "rotate(-45deg) translateX(3px) translateY(1px)",
                                width: "12.5px",
                                flexGrow: 0,
                                marginRight: "14px",
                                marginLeft: "2px",
                              }}
                            ></div>
                            <div
                              style={{
                                backgroundColor: "#F4F4F4",
                                borderRadius: "50%",
                                height: "12.5px",
                                width: "12.5px",
                                transform: "translateX(9px) translateY(-18px)",
                              }}
                            ></div>
                          </div>
                          <div style={{ marginLeft: "8px" }}>
                            <div
                              style={{
                                backgroundColor: "#F4F4F4",
                                borderRadius: "50%",
                                flexGrow: 0,
                                height: "20px",
                                width: "20px",
                              }}
                            ></div>
                            <div
                              style={{
                                width: 0,
                                height: 0,
                                borderTop: "2px solid transparent",
                                borderLeft: "6px solid #f4f4f4",
                                borderBottom: "2px solid transparent",
                                transform: "translateX(16px) translateY(-4px) rotate(30deg)",
                              }}
                            ></div>
                          </div>
                          <div style={{ marginLeft: "auto" }}>
                            <div
                              style={{
                                width: "0px",
                                borderTop: "8px solid #F4F4F4",
                                borderRight: "8px solid transparent",
                                transform: "translateY(16px)",
                              }}
                            ></div>
                            <div
                              style={{
                                backgroundColor: "#F4F4F4",
                                flexGrow: 0,
                                height: "12px",
                                width: "16px",
                                transform: "translateY(-4px)",
                              }}
                            ></div>
                            <div
                              style={{
                                width: 0,
                                height: 0,
                                borderTop: "8px solid #F4F4F4",
                                borderLeft: "8px solid transparent",
                                transform: "translateY(-4px) translateX(8px)",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                          justifyContent: "center",
                          padding: "0 16px",
                        }}
                      >
                        <a
                          href="https://www.instagram.com/p/DLimgfJOCPa/?utm_source=ig_embed&amp;utm_campaign=loading"
                          style={{
                            background: "#FFFFFF",
                            lineHeight: 0,
                            padding: "0 0",
                            textAlign: "center",
                            textDecoration: "none",
                            width: "100%",
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#F4F4F4",
                                borderRadius: "50%",
                                flexGrow: 0,
                                height: "40px",
                                marginRight: "14px",
                                width: "40px",
                              }}
                            ></div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#F4F4F4",
                                  borderRadius: "4px",
                                  flexGrow: 0,
                                  height: "14px",
                                  marginBottom: "6px",
                                  width: "100px",
                                }}
                              ></div>
                              <div
                                style={{
                                  backgroundColor: "#F4F4F4",
                                  borderRadius: "4px",
                                  flexGrow: 0,
                                  height: "14px",
                                  width: "60px",
                                }}
                              ></div>
                            </div>
                          </div>
                          <div style={{ padding: "19% 0" }}></div>
                          <div
                            style={{
                              display: "block",
                              height: "50px",
                              margin: "0 auto 12px",
                              width: "50px",
                            }}
                          >
                            <svg
                              width="50px"
                              height="50px"
                              viewBox="0 0 60 60"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                  <g>
                                    <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div style={{ paddingTop: "8px" }}>
                            <div
                              style={{
                                color: "#3897f0",
                                fontFamily: "Arial,sans-serif",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 550,
                                lineHeight: "18px",
                              }}
                            >
                              View this post on Instagram
                            </div>
                          </div>
                        </a>
                      </div>
                    </blockquote>
                    <script async src="//www.instagram.com/embed.js"></script>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <Link
                    href="https://instagram.com/hackdarulislah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline flex items-center justify-center gap-2"
                  >
                    <Instagram className="h-4 w-4" />
                    Follow @hackdarulislah for more updates
                  </Link>
                </div>
              </div>
            </div>

            {/* Thank You Section */}
            <div className="bg-deepgreen-50/10 backdrop-blur-sm p-8 rounded-lg border border-deepgreen-100 mb-12">
              <h2 className="text-2xl font-bold mb-6 font-mono text-center">
                <span className="text-gold">Thank You</span>
              </h2>
              <div className="text-center space-y-4">
                <p className="text-gray-300 text-lg">
                  A special thank you to all the <span className="text-gold font-medium">mentors</span> who dedicated
                  their time and expertise to guide and support the participants.
                </p>
                <p className="text-gray-300 text-lg">
                  Thank you to <span className="text-gold font-medium">everyone</span> who helped make this event
                  possible!
                </p>
                <p className="text-gray-300 text-lg">
                  The success of Hack DI 2025 wouldn't have been possible without our amazing
                  <span className="text-gold font-medium"> community, participants, mentors, and sponsors</span>.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 shadow-[0_0_5px_rgba(225,186,67,0.2)] hover:shadow-[0_0_10px_rgba(225,186,67,0.4)] bg-transparent"
                >
                  Back to Home
                </Button>
              </Link>
              <Link href="/sponsor-info">
                <Button
                  variant="outline"
                  className="border-deepgreen-200 hover:bg-deepgreen-100 text-gray-300 hover:text-white bg-transparent"
                >
                  Sponsor Future Events
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
