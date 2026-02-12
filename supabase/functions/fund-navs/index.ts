import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Fund names as they appear in AMFI data (Direct Plan - Growth variants)
const FUNDS: { id: string; searchTerms: string[] }[] = [
  { id: "1", searchTerms: ["Axis Bluechip", "Direct", "Growth"] },
  { id: "2", searchTerms: ["Mirae Asset Large Cap Fund", "Direct", "Growth"] },
  { id: "3", searchTerms: ["SBI Small Cap Fund", "Direct", "Growth"] },
  { id: "4", searchTerms: ["HDFC Mid Cap Fund", "Direct", "Growth"] },      // was "HDFC Mid-Cap Opportunities"
  { id: "5", searchTerms: ["Parag Parikh Flexi Cap Fund", "Direct", "Growth"] },
  { id: "6", searchTerms: ["ICICI Prudential Balanced Advantage Fund", "Direct", "Growth"] },
  { id: "7", searchTerms: ["Kotak Midcap Fund", "Direct", "Growth"] },       // was "Kotak Emerging Equity"
  { id: "8", searchTerms: ["Nippon India Growth Mid Cap Fund", "Direct", "Growth"] },
  { id: "9", searchTerms: ["Nippon India Multi Cap Fund", "Direct", "Growth"] },
  { id: "10", searchTerms: ["quant Multi Cap Fund", "Direct", "GROWTH"] },   // was "Quant Active Fund"
  { id: "11", searchTerms: ["Mahindra Manulife Multi Cap Fund", "Direct", "Growth"] },
  { id: "12", searchTerms: ["HDFC Multi Cap Fund", "Direct", "Growth"] },
  { id: "13", searchTerms: ["HDFC Balanced Advantage Fund", "Direct", "Growth"] },
  { id: "14", searchTerms: ["HDFC Flexi Cap Fund", "Direct", "Growth"] },
];

function findNav(lines: string[], searchTerms: string[]): number | null {
  for (const line of lines) {
    const upper = line.toUpperCase();
    const allMatch = searchTerms.every((term) => upper.includes(term.toUpperCase()));
    // Exclude IDCW/Dividend lines
    if (allMatch && !upper.includes("IDCW") && !upper.includes("DIVIDEND") && !upper.includes("BONUS")) {
      const parts = line.split(";");
      // Format: SchemeCode;ISIN;ISIN2;SchemeName;NAV;Date
      if (parts.length >= 5) {
        const nav = parseFloat(parts[4]);
        if (!isNaN(nav) && nav > 0) return nav;
      }
    }
  }
  return null;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Fetch the full AMFI NAV file (updated multiple times daily)
    const res = await fetch("https://portal.amfiindia.com/spages/NAVOpen.txt");
    if (!res.ok) {
      throw new Error(`AMFI API returned ${res.status}`);
    }
    const text = await res.text();
    const lines = text.split("\n");

    const funds: Record<string, number> = {};
    for (const fund of FUNDS) {
      const nav = findNav(lines, fund.searchTerms);
      if (nav !== null) {
        funds[fund.id] = nav;
      }
    }

    return new Response(JSON.stringify({ funds, fetchedAt: new Date().toISOString() }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching fund NAVs:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch fund NAVs" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
