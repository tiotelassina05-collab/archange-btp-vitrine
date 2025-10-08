import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Send, Building, Phone, Mail, MapPin, DollarSign } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  email: string;
  projectType: string;
  mission: string;
  budget: string;
}

const QuoteForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    email: '',
    projectType: '',
    mission: '',
    budget: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const projectTypes = [
    'Villa basse',
    'Villa duplex',
    'Immeuble',
    'Hôtel',
    'Complexe résidentiel',
    'Magasin',
    'Hôpital',
    'École',
    'Ouverture de voies',
    'Reprofilage',
    'Terrassement',
    'Ouvrages d\'assainissement',
    'Entrepôt',
    'Appartement',
    'Terrains ou parcelles',
    'Autres à préciser'
  ];

  const missions = [
    'Devis',
    'Conception de plans',
    'Visite d\'expertise',
    'Suivi et Contrôle',
    'Assistance et Conseil',
    'Exécution des travaux',
    'Location',
    'Achat',
    'Gestion locative',
    'Autres à préciser'
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = (): boolean => {
    const requiredFields = ['firstName', 'lastName', 'phone', 'email', 'address', 'projectType', 'mission'];
    
    for (const field of requiredFields) {
      if (!formData[field as keyof FormData]) {
        toast({
          title: "Champ requis",
          description: "Veuillez remplir tous les champs obligatoires.",
          variant: "destructive",
        });
        return false;
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email invalide",
        description: "Veuillez saisir une adresse email valide.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('quote_requests')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          project_type: formData.projectType,
          mission: formData.mission,
          budget: formData.budget || null,
          status: 'new'
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-quote-email', {
        body: formData
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Don't throw - data is already saved, email is optional
      }

      toast({
        title: "Devis envoyé !",
        description: "Votre demande de devis a été enregistrée avec succès. Nous vous contacterons sous 24-48h.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        email: '',
        projectType: '',
        mission: '',
        budget: ''
      });
    } catch (error: any) {
      console.error('Error submitting quote:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Building className="w-6 h-6" />
          Demande de Devis - ARCHANGE BTP
        </CardTitle>
        <p className="text-white/90 text-sm">
          Remplissez ce formulaire pour recevoir votre devis personnalisé
        </p>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations personnelles */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Informations de contact
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Votre prénom"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Votre nom de famille"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="07 XX XX XX XX"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Adresse *
              </Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Votre adresse complète"
                required
                rows={2}
              />
            </div>
          </div>

          {/* Détails du projet */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Building className="w-5 h-5" />
              Détails du projet
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="projectType">Type de projet *</Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type de projet" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mission">Mission *</Label>
                <Select value={formData.mission} onValueChange={(value) => handleInputChange('mission', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez la mission" />
                  </SelectTrigger>
                  <SelectContent>
                    {missions.map((mission) => (
                      <SelectItem key={mission} value={mission}>
                        {mission}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                Budget prévisionnel (FCFA)
              </Label>
              <Input
                id="budget"
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                placeholder="Ex: 5 000 000 FCFA"
              />
              <p className="text-sm text-muted-foreground">
                Indiquez votre budget approximatif pour mieux vous conseiller
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-3 text-lg"
              size="lg"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Envoi en cours...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Envoyer ma demande de devis
                </div>
              )}
            </Button>
            
            <p className="text-sm text-muted-foreground text-center mt-3">
              * Champs obligatoires | Réponse sous 24-48h | 📞 07 49 99 25 99
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;