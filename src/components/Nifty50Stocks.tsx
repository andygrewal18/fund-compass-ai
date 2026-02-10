import { useState } from "react";
import { nifty50Stocks, Stock } from "@/data/stockData";
import { ArrowUpDown, ArrowUp, ArrowDown, TrendingUp, TrendingDown } from "lucide-react";

type SortKey = keyof Stock;
type SortDir = "asc" | "desc";

const Nifty50Stocks = () => {
    const [sortKey, setSortKey] = useState<SortKey>("changePercent");
    const [sortDir, setSortDir] = useState<SortDir>("desc");

    const sorted = [...nifty50Stocks].sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (typeof aVal === "number" && typeof bVal === "number") {
            return sortDir === "asc" ? aVal - bVal : bVal - aVal;
        }
        return sortDir === "asc"
            ? String(aVal).localeCompare(String(bVal))
            : String(bVal).localeCompare(String(aVal));
    });

    const toggleSort = (key: SortKey) => {
        if (sortKey === key) {
            setSortDir(sortDir === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortDir("desc");
        }
    };

    const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
        if (sortKey !== columnKey) return <ArrowUpDown className="w-3 h-3 text-muted-foreground/50" />;
        return sortDir === "asc" ? <ArrowUp className="w-3 h-3 text-primary" /> : <ArrowDown className="w-3 h-3 text-primary" />;
    };

    const columns = [
        { key: "symbol" as SortKey, label: "Symbol" },
        { key: "name" as SortKey, label: "Company" },
        { key: "price" as SortKey, label: "Price (₹)" },
        { key: "changePercent" as SortKey, label: "Change %" },
        { key: "sector" as SortKey, label: "Sector" },
    ];

    return (
        <section className="py-12 px-4 bg-secondary/10">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold">Nifty 50 Stocks</h2>
                        <p className="text-sm text-muted-foreground mt-1">Real-time performance of major Indian companies</p>
                    </div>
                </div>

                <div className="glass-card overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border">
                                    {columns.map(({ key, label }) => (
                                        <th
                                            key={key}
                                            className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                                            onClick={() => toggleSort(key)}
                                        >
                                            <span className="inline-flex items-center gap-1">
                                                {label} <SortIcon columnKey={key} />
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {sorted.map((stock, i) => (
                                    <tr
                                        key={stock.id}
                                        className="border-b border-border/50 hover:bg-secondary/30 transition-colors animate-fade-in"
                                        style={{ animationDelay: `${i * 50}ms` }}
                                    >
                                        <td className="px-4 py-4">
                                            <span className="font-bold text-primary">{stock.symbol}</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="font-medium text-foreground">{stock.name}</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="font-mono font-semibold text-foreground">
                                                {stock.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div
                                                className={`flex items-center gap-1 font-mono font-bold ${stock.changePercent >= 0 ? "text-chart-positive" : "text-chart-negative"
                                                    }`}
                                            >
                                                {stock.changePercent >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                                {stock.changePercent >= 0 ? "+" : ""}
                                                {stock.changePercent}%
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-muted-foreground">
                                            {stock.sector}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nifty50Stocks;
