import { Star, TrendingUp, Award, Bike } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/layout/Container";
import SectionHeading from "./SectionHeading";

const HighlightCorner = () => {
  return (
    <div className="bg-slate-900 text-white py-10">
      <SectionHeading heading="Highlight Corner" />
      <Container>
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
      </Container>
    </div>
  );
};

export default HighlightCorner;
