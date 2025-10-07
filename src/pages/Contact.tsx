import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Send, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour étudier votre projet et vous accompagner dans sa réalisation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Demande de Devis</CardTitle>
                  <CardDescription>
                    Décrivez-nous votre projet et nous vous recontacterons rapidement avec une proposition adaptée.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+225 XX XX XX XX XX"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="votre.email@exemple.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Description du projet *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Décrivez votre projet, vos besoins, délais souhaités..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <a href="tel:+2250749992599">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-primary/5 border-primary/20">
                    <CardContent className="p-6 text-center">
                      <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="font-semibold text-primary">Appel Direct</div>
                      <div className="text-sm text-muted-foreground">07 49 99 25 99</div>
                    </CardContent>
                  </Card>
                </a>

                <a href="https://wa.me/2250749992599" target="_blank" rel="noopener noreferrer">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-secondary/5 border-secondary/20">
                    <CardContent className="p-6 text-center">
                      <MessageSquare className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <div className="font-semibold text-secondary">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">Chat direct</div>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Coordonnées */}
              <Card>
                <CardHeader>
                  <CardTitle>Nos Coordonnées</CardTitle>
                  <CardDescription>
                    Retrouvez toutes nos informations de contact pour nous joindre facilement.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Adresse</div>
                      <div className="text-muted-foreground">
                        Yopougon Niangon Sud à gauche<br />
                        Abidjan, Côte d'Ivoire
                      </div>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline"
                      >
                        Voir sur Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Téléphone</div>
                      <div className="text-muted-foreground">
                        <a href="tel:+2250749992599" className="hover:text-secondary transition-colors">
                          +225 07 49 99 25 99
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground">
                        <a href="mailto:contact@archange-btp.com" className="hover:text-accent transition-colors">
                          contact@archange-btp.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Horaires</div>
                      <div className="text-muted-foreground text-sm">
                        Lundi - Vendredi : 7h30 - 17h30<br />
                        Samedi : 8h00 - 13h00<br />
                        Dimanche : Sur rendez-vous
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Localisation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <div className="font-semibold">Carte Google Maps</div>
                      <div className="text-sm">Yopougon Niangon Sud à gauche</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Réseaux sociaux */}
              <Card>
                <CardHeader>
                  <CardTitle>Suivez-nous</CardTitle>
                  <CardDescription>
                    Restez informé de nos actualités et réalisations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-600">Facebook</div>
                      <div className="text-sm text-blue-500">Page ARCHANGE BTP</div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;