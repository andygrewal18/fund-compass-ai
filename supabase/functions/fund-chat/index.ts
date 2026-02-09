import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            {
              role: "system",
              content: `You are an expert mutual fund advisor AI assistant. You help users understand and compare mutual funds in India.

You have knowledge of these top funds in our database:
- Parag Parikh Flexi Cap Fund: Score 91, 5Y Return +21.5%, Expense 0.63%, Risk: High
- Axis Bluechip Fund: Score 88, 5Y Return +16.8%, Expense 0.49%, Risk: Moderate  
- Kotak Emerging Equity Fund: Score 86, 5Y Return +22.8%, Expense 0.51%, Risk: High
- Mirae Asset Large Cap Fund: Score 85, 5Y Return +17.2%, Expense 0.53%, Risk: Moderate
- HDFC Mid-Cap Opportunities: Score 82, 5Y Return +20.3%, Expense 0.78%, Risk: High
- SBI Small Cap Fund: Score 79, 5Y Return +24.6%, Expense 0.72%, Risk: Very High
- ICICI Pru Balanced Advantage: Score 76, 5Y Return +13.1%, Expense 0.95%, Risk: Moderate
- Nippon India Growth Fund: Score 72, 5Y Return +18.9%, Expense 0.88%, Risk: High

Investment Score (0-100) weighs: Returns (40%), Risk-adjusted performance (25%), Expense ratio (15%), Fund management quality (10%), AUM stability (10%).

Guidelines:
- Be concise and helpful. Use specific numbers from the data.
- When comparing funds, use clear metrics.
- For beginners, recommend Large Cap or Flexi Cap funds.
- Always mention risk levels alongside returns.
- Format responses with bullet points when listing multiple items.
- If asked about funds not in your data, say you can only advise on the funds in the comparison table.`,
            },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI usage limit reached. Please add credits in Settings." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("fund-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
