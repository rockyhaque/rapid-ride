import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/logo/nav-logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Bicycles", href: "/bicycles" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="logo" className="w-20 md:w-40" />
              {/* <span className="text-2xl font-bold text-white">Premium Cycles</span> */}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 border border-stone-100/60 rounded-xl px-4 py-2 bg-stone-600 bg-opacity-30 backdrop-filter backdrop-blur-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-orange-400 bg-white bg-opacity-10"
                      : "text-white hover:bg-white hover:bg-opacity-10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white hover:bg-opacity-10"
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white hover:bg-opacity-10"
              >
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white hover:bg-opacity-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.href
                  ? "text-orange-400 bg-white bg-opacity-10"
                  : "text-white hover:bg-white hover:bg-opacity-10"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
