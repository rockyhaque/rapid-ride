import { ShoppingCart, Star, TrendingUp, Award, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
      <div className="relative mx-auto max-w-7xl px-4 py-12">
        {/* Feature Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {["Mountain Bikes", "Road Bikes", "Premium Parts"].map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full bg-white/10 px-4 py-1 text-white hover:bg-white/20"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative z-10">
            <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-white/70">
              Premium Bicycle Store
            </h2>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
              Discover Your
              <br />
              Perfect Ride
            </h1>
            <p className="mb-8 max-w-xl text-lg text-white/70">
              Experience the freedom of premium cycling with our curated
              collection of high-performance bicycles and accessories.
            </p>

            <Button className="relative overflow-hidden px-6 py-3 rounded-lg font-semibold text-white shadow-md transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 before:absolute before:inset-0 before:bg-white/10 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 hover:scale-105 hover:shadow-orange-500/50 hover:shadow-lg">
              <div className="relative flex items-center space-x-2">
                <ShoppingCart className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" />
                <span>Shop Now</span>
              </div>
            </Button>
          </div>

          <div className="relative">
            <div className="relative h-[400px] w-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bicycle-1-NCHs0vM142QNGbKPKWHKmrsNZXpnyX.png"
                alt="Premium Mountain Bike"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="absolute -left-20 top-1/2 -translate-y-1/2">
              <div className="h-40 w-[2px] bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Card className="bg-white/10 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Featured Collection
              </h3>
              <Badge
                variant="outline"
                className="bg-orange-100/10 text-orange-200"
              >
                New Arrival
              </Badge>
            </div>
            <div className="space-y-4">
              {[
                "Premium Mountain Bikes",
                "Professional Road Bikes",
                "Urban Commuter Series",
              ].map((item, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <Bike className="h-5 w-5 text-orange-400" />
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-white/10 p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">
                Customer Reviews
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-white/70">4.9/5 Rating</span>
                </div>
                <div className="text-sm text-white/70">
                  "Best cycling equipment and exceptional customer service!"
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-orange-400" />
              <span className="text-sm text-white/70">
                Trusted by Professional Athletes
              </span>
            </div>
          </Card>

          <Card className="bg-white/10 p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">
                Special Offers
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Premium Service</span>
                    <Badge className="bg-green-500">-20%</Badge>
                  </div>
                  <p className="mt-2 text-sm text-white/70">
                    Free maintenance for 1 year
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-white/70">
                    Limited Time Offer
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
