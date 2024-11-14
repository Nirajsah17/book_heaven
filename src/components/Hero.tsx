import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-background z-0" />
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          <BookOpen className="h-16 w-16 text-primary animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Discover Your Next
            <span className="text-primary"> Literary Adventure</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Immerse yourself in a world of stories, knowledge, and imagination.
            Your perfect book awaits.
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="text"
              placeholder="Search for books..."
              className="h-12"
            />
            <Button size="lg">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}