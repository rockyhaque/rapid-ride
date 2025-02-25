import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CircleDot } from "lucide-react";
import { Container } from "@/layout/Container";
import CustomButton from "./button/CustomButton";

export default function WhyChooseUs() {
  return (
    <div className="bg-slate-900">
      <Container>
        <section className="relative w-full py-2">
          {/* Section Heading */}
          <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-3xl font-semibold py-4 text-white">Why Choose US</h3>
            <div className="flex justify-center items-center">
              <h1 className="w-28 h-1 bg-gradient-to-l from-slate-700 via-red-100 to-teal-200 rounded-full"></h1>
            </div>
          </div>
          {/* Background pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background to-background/20" />
          </div>

          <div className="container px-4 md:px-6">
            <div className="relative">
              {/* Floating shapes */}
              <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

              {/* Main card */}
              <div className="relative rounded-3xl border bg-card/10 p-8 shadow-2xl backdrop-blur-xl md:p-12 lg:p-16">
                <div className="absolute right-8 top-4 hidden md:block">
                  <div className="flex items-center gap-3 rounded-full border bg-card/50 px-4 py-2 text-sm backdrop-blur">
                    <CircleDot className="h-4 w-4 text-gray-300 animate-pulse" />
                    <span>Premium Collection Available</span>
                  </div>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">
                  {/* Content */}
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <h2 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl/none">
                        Elevate Your
                        <span className="block mt-1 bg-gradient-to-br from-primary to-primary-foreground bg-clip-text text-transparent">
                          Cycling Experience
                        </span>
                      </h2>
                      <p className="max-w-[600px] text-gray-300 md:text-xl">
                        Premium bikes for every rider. From mountain trails to
                        city streets, find your perfect match.
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 border-t pt-8 sm:grid-cols-3">
                      <div>
                        <div className="text-3xl font-bold">2K+</div>
                        <div className="text-gray-300">Happy Riders</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">150+</div>
                        <div className="text-gray-300">Bike Models</div>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <div className="text-3xl font-bold">24/7</div>
                        <div className="text-gray-300">Expert Support</div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <CustomButton className="rounded-3xl">
                        <Link
                          to="/bicycles"
                          className="flex items-center gap-2"
                        >
                          View Collection
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </CustomButton>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-primary/20 bg-background/50 backdrop-blur hover:bg-primary/10"
                      >
                        <Link to="/contact">Book Test Ride</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Image Grid */}
                  <div className="hidden lg:grid grid-cols-2 gap-4 lg:gap-6">
                    <div className="grid gap-4 lg:gap-6">
                      <div className="overflow-hidden rounded-3xl">
                        <img
                          src="https://i.ibb.co.com/sp29hfgP/patrick-hendry-1ow9zrlld-JU-unsplash.jpg"
                          alt="Mountain bike"
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="overflow-hidden rounded-3xl bg-muted">
                        <img
                          src="https://i.ibb.co.com/CKJFnMcJ/timotheus-frobel-YDyw-GFCr-P3g-unsplash.jpg"
                          alt="Road bike"
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 lg:gap-6">
                      <div className="overflow-hidden rounded-3xl bg-muted">
                        <img
                          src="https://i.ibb.co.com/pvVZHW0L/jacek-dylag-gi-Fe-Tsh-EYYQ-unsplash.jpg"
                          alt="City bike"
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="overflow-hidden rounded-3xl">
                        <img
                          src="https://i.ibb.co.com/RpVpTm86/jonny-kennaugh-n-POtzv-GLYW0-unsplash.jpg"
                          alt="Electric bike"
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
