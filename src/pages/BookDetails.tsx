import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  Star,
  Heart,
  Share2,
  Globe,
  BookOpenCheck,
  Calendar,
  Languages,
} from "lucide-react";
import { Rating } from "@/components/Rating";

// Mock book data - In a real app, this would come from an API
const bookDetails = {
  id: 1,
  title: "The Midnight Library",
  author: "Matt Haig",
  cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  genre: "Fiction",
  description:
    "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices...",
  rating: 4.5,
  totalRatings: 2547,
  publishDate: "2020-08-13",
  language: "English",
  pages: 304,
  isbn: "9780525559474",
  publisher: "Viking",
  reviews: [
    {
      id: 1,
      user: "Alice Johnson",
      rating: 5,
      date: "2024-02-15",
      comment:
        "A beautiful and thought-provoking story that makes you reflect on your life choices.",
    },
    {
      id: 2,
      user: "Mark Smith",
      rating: 4,
      date: "2024-02-10",
      comment:
        "Engaging narrative with deep philosophical undertones. Highly recommended!",
    },
  ],
};

export default function BookDetails() {
  const [newReview, setNewReview] = useState("");
  const [userRating, setUserRating] = useState(0);
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Book Cover and Quick Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <img
                src={bookDetails.cover}
                alt={bookDetails.title}
                className="w-full rounded-lg shadow-xl mb-6"
              />
              <div className="flex gap-4 mb-6">
                <Button className="flex-1">
                  <BookOpenCheck className="mr-2 h-4 w-4" /> Read Now
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={`https://www.goodreads.com/search?q=${encodeURIComponent(
                      bookDetails.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="mr-2 h-4 w-4" /> Find on Goodreads
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={`https://www.amazon.com/s?k=${encodeURIComponent(
                      bookDetails.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="mr-2 h-4 w-4" /> Find on Amazon
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Book Details and Reviews */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">{bookDetails.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">
                by {bookDetails.author}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Rating value={bookDetails.rating} />
                  <span className="ml-2 text-muted-foreground">
                    ({bookDetails.totalRatings} ratings)
                  </span>
                </div>
                <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-full">
                  {bookDetails.genre}
                </span>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">About the Book</h2>
              <p className="text-muted-foreground">{bookDetails.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Published</span>
                </div>
                <p className="font-medium">{bookDetails.publishDate}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Languages className="h-4 w-4" />
                  <span className="text-sm">Language</span>
                </div>
                <p className="font-medium">{bookDetails.language}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm">Pages</span>
                </div>
                <p className="font-medium">{bookDetails.pages}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">Rating</span>
                </div>
                <p className="font-medium">{bookDetails.rating}/5</p>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Reviews Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Reviews</h2>
              
              {/* Add Review */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Your Rating:</span>
                  <Rating
                    value={userRating}
                    onChange={setUserRating}
                    editable
                  />
                </div>
                <Textarea
                  placeholder="Write your review..."
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button>Submit Review</Button>
              </div>

              {/* Review List */}
              <div className="space-y-6">
                {bookDetails.reviews.map((review) => (
                  <div key={review.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{review.user}</span>
                      <span className="text-sm text-muted-foreground">
                        {review.date}
                      </span>
                    </div>
                    <Rating value={review.rating} />
                    <p className="text-muted-foreground">{review.comment}</p>
                    <Separator className="mt-4" />
                  </div>
                ))}
              </div>
            </div>
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