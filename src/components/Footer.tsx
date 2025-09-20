import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react";

// Import logo
import archangeLogo from "@/assets/archange-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realizations" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Étude et conception",
    "Suivi de travaux",
    "Construction bâtiment",
    "Travaux publics",
    "Immobilier",
    "Menuiserie",
    "Ferronnerie"
  ];

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={archangeLogo}
                alt="ARCHANGE BTP SARL"
                className="h-12 w-auto"
              />
              <div>
                <div className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ARCHANGE BTP SARL
                </div>
                <div className="text-sm text-muted-foreground">
                  Étude - Suivi - Travaux - BTP
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Depuis 2018, ARCHANGE BTP SARL accompagne ses clients dans la réalisation 
              de leurs projets de construction avec expertise et professionnalisme en Côte d'Ivoire.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Yopougon Niangon Sud à gauche, Abidjan
                </span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a 
                  href="tel:+2250749992599" 
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  +225 07 49 99 25 99
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a 
                  href="mailto:archangebtp@gmail.com" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  archangebtp@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Lun-Ven : 7h30-17h30 | Sam : 8h00-13h00
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} ARCHANGE BTP SARL. Tous droits réservés.
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Suivez-nous sur Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;