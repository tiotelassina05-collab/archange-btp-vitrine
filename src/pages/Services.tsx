import { useState } from "react";
import { 
  Building, 
  Construction, 
  Home, 
  Wrench, 
  Hammer, 
  PaintBucket, 
  ShieldCheck,
  MessageCircle,
  ChevronDown
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Services = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
      details: "Nos ingénieurs et architectes expérimentés vous accompagnent dès la phase de conception de votre projet. Nous réalisons des études de faisabilité complètes incluant l'analyse du terrain, les études géotechniques, et les études d'impact environnemental. Notre bureau d'études élabore des plans d'exécution détaillés conformes aux normes en vigueur, optimise la structure pour garantir sécurité et durabilité, et produit tous les dossiers administratifs nécessaires. Nous utilisons des logiciels de modélisation 3D (BIM) pour une visualisation précise de votre projet avant sa réalisation.",
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
      details: "Notre équipe de conducteurs de travaux assure une supervision complète de votre chantier du début à la fin. Nous coordonnons l'ensemble des intervenants (maçons, électriciens, plombiers, etc.) pour garantir une exécution fluide et sans retard. Des contrôles qualité rigoureux sont effectués à chaque étape critique : fondations, élévation, étanchéité, finitions. Vous recevez des rapports hebdomadaires détaillés avec photos, avancement des travaux, et planning actualisé. Nous gérons également les modifications éventuelles et résolvons les problèmes techniques en temps réel.",
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
      details: "Spécialisés dans la construction de villas, immeubles et locaux commerciaux, nous réalisons des projets sur mesure adaptés à vos besoins. Le gros œuvre inclut terrassement, fondations en béton armé, élévation des murs, dalles et charpente. Le second œuvre comprend plomberie, électricité, menuiseries, revêtements de sols et murs, peinture et faux-plafonds. Nous proposons des finitions haut de gamme avec des matériaux de qualité supérieure. Chaque projet est livré clés en main, avec tous les raccordements effectués et les garanties décennales et biennales fournies.",
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
      details: "Nous intervenons sur des projets d'infrastructure pour collectivités et promoteurs privés. Nos prestations incluent la construction et réhabilitation de routes, l'installation de réseaux d'assainissement (eaux pluviales et usées), la pose de réseaux électriques et de télécommunications, ainsi que l'aménagement d'espaces publics (places, parkings, trottoirs). Nous réalisons également des ouvrages d'art tels que ponts, murs de soutènement et caniveaux. Tous nos projets respectent les normes techniques et environnementales en vigueur.",
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
      details: "Notre pôle immobilier développe des programmes résidentiels de qualité (villas, appartements) et commercialise des terrains viabilisés dans des zones stratégiques d'Abidjan. Nous accompagnons les investisseurs dans leurs choix immobiliers en analysant la rentabilité des projets et en optimisant leur fiscalité. Nos services de gestion de patrimoine incluent la location, l'entretien et la valorisation de vos biens immobiliers. Nous proposons également des solutions de financement en partenariat avec des institutions bancaires.",
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
      details: "Notre atelier de menuiserie fabrique et pose des ouvrages sur mesure en bois exotique et en aluminium. Nos réalisations incluent portes d'entrée blindées, portes intérieures design, fenêtres à double vitrage, baies coulissantes, vérandas et pergolas. Nous créons également du mobilier sur mesure (cuisines équipées, placards, bibliothèques, dressings) et réalisons des agencements intérieurs complets. Chaque pièce est fabriquée avec soin dans notre atelier par des artisans qualifiés, garantissant qualité, précision et durabilité.",
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
      details: "Notre équipe de ferronniers et métalliers conçoit et installe des ouvrages métalliques alliant sécurité, esthétique et robustesse. Nous fabriquons portails coulissants ou battants, clôtures décoratives, grilles de protection, et pergolas métalliques. Nos réalisations comprennent également escaliers en acier, garde-corps pour balcons et terrasses, rampes d'accès, ainsi que des structures métalliques pour bâtiments (charpentes, mezzanines). Tous nos ouvrages sont traités contre la corrosion et peuvent être personnalisés selon vos préférences (fer forgé, acier inoxydable, aluminium).",
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: "Assistance - Conseils - Expertise",
      description: "Accompagnement personnalisé et expertise technique pour tous vos projets BTP.",
      features: [
        "Conseil en ingénierie",
        "Assistance technique",
        "Expertise et audit",
        "Formation et accompagnement"
      ],
      details: "Nous mettons notre expertise au service des particuliers, entreprises et institutions pour les accompagner dans leurs projets de construction. Nos ingénieurs fournissent des conseils en choix de matériaux, techniques de construction et optimisation budgétaire. Nous réalisons des expertises techniques de bâtiments existants (fissures, humidité, structure), des audits énergétiques et des diagnostics avant acquisition. Nous proposons également des formations aux métiers du BTP et un accompagnement personnalisé pour les maîtres d'ouvrage inexpérimentés.",
      color: "secondary"
    },
    {
      icon: PaintBucket,
      title: "Maintenance et entretien de bâtiments",
      description: "Services complets de maintenance préventive et corrective pour préserver la valeur de votre patrimoine.",
      features: [
        "Maintenance préventive régulière",
        "Réparations et dépannages",
        "Entretien des équipements",
        "Contrats de maintenance"
      ],
      details: "Préservez la valeur de votre patrimoine immobilier avec nos services de maintenance régulière et interventions rapides. Nos équipes assurent la maintenance préventive (vérifications périodiques, entretien toiture, façades, plomberie, électricité) et interviennent rapidement en cas de panne ou dégradation. Nous entretenons climatisations, groupes électrogènes, installations sanitaires et systèmes de sécurité. Nos contrats de maintenance sur mesure garantissent disponibilité, réactivité et maîtrise de vos coûts d'exploitation. Service disponible 24h/24 et 7j/7 pour les urgences.",
      color: "accent"
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
                  
                  <Collapsible open={openItems[index]} onOpenChange={() => toggleItem(index)}>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        <span className="flex items-center justify-center gap-2">
                          En savoir plus
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openItems[index] ? 'rotate-180' : ''}`} />
                        </span>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.details}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
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