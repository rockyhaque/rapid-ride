import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
      <div className="relative mx-auto max-w-7xl px-4 py-12 pt-16">
        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center pt-16">
          <div className="relative z-10">
            <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-white/70">
              Premium Bicycle Store
            </h2>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
              Discover Your
              <br />
              Perfect Ride Partner
            </h1>

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
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2">
              <div className="h-40 w-[2px] bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
