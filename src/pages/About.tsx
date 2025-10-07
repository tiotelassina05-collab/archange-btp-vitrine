import { Building, Users, Target, Award, Clock, Shield, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const About = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              À Propos d'ARCHANGE BTP
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Depuis 2018, nous bâtissons l'avenir avec expertise, qualité et professionnalisme en Côte d'Ivoire.
            </p>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Créée en 2018, ARCHANGE BTP SARL s'est rapidement imposée comme un acteur majeur 
                  du secteur du Bâtiment et des Travaux Publics en Côte d'Ivoire.
                </p>
                <p className="text-lg leading-relaxed">
                  Basée à Yopougon Niangon Sud, notre entreprise a développé une expertise 
                  reconnue dans tous les métiers du BTP, de l'étude de projet à la livraison 
                  clés en main.
                </p>
                <p className="text-lg leading-relaxed">
                  Notre croissance constante témoigne de la confiance que nous accordent 
                  nos clients et partenaires.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">2018 - 2025</CardTitle>
                  <CardDescription>7 ans d'excellence</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Projets réalisés</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary">20+</div>
                      <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nos Valeurs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action quotidienne et garantissent la satisfaction de nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Professionnalisme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous mettons notre expertise technique et notre savoir-faire au service 
                  de chaque projet avec la plus grande rigueur.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>Qualité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  La qualité de nos réalisations est notre priorité absolue. Nous utilisons 
                  les meilleurs matériaux et techniques de construction.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>Rigueur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Le respect des délais et des engagements pris envers nos clients 
                  constitue un pilier fondamental de notre approche.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous intégrons les dernières technologies et méthodes de construction 
                  pour offrir des solutions modernes et durables à nos clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Notre Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une maîtrise complète de tous les corps d'état du BTP pour vous accompagner 
              dans tous vos projets de construction.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Conception et Étude</h3>
                  <p className="text-muted-foreground">
                    Nos équipes d'ingénieurs et d'architectes conçoivent vos projets 
                    avec précision et innovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Suivi de Chantier</h3>
                  <p className="text-muted-foreground">
                    Un accompagnement personnalisé tout au long de la réalisation 
                    de votre projet pour garantir la qualité.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Garantie et Maintenance</h3>
                  <p className="text-muted-foreground">
                    Nous assumons nos responsabilités avec des garanties étendues 
                    et un service après-vente de qualité.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Certifications & Agréments</h3>
                  <p className="text-muted-foreground mb-6">
                    ARCHANGE BTP SARL dispose de tous les agréments nécessaires pour 
                    intervenir sur vos projets en toute légalité.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/80 rounded-lg p-4">
                      <div className="font-semibold text-primary">RCCM</div>
                      <div className="text-sm text-muted-foreground">CI-ABJ-2018-B-09155</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4">
                      <div className="font-semibold text-secondary">DFE</div>
                      <div className="text-sm text-muted-foreground">CC: 1919176 Y</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;