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
    price: 1468.70,
    change: 10.20,
    changePercent: 0.70,
    sector: "Energy",
  },
  {
    id: "2",
    symbol: "HDFCBANK",
    name: "HDFC Bank Ltd",
    price: 927.10,
    change: -5.30,
    changePercent: -0.57,
    sector: "Financial Services",
  },
  {
    id: "3",
    symbol: "TCS",
    name: "Tata Consultancy Services Ltd",
    price: 2909.80,
    change: -74.80,
    changePercent: -2.51,
    sector: "Information Technology",
  },
  {
    id: "4",
    symbol: "ICICIBANK",
    name: "ICICI Bank Ltd",
    price: 1406.10,
    change: -0.40,
    changePercent: -0.03,
    sector: "Financial Services",
  },
  {
    id: "5",
    symbol: "INFY",
    name: "Infosys Ltd",
    price: 1471.90,
    change: -25.90,
    changePercent: -1.73,
    sector: "Information Technology",
  },
  {
    id: "6",
    symbol: "BHARTIARTL",
    name: "Bharti Airtel Ltd",
    price: 2012.10,
    change: 0.80,
    changePercent: 0.04,
    sector: "Telecommunication",
  },
  {
    id: "7",
    symbol: "ITC",
    name: "ITC Ltd",
    price: 318.25,
    change: -3.15,
    changePercent: -0.98,
    sector: "Consumer Goods",
  },
  {
    id: "8",
    symbol: "SBIN",
    name: "State Bank of India",
    price: 1182.90,
    change: 38.80,
    changePercent: 3.39,
    sector: "Financial Services",
  },
  {
    id: "9",
    symbol: "LT",
    name: "Larsen & Toubro Ltd",
    price: 4170.40,
    change: 1.40,
    changePercent: 0.03,
    sector: "Construction",
  },
  {
    id: "10",
    symbol: "AXISBANK",
    name: "Axis Bank Ltd",
    price: 1347.30,
    change: -9.40,
    changePercent: -0.69,
    sector: "Financial Services",
  },
];
