import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Fund, getRiskColor, getScoreColor, getScoreLabel } from "@/data/fundData";
import InvestmentScoreRing from "./InvestmentScoreRing";
import SIPCalculator from "./SIPCalculator";
import { TrendingUp, Shield, BarChart3, Info, Wallet, PieChart } from "lucide-react";

interface FundDetailModalProps {
    fund: Fund | null;
    isOpen: boolean;
    onClose: () => void;
}

const FundDetailModal = ({ fund, isOpen, onClose }: FundDetailModalProps) => {
    if (!fund) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-md border-primary/20">
                <DialogHeader className="text-left border-b border-border pb-4 mb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <DialogTitle className="text-2xl font-bold text-foreground">{fund.name}</DialogTitle>
                            <DialogDescription className="text-muted-foreground mt-1">
                                {fund.category} • {fund.amc}
                            </DialogDescription>
                        </div>
                        <div className="flex items-center gap-3 bg-secondary/20 p-2 rounded-xl border border-border/50">
                            <InvestmentScoreRing score={fund.investmentScore} size={50} />
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">AI Score</p>
                                <p className={`text-sm font-bold ${getScoreColor(fund.investmentScore)}`}>
                                    {getScoreLabel(fund.investmentScore)} ({fund.investmentScore})
                                </p>
                            </div>
                        </div>
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column: Fund Details */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-secondary/10 border border-border/30">
                                <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                                    <BarChart3 className="w-3 h-3" /> NAV
                                </p>
                                <p className="text-xl font-mono font-bold">₹{fund.nav.toLocaleString("en-IN")}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-secondary/10 border border-border/30">
                                <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                                    <Shield className="w-3 h-3" /> Risk Level
                                </p>
                                <p className={`text-lg font-bold ${getRiskColor(fund.riskLevel)}`}>{fund.riskLevel}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-primary" /> Performance History
                            </h3>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="p-3 bg-secondary/5 rounded-lg border border-border/50 text-center">
                                    <p className="text-[10px] text-muted-foreground">1Y Return</p>
                                    <p className="text-sm font-mono font-bold text-chart-positive">+{fund.returns1Y}%</p>
                                </div>
                                <div className="p-3 bg-secondary/5 rounded-lg border border-border/50 text-center">
                                    <p className="text-[10px] text-muted-foreground">3Y Return</p>
                                    <p className="text-sm font-mono font-bold text-chart-positive">+{fund.returns3Y}%</p>
                                </div>
                                <div className="p-3 bg-secondary/5 rounded-lg border border-border/50 text-center">
                                    <p className="text-[10px] text-muted-foreground">5Y Return</p>
                                    <p className="text-sm font-mono font-bold text-chart-positive">+{fund.returns5Y}%</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                <Info className="w-4 h-4 text-primary" /> Fund Information
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between py-2 border-b border-border/30">
                                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                                        <Wallet className="w-3 h-3" /> Min Investment
                                    </span>
                                    <span className="text-sm font-semibold">₹{fund.minInvestment.toLocaleString("en-IN")}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border/30">
                                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                                        <PieChart className="w-3 h-3" /> AUM
                                    </span>
                                    <span className="text-sm font-semibold">₹{fund.aum.toLocaleString("en-IN")} Cr</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border/30">
                                    <span className="text-sm text-muted-foreground">Expense Ratio</span>
                                    <span className="text-sm font-semibold">{fund.expenseRatio}%</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border/30">
                                    <span className="text-sm text-muted-foreground">Benchmark</span>
                                    <span className="text-sm font-semibold">{fund.benchmark}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-sm text-muted-foreground">Exit Load</span>
                                    <span className="text-sm font-semibold text-right max-w-[200px]">{fund.exitLoad}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: SIP Calculator */}
                    <div className="lg:border-l lg:border-border lg:pl-8">
                        <SIPCalculator defaultReturn={fund.returns3Y} />
                        <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                            <p className="text-xs text-primary/80 leading-relaxed italic">
                                * Returns are based on historical data. Future returns are not guaranteed. Mutal fund investments are subject to market risks.
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default FundDetailModal;
