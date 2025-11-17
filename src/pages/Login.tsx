import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, Lock, Zap } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="relative z-10 max-w-md text-center">
          <NavLink
            to="/"
            className="inline-flex items-center text-4xl font-heading font-bold mb-4"
          >
            <Zap className="mr-2 h-10 w-10" />
            Bootchamp
          </NavLink>
          <p className="text-xl mt-4 text-primary-foreground/90">
            "Preparing the Next Generation to Own the Future"
          </p>
          <p className="text-sm text-primary-foreground/80 mt-4">
            Login to continue your journey and start making changes.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 bg-muted/30 min-h-screen lg:min-h-0">
        <Card className="w-full max-w-md border-0 card-shadow animate-fade-in-up">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-heading font-bold">
              Welcome Back!
            </CardTitle>
            <CardDescription className="pt-2">
              Enter your email and password to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="kamu@email.com"
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <NavLink
                    to="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Lupa password?
                  </NavLink>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full gradient-primary h-11 text-base font-semibold"
              >
                Log In
              </Button>

              <Separator className="my-6">
                <span className="text-xs text-muted-foreground bg-background px-2">
                  OR
                </span>
              </Separator>

              <Button variant="outline" className="w-full h-11">
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.032 36.371 44 30.65 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
                Log in with Google
              </Button>

              <div className="text-center text-sm text-muted-foreground pt-4">
                Don't have an account?{" "}
                <NavLink
                  to="/signup"
                  className="text-primary font-medium hover:underline"
                >
                  Sign up here
                </NavLink>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;