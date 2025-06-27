
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  type: 'job_application' | 'product_booking';
  data: any;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data }: NotificationRequest = await req.json();
    
    let emailContent = '';
    let subject = '';
    
    if (type === 'job_application') {
      subject = `New Job Application - ${data.position}`;
      emailContent = `
        <h2>New Job Application Received</h2>
        <p><strong>Position:</strong> ${data.position}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Experience:</strong> ${data.experience || 'Not specified'}</p>
        <p><strong>Additional Info:</strong> ${data.additional_info || 'None'}</p>
        <p><strong>Applied on:</strong> ${new Date().toLocaleString()}</p>
      `;
    } else if (type === 'product_booking') {
      subject = `New Product Booking - ${data.product_name}`;
      emailContent = `
        <h2>New Product Booking Received</h2>
        <p><strong>Product:</strong> ${data.product_name}</p>
        <p><strong>Quantity:</strong> ${data.quantity}</p>
        <p><strong>Deadline:</strong> ${data.deadline || 'Not specified'}</p>
        <p><strong>Customer Name:</strong> ${data.user_name}</p>
        <p><strong>Customer Email:</strong> ${data.user_email}</p>
        <p><strong>Customer Phone:</strong> ${data.user_phone}</p>
        <p><strong>Booked on:</strong> ${new Date().toLocaleString()}</p>
      `;
    }

    // For now, we'll just log the email content since we need RESEND_API_KEY
    console.log('Email notification:', { subject, emailContent });
    
    return new Response(
      JSON.stringify({ success: true, message: 'Notification logged' }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
