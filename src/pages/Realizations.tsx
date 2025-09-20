import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ExternalLink } from "lucide-react";

// Import images
import heroImage from "@/assets/hero-construction.jpg";
import buildingImage from "@/assets/building-completed.jpg";
import workshopImage from "@/assets/workshop-metalwork.jpg";

const Realizations = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Complexe Résidentiel Les Palmiers",
      category: "batiment",
      location: "Yopougon, Côte d'Ivoire",
      year: "2024",
      description: "Construction d'un ensemble résidentiel moderne de 24 logements avec espaces verts et parking.",
      image: buildingImage,
      tags: ["Résidentiel", "Gros œuvre", "Finitions"]
    },
    {
      id: 2,
      title: "Chantier Infrastructure Routière",
      category: "travaux-publics",
      location: "Abidjan Nord",
      year: "2023",
      description: "Réhabilitation de 5km de voirie urbaine avec assainissement et éclairage public.",
      image: heroImage,
      tags: ["Voirie", "Assainissement", "Infrastructure"]
    },
    {
      id: 3,
      title: "Atelier Menuiserie Moderne",
      category: "menuiserie",
      location: "Zone Industrielle",
      year: "2024",
      description: "Aménagement complet d'un atelier de menuiserie avec équipements sur mesure.",
      image: workshopImage,
      tags: ["Menuiserie", "Aménagement", "Sur mesure"]
    },
    {
      id: 4,
      title: "Villa Contemporaine Riviera",
      category: "batiment",
      location: "Riviera Golf",
      year: "2023",
      description: "Construction d'une villa haut de gamme avec piscine et aménagements extérieurs.",
      image: buildingImage,
      tags: ["Villa", "Piscine", "Haut de gamme"]
    },
    {
      id: 5,
      title: "Portails et Clôtures Sécurisés",
      category: "ferronnerie",
      location: "Cocody",
      year: "2024",
      description: "Fabrication et installation de portails automatisés et clôtures de sécurité.",
      image: workshopImage,
      tags: ["Ferronnerie", "Sécurité", "Automatisme"]
    },
    {
      id: 6,
      title: "Centre Commercial Plateau",
      category: "batiment",
      location: "Plateau, Abidjan",
      year: "2023",
      description: "Construction et aménagement d'un centre commercial moderne avec parking étagé.",
      image: buildingImage,
      tags: ["Commercial", "Parking", "Moderne"]
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