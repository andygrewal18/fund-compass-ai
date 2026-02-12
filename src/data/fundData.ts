export type Fund = {
  id: string;
  name: string;
  category: string;
  amc: string;
  nav: number;
  expenseRatio: number;
  returns1Y: number;
  returns3Y: number;
  returns5Y: number;
  riskLevel: "Low" | "Moderate" | "High" | "Very High";
  aum: number; // in crores
  rating: number; // 1-5
  investmentScore: number; // 0-100
  benchmark: string;
  minInvestment: number;
  exitLoad: string;
};

export const fundsData: Fund[] = [
  {
    id: "1",
    name: "Axis Bluechip Fund",
    category: "Large Cap",
    amc: "Axis Mutual Fund",
    nav: 67.15,
    expenseRatio: 0.49,
    returns1Y: 18.5,
    returns3Y: 14.2,
    returns5Y: 16.8,
    riskLevel: "Moderate",
    aum: 34520,
    rating: 5,
    investmentScore: 88,
    benchmark: "Nifty 50 TRI",
    minInvestment: 500,
    exitLoad: "1% if redeemed within 1 year",
  },
  {
    id: "2",
    name: "Mirae Asset Large Cap Fund",
    category: "Large Cap",
    amc: "Mirae Asset",
    nav: 132.24,
    expenseRatio: 0.53,
    returns1Y: 16.3,
    returns3Y: 13.8,
    returns5Y: 17.2,
    riskLevel: "Moderate",
    aum: 41200,
    rating: 5,
    investmentScore: 85,
    benchmark: "Nifty 100 TRI",
    minInvestment: 1000,
    exitLoad: "1% if redeemed within 1 year",
  },
  {
    id: "3",
    name: "SBI Small Cap Fund",
    category: "Small Cap",
    amc: "SBI Mutual Fund",
    nav: 189.75,
    expenseRatio: 0.72,
    returns1Y: 28.4,
    returns3Y: 22.1,
    returns5Y: 24.6,
    riskLevel: "Very High",
    aum: 22800,
    rating: 4,
    investmentScore: 79,
    benchmark: "S&P BSE 250 SmallCap TRI",
    minInvestment: 500,
    exitLoad: "1% if redeemed within 1 year",
  },
  {
    id: "4",
    name: "HDFC Mid-Cap Opportunities",
    category: "Mid Cap",
    amc: "HDFC Mutual Fund",
    nav: 227.18,
    expenseRatio: 0.78,
    returns1Y: 22.1,
    returns3Y: 19.5,
    returns5Y: 20.3,
    riskLevel: "High",
    aum: 52300,
    rating: 4,
    investmentScore: 82,
    benchmark: "Nifty Midcap 150 TRI",
    minInvestment: 500,
    exitLoad: "1% if redeemed within 1 year",
  },
  {
    id: "5",
    name: "Parag Parikh Flexi Cap Fund",
    category: "Flexi Cap",
    amc: "PPFAS Mutual Fund",
    nav: 93.80,
    expenseRatio: 0.63,
    returns1Y: 20.7,
    returns3Y: 17.9,
    returns5Y: 21.5,
    riskLevel: "High",
    aum: 48900,
    rating: 5,
    investmentScore: 91,
    benchmark: "Nifty 500 TRI",
    minInvestment: 1000,
    exitLoad: "2% within 365 days, 1% within 730 days",
  },
  {
    id: "6",
    name: "ICICI Pru Balanced Advantage",
    category: "Balanced Advantage",
    amc: "ICICI Prudential",
    nav: 87.63,
    expenseRatio: 0.95,
    returns1Y: 12.4,
    returns3Y: 11.2,
    returns5Y: 13.1,
    riskLevel: "Moderate",
    aum: 58400,
    rating: 4,
    investmentScore: 76,
    benchmark: "CRISIL Hybrid 35+65 TRI",
    minInvestment: 500,
    exitLoad: "1% if redeemed within 1 year",
  },
  {
    id: "7",
    name: "Kotak Emerging Equity Fund",
    category: "Mid Cap",
    amc: "Kotak Mahindra",
    nav: 161.18,
    expenseRatio: 0.51,
    returns1Y: 25.6,
    returns3Y: 21.3,
    returns5Y: 22.8,
    riskLevel: "High",
    aum: 36700,
    rating: 5,
    investmentScore: 86,
    benchmark: "Nifty Midcap 150 TRI",
    minInvestment: 500,
    exitLoad: "1% if redeemed within 1 year",
  },
  {
    id: "8",
    name: "Nippon India Growth Fund",
    category: "Mid Cap",
    amc: "Nippon India",
    nav: 4809.02,
    expenseRatio: 0.88,
    returns1Y: 19.8,
    returns3Y: 16.4,
    returns5Y: 18.9,
    riskLevel: "High",
    aum: 28100,
    rating: 3,
    investmentScore: 72,
    benchmark: "Nifty Midcap 150 TRI",
    minInvestment: 100,
    exitLoad: "1% if redeemed within 30 days",
  },
  {
    id: "9",
    name: "Nippon India Multi Cap Fund",
    category: "Multicap",
    amc: "Nippon India",
    nav: 332.56,
    expenseRatio: 0.82,
    returns1Y: 32.4,
    returns3Y: 23.4,
    returns5Y: 25.4,
    riskLevel: "Very High",
    aum: 48808,
    rating: 5,
    investmentScore: 92,
    benchmark: "Nifty 500 TRI",
    minInvestment: 500,
    exitLoad: "1% if redeemed within 1 year",
  },
  {
    id: "10",
    name: "Quant Active Fund",
    category: "Multicap",
    amc: "Quant Mutual Fund",
    nav: 654.28,
    expenseRatio: 0.75,
    returns1Y: 38.2,
    returns3Y: 15.5,
    returns5Y: 28.5,
    riskLevel: "Very High",
    aum: 10285,
    rating: 4,
    investmentScore: 84,
    benchmark: "Nifty 500 TRI",
    minInvestment: 5000,
    exitLoad: "1% if redeemed within 15 days",
  },
  {
    id: "11",
    name: "Mahindra Manulife Multi Cap Fund",
    category: "Multicap",
    amc: "Mahindra Manulife",
    nav: 42.54,
    expenseRatio: 0.68,
    returns1Y: 28.9,
    returns3Y: 17.3,
    returns5Y: 26.0,
    riskLevel: "Very High",
    aum: 6046,
    rating: 4,
    investmentScore: 81,
    benchmark: "Nifty 500 TRI",
    minInvestment: 1000,
    exitLoad: "1% if redeemed within 1 year",
  },
  {
    id: "12",
    name: "HDFC Multi Cap Fund",
    category: "Multicap",
    amc: "HDFC Mutual Fund",
    nav: 20.14,
    expenseRatio: 0.55,
    returns1Y: 26.7,
    returns3Y: 21.1,
    returns5Y: 22.5,
    riskLevel: "Very High",
    aum: 19884,
    rating: 4,
    investmentScore: 83,
    benchmark: "Nifty 500 TRI",
    minInvestment: 100,
    exitLoad: "1% if redeemed within 1 year",
  },
  {
    id: "13",
    name: "HDFC Balanced Advantage Fund",
    category: "Balanced Advantage",
    amc: "HDFC Mutual Fund",
    nav: 581.34,
    expenseRatio: 0.78,
    returns1Y: 9.2,
    returns3Y: 18.6,
    returns5Y: 18.0,
    riskLevel: "Moderate",
    aum: 106821,
    rating: 5,
    investmentScore: 89,
    benchmark: "NIFTY 50 Hybrid Composite Debt 65:35",
    minInvestment: 100,
    exitLoad: "1% if redeemed within 1 year",
  },
  {
    id: "14",
    name: "HDFC Flexi Cap Fund",
    category: "Flexi Cap",
    amc: "HDFC Mutual Fund",
    nav: 2301.47,
    expenseRatio: 0.81,
    returns1Y: 13.5,
    returns3Y: 22.8,
    returns5Y: 21.4,
    riskLevel: "High",
    aum: 97451,
    rating: 5,
    investmentScore: 90,
    benchmark: "NIFTY 500 TRI",
    minInvestment: 100,
    exitLoad: "1% if redeemed within 1 year",
  },
];

export const marketOverview = {
  nifty50: { value: 24856.15, change: 1.24 },
  sensex: { value: 81712.42, change: 1.18 },
  niftyMidcap: { value: 58234.78, change: 0.87 },
  niftySmallcap: { value: 17432.56, change: -0.32 },
};

export function getScoreColor(score: number): string {
  if (score >= 85) return "text-score-excellent";
  if (score >= 70) return "text-score-good";
  if (score >= 55) return "text-score-average";
  if (score >= 40) return "text-score-poor";
  return "text-score-bad";
}

export function getScoreLabel(score: number): string {
  if (score >= 85) return "Excellent";
  if (score >= 70) return "Good";
  if (score >= 55) return "Average";
  if (score >= 40) return "Below Average";
  return "Poor";
}

export function getRiskColor(risk: string): string {
  switch (risk) {
    case "Low": return "text-score-excellent";
    case "Moderate": return "text-chart-warning";
    case "High": return "text-score-poor";
    case "Very High": return "text-score-bad";
    default: return "text-muted-foreground";
  }
}
