import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-semibold text-xl">BookHaven</span>
        </div>
        <AuthButtons />
      </div>
    </nav>
  );
}