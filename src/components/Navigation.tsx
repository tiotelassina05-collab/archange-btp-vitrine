import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Import logo
import archangeLogo from "@/assets/archange-logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realizations" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={archangeLogo}
              alt="ARCHANGE BTP SARL"
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <div className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ARCHANGE BTP
              </div>
              <div className="text-xs text-muted-foreground -mt-1">SARL</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/devis">
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 border-primary">
                Devis Gratuit
              </Button>
            </Link>
            <a href="tel:+2250749992599">
              <Button variant="outline" size="sm" className="hidden lg:flex items-center gap-2">
                <Phone className="w-4 h-4" />
                07 49 99 25 99
              </Button>
            </a>
            <a href="https://wa.me/2250749992599" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <a href="tel:+2250749992599" className="p-2">
              <Phone className="w-5 h-5 text-primary" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md",
                    isActive(item.href)
                      ? "text-primary bg-primary/5 font-semibold"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-3 border-t border-border space-y-2">
                <Link to="/devis" onClick={() => setIsOpen(false)}>
                  <Button className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90">
                    Devis Gratuit
                  </Button>
                </Link>
                <a href="https://wa.me/2250749992599" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Nous contacter sur WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;