import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const QuoteRequestSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100, "First name too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(100, "Last name too long"),
  email: z.string().email("Invalid email format").max(255, "Email too long"),
  phone: z.string().trim().min(8, "Phone number too short").max(20, "Phone number too long"),
  address: z.string().trim().min(5, "Address too short").max(500, "Address too long"),
  projectType: z.string().trim().min(1, "Project type is required").max(100, "Project type too long"),
  mission: z.string().trim().min(1, "Mission is required").max(100, "Mission too long"),
  budget: z.string().max(50, "Budget text too long").optional().default("")
});

type QuoteRequest = z.infer<typeof QuoteRequestSchema>;

// HTML escaping to prevent injection attacks
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    
    // Validate input with zod schema
    const validationResult = QuoteRequestSchema.safeParse(rawData);
    
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error.errors);
      return new Response(
        JSON.stringify({ 
          error: "Invalid input data", 
          details: validationResult.error.errors.map(e => e.message).join(", "),
          success: false 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    const formData = validationResult.data;
    
    // Escape all user inputs to prevent HTML injection
    const safeData = {
      firstName: escapeHtml(formData.firstName),
      lastName: escapeHtml(formData.lastName),
      phone: escapeHtml(formData.phone),
      email: escapeHtml(formData.email),
      address: escapeHtml(formData.address),
      projectType: escapeHtml(formData.projectType),
      mission: escapeHtml(formData.mission),
      budget: escapeHtml(formData.budget)
    };
    
    console.log("Processing validated quote request for:", safeData.email);

    // Send email to ARCHANGE BTP with escaped data
    const emailResponse = await resend.emails.send({
      from: "ARCHANGE BTP - Devis <contact@archange-btp.com>",
      to: ["contact@archange-btp.com"],
      subject: `Nouvelle demande de devis - ${safeData.firstName} ${safeData.lastName}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nouvelle Demande de Devis</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #2563eb; margin-top: 0;">Informations du Client</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb;">
              <p><strong>Nom complet :</strong> ${formData.firstName} ${formData.lastName}</p>
              <p><strong>Téléphone :</strong> ${formData.phone}</p>
              <p><strong>Email :</strong> ${formData.email}</p>
              <p><strong>Adresse :</strong> ${formData.address}</p>
            </div>

            <h2 style="color: #2563eb;">Détails du Projet</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #7c3aed;">
              <p><strong>Type de projet :</strong> ${formData.projectType}</p>
              <p><strong>Mission demandée :</strong> ${formData.mission}</p>
              <p><strong>Budget prévisionnel :</strong> ${formData.budget}</p>
            </div>

            <div style="margin-top: 30px; padding: 20px; background: #e0f2fe; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #0277bd; font-weight: bold;">
                📞 Contactez le client au : ${formData.phone}
              </p>
              <p style="margin: 5px 0 0 0; color: #0277bd;">
                ✉️ Email : ${formData.email}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to client with escaped data
    await resend.emails.send({
      from: "ARCHANGE BTP <contact@archange-btp.com>",
      to: [safeData.email],
      subject: "Confirmation de réception de votre demande de devis",
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Merci pour votre demande !</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #2563eb; margin-top: 0;">Bonjour ${safeData.firstName},</h2>
            
            <p>Nous avons bien reçu votre demande de devis pour votre projet de <strong>${safeData.projectType}</strong>.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
              <h3 style="color: #059669; margin-top: 0;">Prochaines étapes :</h3>
              <ul style="color: #374151;">
                <li>Étude de votre demande par notre équipe technique</li>
                <li>Prise de contact sous 24-48h</li>
                <li>Planification d'une visite si nécessaire</li>
                <li>Remise du devis détaillé</li>
              </ul>
            </div>

            <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <p style="margin: 0; color: #0277bd; font-weight: bold;">
                En cas d'urgence, contactez-nous au : 07 49 99 25 99
              </p>
            </div>

            <p>Cordialement,<br>
            <strong>L'équipe ARCHANGE BTP SARL</strong><br>
            Yopougon Niangon Sud, Abidjan<br>
            📞 07 49 99 25 99 | ✉️ contact@archange-btp.com</p>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, message: "Devis envoyé avec succès" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message, success: false }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);