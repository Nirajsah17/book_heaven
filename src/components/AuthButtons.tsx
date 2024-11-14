import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function AuthButtons() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" asChild>
        <a href="/explore">Explore Books</a>
      </Button>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{isLogin ? "Login" : "Sign Up"}</DialogTitle>
            <DialogDescription>
              {isLogin 
                ? "Welcome back! Please login to your account." 
                : "Create an account to get started."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button>{isLogin ? "Login" : "Sign Up"}</Button>
            <Button 
              variant="link" 
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm"
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Login"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Sign Up</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create an Account</DialogTitle>
            <DialogDescription>
              Join our community of book lovers today.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input id="signup-email" type="email" placeholder="your@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input id="signup-password" type="password" />
            </div>
          </div>
          <Button>Create Account</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}