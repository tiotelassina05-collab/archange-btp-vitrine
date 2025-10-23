import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ExternalLink } from "lucide-react";

// Import real project images
import amenagementInterieur from "@/assets/amenagement-interieur-faux-plafond.jpg";
import ingenieurChantier from "@/assets/ingenieur-chantier-fondations.jpg";
import ouvrierMesure from "@/assets/ouvrier-mesure-chantier.jpg";
import fondationsArmatures from "@/assets/fondations-armatures-beton.jpg";
import villaDuplexRendu from "@/assets/villa-duplex-moderne-rendu.jpg";
import villa4pRendu from "@/assets/villa-4p-yakro-rendu.jpg";
import chantierFondations1 from "@/assets/chantier-fondations-1.jpg";
import chantierFondations2 from "@/assets/chantier-fondations-2.jpg";
import cuisineModerne1 from "@/assets/cuisine-moderne-1.jpg";
import cuisineModerne2 from "@/assets/cuisine-moderne-2.jpg";

const Realizations = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Villa Duplex Moderne 5 Pièces",
      category: "batiment",
      location: "Yopougon, Côte d'Ivoire",
      year: "2024",
      description: "Conception architecturale d'une villa duplex moderne avec terrasse, garage intégré et finitions contemporaines.",
      image: villaDuplexRendu,
      tags: ["Villa", "Duplex", "Architecture", "3D"]
    },
    {
      id: 2,
      title: "Villa 4 Pièces Yakro",
      category: "batiment",
      location: "Yakro",
      year: "2024",
      description: "Étude et conception d'une villa moderne 4 pièces avec toiture bac acier et aménagement extérieur complet.",
      image: villa4pRendu,
      tags: ["Villa", "4P", "Conception", "Moderne"]
    },
    {
      id: 3,
      title: "Travaux faux-plafond dalle minérale",
      category: "batiment",
      location: "Rehabilitation appartement 2p Treichville",
      year: "2025",
      description: "Réalisation d'aménagement intérieur avec faux plafond métallique, éclairage intégré et finitions techniques.",
      image: amenagementInterieur,
      tags: ["Aménagement", "Faux plafond", "Éclairage"]
    },
    {
      id: 4,
      title: "Travaux Gros-oeuvre Fondation",
      category: "batiment",
      location: "Chantier R+3 M'Pouto",
      year: "2024",
      description: "Réalisation de fondations avec armatures en béton, poteaux et longrines pour structure résidentielle.",
      image: fondationsArmatures,
      tags: ["Fondations", "Béton armé", "Structure"]
    },
    {
      id: 5,
      title: "Supervision Technique de Chantier",
      category: "batiment",
      location: "Réhabilitation appartement 2P Treichville",
      year: "2024",
      description: "Suivi technique et contrôle qualité avec ingénieur sur site pour travaux de fondations et gros œuvre.",
      image: ingenieurChantier,
      tags: ["Supervision", "Ingénierie", "Contrôle qualité"]
    },
    {
      id: 6,
      title: "Suivi Travaux Gros-oeuvre Fondation",
      category: "travaux-publics",
      location: "Chantier R+3 Songon",
      year: "2024",
      description: "Mesures topographiques et implantation de chantier avec équipements de précision.",
      image: ouvrierMesure,
      tags: ["Topographie", "Mesure", "Implantation"]
    },
    {
      id: 7,
      title: "Cuisine Moderne Sur Mesure",
      category: "menuiserie",
      location: "Cocody",
      year: "2024",
      description: "Conception et réalisation d'une cuisine moderne avec menuiserie sur mesure et finitions haut de gamme.",
      image: cuisineModerne1,
      tags: ["Menuiserie", "Cuisine", "Sur mesure"]
    },
    {
      id: 8,
      title: "Menuiserie Aluminium Premium",
      category: "menuiserie",
      location: "Riviera",
      year: "2024",
      description: "Installation de menuiseries aluminium avec double vitrage pour habitat résidentiel moderne.",
      image: cuisineModerne2,
      tags: ["Aluminium", "Menuiserie", "Finitions"]
    },
    {
      id: 9,
      title: "Fondations et Infrastructure Lourde",
      category: "travaux-publics",
      location: "Bingerville",
      year: "2024",
      description: "Réalisation de fondations pour infrastructure avec système de poteaux en béton armé.",
      image: chantierFondations1,
      tags: ["Infrastructure", "Fondations", "Béton"]
    },
    {
      id: 10,
      title: "Gros Œuvre et Structure",
      category: "batiment",
      location: "Abidjan",
      year: "2024",
      description: "Travaux de gros œuvre avec coulage béton et mise en place d'armatures pour structure porteuse.",
      image: chantierFondations2,
      tags: ["Gros œuvre", "Structure", "Béton"]
    }
  ];

  const categories = [
    { key: "all", label: "Tous les projets" },
    { key: "batiment", label: "Bâtiment" },
    { key: "travaux-publics", label: "Travaux Publics" },
    { key: "menuiserie", label: "Menuiserie" },
    { key: "ferronnerie", label: "Ferronnerie" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Nos Réalisations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos projets réalisés avec succès, témoignages de notre expertise et de notre engagement qualité.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={filter === category.key ? "default" : "outline"}
                onClick={() => setFilter(category.key)}
                className="transition-all duration-200"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground">
                      {project.year}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Eye className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      {project.location}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nos Chiffres</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des résultats qui témoignent de notre expertise et de la satisfaction de nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projets réalisés</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">7</div>
              <div className="text-sm text-muted-foreground">Années d'expérience</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Votre projet mérite notre expertise
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Rejoignez nos clients satisfaits et confiez-nous la réalisation de votre projet BTP.
            </p>
            <Button size="lg" variant="secondary">
              Démarrer mon projet
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realizations;