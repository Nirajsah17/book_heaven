import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  onChange?: (value: number) => void;
  editable?: boolean;
}

export function Rating({ value, onChange, editable = false }: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex items-center">
      {stars.map((star) => (
        <Star
          key={star}
          className={cn(
            "h-5 w-5",
            star <= value
              ? "text-yellow-400 fill-yellow-400"
              : "text-muted-foreground",
            editable && "cursor-pointer transition-colors hover:text-yellow-400"
          )}
          onClick={() => editable && onChange?.(star)}
        />
      ))}
    </div>
  );
}