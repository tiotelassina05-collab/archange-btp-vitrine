import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const knowledgeBase = `
Base de connaissances – ARCHANGE BTP SARL

🏢 Identité
Nom complet : ARCHANGE BTP SARL
Année de création : 2018
Statut : Société à responsabilité limitée (SARL)

📍 Localisation
Adresse : Yopougon Niangon sud à gauche, Abidjan, Côte d'Ivoire

📞 Contacts
Téléphone : 07 49 99 25 99
Horaires : Lundi au vendredi 7h30 - 17h30 / samedi 8h00 - 12h00
E-mail : archangebtp@gmail.com
Facebook : Page officielle

⚒️ Domaines d'activité
ARCHANGE BTP SARL intervient dans :
- Étude et conception (plans, ingénierie, études techniques)
- Suivi de travaux (contrôle qualité, supervision de chantiers)
- Construction Bâtiment (maisons, immeubles, infrastructures)
- Travaux Publics (routes, ouvrages divers)
- Immobilier (promotion, gestion de biens)
- Menuiserie (bois et aluminium)
- Ferronnerie (ouvrages métalliques, décoratifs et structurels)
- Assistance - Conseils - Expertise

🏗️ Réalisations types
- Constructions de bâtiments résidentiels et commerciaux
- Projets d'aménagement urbain et de voirie
- Travaux de menuiserie (portes, fenêtres, mobiliers)
- Réalisations en ferronnerie (grilles, portails, balustrades)

🌟 Valeurs & Engagements
- Professionnalisme
- Qualité et rigueur dans l'exécution
- Respect des délais
- Innovation et durabilité dans le BTP

🎯 Services
Nous offrons des services complets incluant :
- Devis gratuits
- Conception de plans
- Visite d'expertise
- Suivi et Contrôle de chantiers
- Assistance et Conseil technique
- Exécution des travaux
- Gestion locative et immobilière
`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    if (!message) {
      throw new Error('Message is required');
    }

    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `Vous êtes un assistant virtuel pour ARCHANGE BTP SARL, une entreprise de BTP basée en Côte d'Ivoire. Utilisez les informations suivantes pour répondre aux questions des clients de manière professionnelle et utile :

${knowledgeBase}

Instructions :
- Répondez toujours en français
- Soyez professionnel et courtois
- Si une question dépasse votre base de connaissances, orientez vers les contacts de l'entreprise
- Encouragez les clients à demander des devis gratuits
- Mettez en avant l'expertise et la qualité des services
- Si on vous demande des informations sur des projets spécifiques ou des prix, suggérez de contacter l'équipe pour un devis personnalisé`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!openAIResponse.ok) {
      throw new Error('Failed to get response from OpenAI');
    }

    const data = await openAIResponse.json();
    const botResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: botResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chatbot function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});