import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiggyBank, TrendingUp, Calculator } from "lucide-react";

interface SIPCalculatorProps {
    defaultReturn?: number;
}

const SIPCalculator = ({ defaultReturn = 12 }: SIPCalculatorProps) => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [expectedReturn, setExpectedReturn] = useState(defaultReturn);
    const [timePeriod, setTimePeriod] = useState(5);
    const [results, setResults] = useState({
        investedAmount: 0,
        estReturns: 0,
        totalValue: 0,
    });

    useEffect(() => {
        const P = monthlyInvestment;
        const i = expectedReturn / 12 / 100;
        const n = timePeriod * 12;

        const M = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
        const invested = P * n;

        setResults({
            investedAmount: Math.round(invested),
            estReturns: Math.round(M - invested),
            totalValue: Math.round(M),
        });
    }, [monthlyInvestment, expectedReturn, timePeriod]);

    return (
        <Card className="w-full bg-secondary/5 border-primary/20">
            <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    SIP Calculator
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <Label>Monthly Investment</Label>
                            <span className="text-primary font-mono font-bold">₹{monthlyInvestment.toLocaleString("en-IN")}</span>
                        </div>
                        <Slider
                            value={[monthlyInvestment]}
                            min={500}
                            max={100000}
                            step={500}
                            onValueChange={(v) => setMonthlyInvestment(v[0])}
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <Label>Expected Return (Annual %)</Label>
                            <span className="text-primary font-mono font-bold">{expectedReturn}%</span>
                        </div>
                        <Slider
                            value={[expectedReturn]}
                            min={1}
                            max={30}
                            step={0.5}
                            onValueChange={(v) => setExpectedReturn(v[0])}
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <Label>Time Period (Years)</Label>
                            <span className="text-primary font-mono font-bold">{timePeriod}y</span>
                        </div>
                        <Slider
                            value={[timePeriod]}
                            min={1}
                            max={30}
                            step={1}
                            onValueChange={(v) => setTimePeriod(v[0])}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-primary/10">
                    <div className="p-3 bg-background/50 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                            <PiggyBank className="w-3 h-3 text-chart-warning" />
                            Invested
                        </p>
                        <p className="text-lg font-mono font-bold">₹{results.investedAmount.toLocaleString("en-IN")}</p>
                    </div>
                    <div className="p-3 bg-background/50 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3 text-chart-positive" />
                            Est. Returns
                        </p>
                        <p className="text-lg font-mono font-bold text-chart-positive">₹{results.estReturns.toLocaleString("en-IN")}</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                        <p className="text-xs text-primary/80 mb-1 font-semibold">Total Value</p>
                        <p className="text-xl font-mono font-bold text-primary">₹{results.totalValue.toLocaleString("en-IN")}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SIPCalculator;
