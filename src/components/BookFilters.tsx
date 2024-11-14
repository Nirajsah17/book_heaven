import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function BookFilters() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search books..."
            className="pl-9 h-12"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="h-12 px-6 lg:hidden">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>
                Refine your book search with these filters.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <MobileFilters />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:grid grid-cols-4 gap-6">
        <DesktopFilters />
      </div>
    </div>
  );
}

function MobileFilters() {
  return (
    <>
      <div className="space-y-2">
        <Label>Genre</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fiction">Fiction</SelectItem>
            <SelectItem value="non-fiction">Non-Fiction</SelectItem>
            <SelectItem value="mystery">Mystery</SelectItem>
            <SelectItem value="sci-fi">Science Fiction</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Rating</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
            <SelectItem value="2">2+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Language</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="fr">French</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Sort By</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="recent">Recently Added</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

function DesktopFilters() {
  return (
    <>
      <div className="space-y-2">
        <Label>Genre</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fiction">Fiction</SelectItem>
            <SelectItem value="non-fiction">Non-Fiction</SelectItem>
            <SelectItem value="mystery">Mystery</SelectItem>
            <SelectItem value="sci-fi">Science Fiction</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Rating</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
            <SelectItem value="2">2+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Language</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="fr">French</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Sort By</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="recent">Recently Added</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}