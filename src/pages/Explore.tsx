import Navbar from "@/components/Navbar";
import BookCard from "@/components/BookCard";
import BookFilters from "@/components/BookFilters";
import Pagination from "@/components/Pagination";
import { Separator } from "@/components/ui/separator";
import { BookOpen } from "lucide-react";

// Sample book data
const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    genre: "Fiction"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    genre: "Self-Help"
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "https://images.unsplash.com/photo-1531901599143-df5010ab9438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    genre: "Sci-Fi"
  },
  {
    id: 4,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover: "https://images.unsplash.com/photo-1585437642617-c2d16be5f33e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    genre: "Thriller"
  },
  {
    id: 5,
    title: "Dune",
    author: "Frank Herbert",
    cover: "https://images.unsplash.com/photo-1525923838299-2312b60f6d69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    genre: "Sci-Fi"
  },
  {
    id: 6,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    genre: "Finance"
  },
  {
    id: 7,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    genre: "Mystery"
  },
  {
    id: 8,
    title: "Educated",
    author: "Tara Westover",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    genre: "Memoir"
  }
];

export default function Explore() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Explore Books</h1>
            <p className="text-muted-foreground">
              Discover your next favorite book from our vast collection
            </p>
          </div>

          <BookFilters />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Pagination />
          </div>
        </div>
      </main>

      <footer className="bg-muted/30 mt-16">
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