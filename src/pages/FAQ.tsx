import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Services généraux",
      questions: [
        {
          question: "Quels types de projets réalisez-vous ?",
          answer: "ARCHANGE BTP SARL réalise tous types de projets BTP : construction de maisons individuelles, immeubles, bâtiments commerciaux, travaux de rénovation, aménagements intérieurs, menuiserie, ferronnerie, et travaux publics (voirie, assainissement)."
        },
        {
          question: "Intervenez-vous sur toute la Côte d'Ivoire ?",
          answer: "Oui, nous intervenons principalement sur Abidjan et sa région, mais nous pouvons réaliser des projets sur l'ensemble du territoire ivoirien selon la nature et l'envergure du projet."
        },
        {
          question: "Proposez-vous des prestations clés en main ?",
          answer: "Oui, nous offrons des solutions complètes clés en main incluant l'étude, la conception, le suivi et la réalisation des travaux jusqu'à la livraison finale de votre projet."
        }
      ]
    },
    {
      category: "Devis et tarification",
      questions: [
        {
          question: "Comment obtenir un devis ?",
          answer: "Vous pouvez obtenir un devis gratuit en remplissant notre formulaire en ligne, en nous appelant au 07 49 99 25 99, ou en nous contactant par email à contact@archange-btp.com. Nous vous répondons sous 24-48h."
        },
        {
          question: "Les devis sont-ils gratuits ?",
          answer: "Oui, tous nos devis sont gratuits et sans engagement. Nous étudions votre projet et vous proposons une estimation détaillée adaptée à vos besoins et à votre budget."
        },
        {
          question: "Quels sont vos délais de réponse ?",
          answer: "Nous nous engageons à vous contacter sous 24 à 48 heures maximum après réception de votre demande de devis pour planifier une visite ou un rendez-vous."
        },
        {
          question: "Proposez-vous des facilités de paiement ?",
          answer: "Oui, nous proposons des solutions de paiement échelonné adaptées à votre projet. Les modalités sont définies lors de l'établissement du devis et du contrat."
        }
      ]
    },
    {
      category: "Délais et réalisation",
      questions: [
        {
          question: "Quels sont vos délais de réalisation ?",
          answer: "Les délais varient selon la nature et l'ampleur du projet. Lors de l'établissement du devis, nous vous proposons un planning détaillé que nous nous engageons à respecter."
        },
        {
          question: "Comment se déroule le suivi de chantier ?",
          answer: "Nous assurons un suivi permanent avec un chef de chantier dédié, des points réguliers avec vous, un contrôle qualité à chaque étape et un reporting détaillé de l'avancement des travaux."
        },
        {
          question: "Que se passe-t-il en cas de retard ?",
          answer: "Nous mettons tout en œuvre pour respecter les délais convenus. En cas d'imprévu, nous vous informons immédiatement et trouvons ensemble les meilleures solutions pour limiter l'impact sur votre projet."
        }
      ]
    },
    {
      category: "Qualité et garanties",
      questions: [
        {
          question: "Quelles garanties offrez-vous ?",
          answer: "Nous offrons les garanties légales : garantie de parfait achèvement (1 an), garantie biennale (2 ans) et garantie décennale (10 ans) selon la nature des travaux réalisés."
        },
        {
          question: "Êtes-vous assurés ?",
          answer: "Oui, ARCHANGE BTP SARL est couvert par une assurance responsabilité civile professionnelle et une assurance décennale pour tous nos chantiers."
        },
        {
          question: "Comment garantissez-vous la qualité ?",
          answer: "Nous travaillons avec des matériaux de qualité certifiée, des artisans qualifiés, et nous effectuons des contrôles qualité réguliers à chaque étape du chantier."
        }
      ]
    },
    {
      category: "Pratique",
      questions: [
        {
          question: "Quels sont vos horaires d'ouverture ?",
          answer: "Nous sommes ouverts du lundi au vendredi de 7h30 à 17h30, et le samedi de 8h00 à 13h00. En dehors de ces horaires, vous pouvez nous laisser un message et nous vous rappellerons."
        },
        {
          question: "Faut-il prendre rendez-vous ?",
          answer: "Pour une visite à nos bureaux, il est préférable de prendre rendez-vous au préalable. Pour une visite de chantier ou d'expertise, un rendez-vous est nécessaire."
        },
        {
          question: "Proposez-vous des visites conseils ?",
          answer: "Oui, nous proposons des visites d'expertise et de conseil sur site pour évaluer votre projet, vous conseiller sur les solutions techniques et établir un devis précis."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Foire Aux Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquentes sur nos services, 
            nos tarifs et nos méthodes de travail.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto mb-12">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="mb-8 overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {category.category}
                </h2>
              </div>
              <div className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left hover:text-primary">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Témoignages Clients
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez ce que nos clients satisfaits disent de leur expérience avec ARCHANGE BTP
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-12">
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
                {/* Testimonial 1 - Mr. N'DAKOU */}
                <CarouselItem className="md:basis-1/2">
                  <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                    <div className="p-6 relative">
                      <Quote className="w-10 h-10 text-primary/20 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 italic leading-relaxed">
                        "Avec Archange BTP, c'est la rigueur démontrée pendant le suivi qui m'a permis de bâtir mon immeuble R+4 selon les normes."
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-bold text-foreground">Mr. N'DAKOU</p>
                        <p className="text-sm text-muted-foreground">Propriétaire d'un immeuble R+4</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>

                {/* Testimonial 2 - Mme SYLLA */}
                <CarouselItem className="md:basis-1/2">
                  <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full" />
                    <div className="p-6 relative">
                      <Quote className="w-10 h-10 text-secondary/20 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 italic leading-relaxed">
                        "Grâce à ARCHANGE BTP, mon rêve de villa est devenu réalité ! Une équipe à l'écoute, des délais respectés et une qualité de finition exceptionnelle. Aujourd'hui, je profite chaque jour d'une maison qui reflète exactement ce que je voulais."
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-bold text-foreground">Mme SYLLA</p>
                        <p className="text-sm text-muted-foreground">Propriétaire d'une duplex à Cocody</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>

                {/* Testimonial 3 - M. DIABY Bangali */}
                <CarouselItem className="md:basis-1/2">
                  <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />
                    <div className="p-6 relative">
                      <Quote className="w-10 h-10 text-accent/20 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 italic leading-relaxed">
                        "Collaborer avec ARCHANGE BTP, c'est travailler avec des professionnels qui comprennent les enjeux du chantier. Leur suivi technique rigoureux et leur réactivité ont fait toute la différence sur nos projets immobiliers. Une valeur sûre dans le BTP ivoirien."
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-bold text-foreground">M. DIABY Bangali</p>
                        <p className="text-sm text-muted-foreground">Promoteur Immobilier - Propriétaire de 2 immeubles Yopougon Sable</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>

                {/* Testimonial 4 - M. CISSE Amadou */}
                <CarouselItem className="md:basis-1/2">
                  <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                    <div className="p-6 relative">
                      <Quote className="w-10 h-10 text-primary/20 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 italic leading-relaxed">
                        "ARCHANGE BTP a géré mon chantier comme si c'était le leur ! Suivi constant, transparence sur les coûts, et surtout une finition de haut niveau. C'est rare de trouver une entreprise aussi sérieuse."
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-bold text-foreground">M. CISSE Amadou</p>
                        <p className="text-sm text-muted-foreground">Propriétaire à Yopougon Ananeraie</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary to-secondary p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              asChild
            >
              <Link to="/contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                Nous contacter
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+2250749992599">
                <Phone className="w-5 h-5 mr-2" />
                07 49 99 25 99
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
