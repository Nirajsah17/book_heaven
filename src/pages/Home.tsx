import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookMarked,
  Library,
  Star,
  Coffee,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="transform transition-all hover:scale-105">
            <CardHeader>
              <BookMarked className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Curated Collections</CardTitle>
              <CardDescription>
                Hand-picked selections for every taste and interest
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Explore thoughtfully curated book collections that match your
                reading preferences and discover new favorites.
              </p>
            </CardContent>
          </Card>

          <Card className="transform transition-all hover:scale-105">
            <CardHeader>
              <Star className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Expert Reviews</CardTitle>
              <CardDescription>
                Insights from literary professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get detailed reviews and recommendations from our community of
                expert readers and critics.
              </p>
            </CardContent>
          </Card>

          <Card className="transform transition-all hover:scale-105">
            <CardHeader>
              <Library className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Virtual Library</CardTitle>
              <CardDescription>
                Your personal reading sanctuary
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create and manage your digital bookshelf with our intuitive library
                management system.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Featured Books */}
      <div className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Books</h2>
            <p className="text-muted-foreground">
              This week's most exciting reads
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="transform transition-all hover:scale-105">
                <CardContent className="p-4">
                  <img
                    src={`https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww`}
                    alt="Book cover"
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold mb-2">The Art of Reading</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    By Sarah Johnson
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Reading Corner */}
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <Coffee className="h-12 w-12 text-primary" />
            <h2 className="text-4xl font-bold">Your Cozy Reading Corner</h2>
            <p className="text-xl text-muted-foreground">
              Create your perfect reading environment with personalized
              recommendations and reading tracking tools.
            </p>
            <Button className="group">
              Join Now{" "}
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Reading corner"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="font-semibold">BookHaven</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 BookHaven. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}