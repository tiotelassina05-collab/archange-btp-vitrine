import { Link } from "react-router-dom";
import { ArrowRight, Building, Users, Award, CheckCircle, Phone, MessageSquare, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import images
import heroImage from "@/assets/hero-construction.jpg";
import buildingImage from "@/assets/building-completed.jpg";
import workshopImage from "@/assets/workshop-metalwork.jpg";
import foundationsImage from "@/assets/chantier-fondations-1.jpg";
import interiorImage from "@/assets/amenagement-interieur-faux-plafond.jpg";

const Index = () => {
  const slides = [
    {
      image: heroImage,
      badge: "Depuis 2018 en Côte d'Ivoire",
      title: "Construisons l'avenir",
      highlight: "ensemble",
      description: "ARCHANGE BTP SARL, votre partenaire de confiance pour tous vos projets de construction, étude et travaux publics à Yopougon et dans toute la Côte d'Ivoire.",
      icon: Building,
    },
    {
      image: foundationsImage,
      badge: "Expertise & Qualité",
      title: "Étude et suivi",
      highlight: "de chantier",
      description: "Nos experts en ingénierie vous accompagnent de la conception à la réalisation de vos projets. Plans détaillés, supervision et contrôle qualité à chaque étape.",
      icon: Users,
    },
    {
      image: workshopImage,
      badge: "Fabrication Sur Mesure",
      title: "Menuiserie",
      highlight: "& Ferronnerie",
      description: "Création d'ouvrages en bois, aluminium et métallerie. Portes, fenêtres, portails, mobilier et structures métalliques sur mesure pour sublimer vos espaces.",
      icon: Award,
    },
    {
      image: interiorImage,
      badge: "Service Premium",
      title: "Maintenance",
      highlight: "& Entretien",
      description: "Préservez la valeur de vos biens avec nos services de maintenance et d'entretien de bâtiments. Interventions rapides et professionnelles pour tous types d'ouvrages.",
      icon: Wrench,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative py-20 lg:py-32 overflow-hidden min-h-[600px] flex items-center">
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      alt={`${slide.title} ARCHANGE BTP`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                  </div>
                  
                  <div className="relative container mx-auto px-6">
                    <div className="max-w-3xl">
                      <Badge className="mb-6 bg-secondary/90 text-secondary-foreground">
                        {slide.badge}
                      </Badge>
                      
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        {slide.title}
                        <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {slide.highlight}
                        </span>
                      </h1>
                      
                      <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                        {slide.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/devis">
                          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                            Demander un devis
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                        
                        <div className="flex gap-3">
                          <a href="tel:+2250749992599">
                            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                              <Phone className="w-5 h-5 mr-2" />
                              Appeler
                            </Button>
                          </a>
                          
                          <a href="https://wa.me/2250749992599" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                              <MessageSquare className="w-5 h-5 mr-2" />
                              WhatsApp
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/10 border-white/30 text-white hover:bg-white/20" />
          <CarouselNext className="right-4 bg-white/10 border-white/30 text-white hover:bg-white/20" />
        </Carousel>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Une gamme complète de services pour tous vos besoins en construction et BTP
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Construction & BTP</CardTitle>
                <CardDescription>
                  Construction de bâtiments, travaux publics et infrastructures complètes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Gros œuvre et structure
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Travaux publics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Finitions de qualité
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>Étude & Suivi</CardTitle>
                <CardDescription>
                  Conception de projets et supervision de chantiers par nos experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Plans et conception
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Suivi de chantier
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Contrôle qualité
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>Menuiserie & Ferronnerie</CardTitle>
                <CardDescription>
                  Fabrication sur mesure en bois, aluminium et travaux de métallerie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Portes et fenêtres
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Portails métalliques
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Mobilier sur mesure
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                Découvrir tous nos services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Depuis 2018</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                7 ans d'expertise au service de vos projets
              </h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Implantée à Yopougon Niangon Sud, ARCHANGE BTP SARL s'est forgée une solide réputation 
                dans le secteur du BTP en Côte d'Ivoire. Notre équipe d'experts vous accompagne 
                de la conception à la livraison de vos projets.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projets réalisés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                </div>
              </div>
              
              <Link to="/about">
                <Button variant="outline">
                  En savoir plus sur nous
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={buildingImage}
                  alt="Bâtiment terminé"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img
                  src={workshopImage}
                  alt="Atelier menuiserie"
                  className="rounded-lg shadow-lg w-full h-32 object-cover"
                />
              </div>
              <div className="pt-8">
                <img
                  src={heroImage}
                  alt="Chantier en cours"
                  className="rounded-lg shadow-lg w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg">
            Contactez ARCHANGE BTP SARL dès maintenant pour discuter de vos besoins 
            et obtenir un devis personnalisé gratuit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Obtenir un devis gratuit
              </Button>
            </Link>
            <a href="tel:+2250749992599">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                07 49 99 25 99
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
