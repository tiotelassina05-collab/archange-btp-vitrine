import QuoteForm from "@/components/QuoteForm";

const Quote = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Demande de Devis
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Obtenez un devis personnalisé pour votre projet de construction. 
            Notre équipe vous contactera sous 24-48h pour étudier votre demande.
          </p>
        </div>
        
        <QuoteForm />
      </div>
    </div>
  );
};

export default Quote;