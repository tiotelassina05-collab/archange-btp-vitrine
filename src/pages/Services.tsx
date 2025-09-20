import { 
  Building, 
  Construction, 
  Home, 
  Wrench, 
  Hammer, 
  PaintBucket, 
  ShieldCheck 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Étude et Conception",
      description: "Études techniques, plans architecturaux et conception de projets BTP sur mesure.",
      features: [
        "Plans d'architecture",
        "Études de sol et fondations",
        "Calculs de structure",
        "Dossiers techniques"
      ],
      color: "primary"
    },
    {
      icon: ShieldCheck,
      title: "Suivi de Travaux",
      description: "Supervision et contrôle qualité de vos chantiers par nos experts.",
      features: [
        "Coordination des corps d'état",
        "Contrôle qualité permanent",
        "Respect des délais",
        "Reporting détaillé"
      ],
      color: "secondary"
    },
    {
      icon: Construction,
      title: "Construction Bâtiment",
      description: "Construction complète de bâtiments résidentiels et commerciaux.",
      features: [
        "Gros œuvre et structure",
        "Second œuvre complet",
        "Finitions haut de gamme",
        "Livraison clés en main"
      ],
      color: "accent"
    },
    {
      icon: Home,
      title: "Travaux Publics",
      description: "Réalisation d'infrastructures et d'aménagements urbains.",
      features: [
        "Voirie et assainissement",
        "Réseaux divers",
        "Aménagements extérieurs",
        "Ouvrages d'art"
      ],
      color: "primary"
    },
    {
      icon: Building,
      title: "Immobilier",
      description: "Développement immobilier et promotion de projets résidentiels.",
      features: [
        "Promotion immobilière",
        "Vente de terrains",
        "Conseil en investissement",
        "Gestion de patrimoine"
      ],
      color: "secondary"
    },
    {
      icon: Wrench,
      title: "Menuiserie Bois & Aluminium",
      description: "Fabrication et pose de menuiseries sur mesure de haute qualité.",
      features: [
        "Portes et fenêtres",
        "Vérandas et pergolas",
        "Mobilier sur mesure",
        "Agencement intérieur"
      ],
      color: "accent"
    },
    {
      icon: Hammer,
      title: "Ferronnerie",
      description: "Travaux de métallerie et serrurerie pour tous types d'ouvrages.",
      features: [
        "Portails et clôtures",
        "Escaliers métalliques",
        "Garde-corps et rampes",
        "Structures métalliques"
      ],
      color: "primary"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary bg-primary/10";
      case "secondary":
        return "text-secondary bg-secondary/10";
      case "accent":
        return "text-accent bg-accent/10";
      default:
        return "text-primary bg-primary/10";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une expertise complète dans tous les métiers du BTP pour réaliser vos projets avec excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${getColorClass(service.color)}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Notre Processus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une approche méthodique et professionnelle pour garantir le succès de votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-sm text-muted-foreground">
                Analyse de vos besoins et définition du cahier des charges
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-foreground">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Conception</h3>
              <p className="text-sm text-muted-foreground">
                Élaboration des plans et études techniques détaillées
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Réalisation</h3>
              <p className="text-sm text-muted-foreground">
                Exécution des travaux avec suivi qualité permanent
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Livraison</h3>
              <p className="text-sm text-muted-foreground">
                Réception des travaux et mise en service avec garanties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Demander un devis
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;