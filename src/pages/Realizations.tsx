import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ExternalLink } from "lucide-react";

// Import real project images
import chantierFondations1 from "@/assets/chantier-fondations-1.jpg";
import chantierFondations2 from "@/assets/chantier-fondations-2.jpg";
import cuisineModerne1 from "@/assets/cuisine-moderne-1.jpg";
import cuisineModerne2 from "@/assets/cuisine-moderne-2.jpg";
import suiviChantier1 from "@/assets/suivi-chantier-1.jpg";
import suiviChantier2 from "@/assets/suivi-chantier-2.jpg";
import immeubleModerne1 from "@/assets/immeuble-moderne-1.jpg";
import immeubleModerne2 from "@/assets/immeuble-moderne-2.jpg";
import interieurConstruction from "@/assets/interieur-construction.jpg";
import salleBainModerne from "@/assets/salle-bain-moderne.jpg";

const Realizations = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Complexe Résidentiel Moderne",
      category: "batiment",
      location: "Yopougon, Côte d'Ivoire",
      year: "2024",
      description: "Conception et construction d'un complexe résidentiel moderne avec architecture contemporaine et espaces optimisés.",
      image: immeubleModerne1,
      tags: ["Résidentiel", "Architecture", "Moderne"]
    },
    {
      id: 2,
      title: "Fondations et Gros Œuvre",
      category: "batiment",
      location: "Niangon Sud",
      year: "2024",
      description: "Réalisation de fondations en béton armé avec suivi technique rigoureux et contrôle qualité.",
      image: chantierFondations1,
      tags: ["Fondations", "Béton armé", "Gros œuvre"]
    },
    {
      id: 3,
      title: "Cuisine Sur Mesure Haut de Gamme",
      category: "menuiserie",
      location: "Cocody",
      year: "2024",
      description: "Conception et réalisation d'une cuisine moderne en bois avec plan de travail en marbre et finitions premium.",
      image: cuisineModerne1,
      tags: ["Menuiserie", "Cuisine", "Sur mesure"]
    },
    {
      id: 4,
      title: "Étude et Suivi de Chantier",
      category: "batiment",
      location: "Abidjan",
      year: "2024",
      description: "Supervision technique et contrôle qualité avec équipe d'ingénieurs expérimentés sur chantier.",
      image: suiviChantier1,
      tags: ["Étude", "Suivi", "Contrôle qualité"]
    },
    {
      id: 5,
      title: "Menuiserie Aluminium",
      category: "menuiserie",
      location: "Riviera",
      year: "2024",
      description: "Installation de menuiseries aluminium avec double vitrage et finitions modernes pour habitat résidentiel.",
      image: cuisineModerne2,
      tags: ["Aluminium", "Fenêtres", "Finitions"]
    },
    {
      id: 6,
      title: "Aménagement Intérieur",
      category: "batiment",
      location: "Plateau",
      year: "2024",
      description: "Aménagement complet d'espaces intérieurs avec faux plafonds, éclairage et finitions techniques.",
      image: interieurConstruction,
      tags: ["Aménagement", "Faux plafond", "Finitions"]
    },
    {
      id: 7,
      title: "Salle de Bain Moderne",
      category: "batiment",
      location: "Marcory",
      year: "2024",
      description: "Réalisation complète de salle de bain avec carrelage moderne et finitions de qualité supérieure.",
      image: salleBainModerne,
      tags: ["Salle de bain", "Carrelage", "Finitions"]
    },
    {
      id: 8,
      title: "Immeuble Résidentiel R+3",
      category: "batiment",
      location: "Yopougon",
      year: "2023",
      description: "Construction d'un immeuble résidentiel moderne R+3 avec balcons et espaces commerciaux au rez-de-chaussée.",
      image: immeubleModerne2,
      tags: ["Immeuble", "R+3", "Commercial"]
    },
    {
      id: 9,
      title: "Infrastructure de Fondations",
      category: "travaux-publics",
      location: "Bingerville",
      year: "2024",
      description: "Réalisation de fondations spéciales avec système de poteaux et longrines pour infrastructure lourde.",
      image: chantierFondations2,
      tags: ["Infrastructure", "Fondations", "Béton"]
    },
    {
      id: 10,
      title: "Contrôle Technique Chantier",
      category: "batiment",
      location: "Abidjan",
      year: "2024",
      description: "Mission de contrôle technique et vérification de conformité avec documentation complète des travaux.",
      image: suiviChantier2,
      tags: ["Contrôle", "Technique", "Conformité"]
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