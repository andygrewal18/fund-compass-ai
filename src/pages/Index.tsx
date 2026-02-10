import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScoreCards from "@/components/ScoreCards";
import FundComparisonTable from "@/components/FundComparisonTable";
import ChatBot from "@/components/ChatBot";
import Nifty50Stocks from "@/components/Nifty50Stocks";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <MarketTicker />
      <HeroSection />
      <ScoreCards />
      <Nifty50Stocks />
      <FundComparisonTable />
      <ChatBot />
    </div>
  );
};

export default Index;
