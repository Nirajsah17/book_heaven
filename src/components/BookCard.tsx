import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  cover: string;
  genre: string;
}

export default function BookCard({ id, title, author, cover, genre }: BookCardProps) {
  return (
    <Card className="h-full transform transition-all hover:scale-105">
      <CardContent className="p-4">
        <div className="relative">
          <img
            src={cover}
            alt={title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary mb-2">
          {genre}
        </span>
        <h3 className="font-semibold mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">By {author}</p>
        <Button variant="outline" className="w-full" asChild>
          <Link to={`/book/${id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}