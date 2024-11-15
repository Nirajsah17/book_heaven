import axios from 'axios';
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
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function AuthButtons() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle input changes
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handleNameChange = (e: any) => setName(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);

  // Clear input fields and message
  const clearFields = () => {
    setEmail("");
    setName("");
    setPassword("");
    setMessage("");
  };

  // Sign up function
  const signUp = async () => {
    const data = {
      name: name,
      email: email,
      password: password
    };
    try {
      const result = await axios.post("http://localhost:3000/api/user/register", data);
      console.log(result);
      setMessage("Signup successful!"); // Set success message
      setDialogOpen(false); // Close the dialog
      setIsLogin(true); // Switch to login mode if needed
      clearFields(); // Clear input fields
      navigate('/explore'); // Redirect to explore route
    } catch (error) {
      console.error('Error during sign up:', error);
      setMessage("Signup failed. Please try again."); // Set error message
    }
  };

  // Login function
  const login = async () => {
    const data = {
      email: email,
      password: password
    };
    try {
      const result = await axios.post("http://localhost:3000/api/user/login", data);
      console.log(result);
      setMessage("Login successful!"); // Set success message
      setDialogOpen(false); // Close the dialog
      // Optionally, you can store token or user data here (e.g., in localStorage)
      localStorage.setItem("token", result.data.token);
      clearFields(); // Clear input fields
      navigate('/explore'); // Redirect to explore route
    } catch (error) {
      console.error('Error during login:', error);
      setMessage("Login failed. Please check your credentials."); // Set error message
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" asChild>
        <a href="/explore">Explore Books</a>
      </Button>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setDialogOpen(true)}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>
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
            {!isLogin && (
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button onClick={isLogin ? login : signUp}>
              {isLogin ? "Login" : "Sign Up"}
            </Button>
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

      {message && (
        <div className="mt-4 text-center text-sm text-gray-700">
          {message}
        </div>
      )}
    </div>
  );
}
