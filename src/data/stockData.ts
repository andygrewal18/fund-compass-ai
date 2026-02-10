export type Stock = {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  sector: string;
};

export const nifty50Stocks: Stock[] = [
  {
    id: "1",
    symbol: "RELIANCE",
    name: "Reliance Industries Ltd",
    price: 2985.40,
    change: 45.20,
    changePercent: 1.54,
    sector: "Energy",
  },
  {
    id: "2",
    symbol: "HDFCBANK",
    name: "HDFC Bank Ltd",
    price: 1642.15,
    change: -12.40,
    changePercent: -0.75,
    sector: "Financial Services",
  },
  {
    id: "3",
    symbol: "TCS",
    name: "Tata Consultancy Services Ltd",
    price: 4125.60,
    change: 62.80,
    changePercent: 1.55,
    sector: "Information Technology",
  },
  {
    id: "4",
    symbol: "ICICIBANK",
    name: "ICICI Bank Ltd",
    price: 1124.30,
    change: 8.90,
    changePercent: 0.80,
    sector: "Financial Services",
  },
  {
    id: "5",
    symbol: "INFY",
    name: "Infosys Ltd",
    price: 1685.20,
    change: -5.40,
    changePercent: -0.32,
    sector: "Information Technology",
  },
  {
    id: "6",
    symbol: "BHARTIARTL",
    name: "Bharti Airtel Ltd",
    price: 1342.75,
    change: 22.15,
    changePercent: 1.68,
    sector: "Telecommunication",
  },
  {
    id: "7",
    symbol: "ITC",
    name: "ITC Ltd",
    price: 452.10,
    change: 4.30,
    changePercent: 0.96,
    sector: "Consumer Goods",
  },
  {
    id: "8",
    symbol: "SBIN",
    name: "State Bank of India",
    price: 824.50,
    change: 12.60,
    changePercent: 1.55,
    sector: "Financial Services",
  },
  {
    id: "9",
    symbol: "LTIM",
    name: "Larsen & Toubro Ltd",
    price: 3642.00,
    change: -18.50,
    changePercent: -0.51,
    sector: "Construction",
  },
  {
    id: "10",
    symbol: "AXISBANK",
    name: "Axis Bank Ltd",
    price: 1085.45,
    change: 6.20,
    changePercent: 0.57,
    sector: "Financial Services",
  },
];
