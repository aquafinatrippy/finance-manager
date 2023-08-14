import { useNavigate } from "react-router-dom";
import { Button } from "../@/components/ui/button";
import { FinanceCard } from "../components/FinanceCard";
import { FinancialOutput } from "../components/FinancialOutput";
import { DataChart } from "../components/DataChart";

export const HomeView = () => {
  const navigate = useNavigate();

  const dummyData = [
    { sum: 400, title: "Total Earning" },
    { sum: 400, title: "Total Spending" },
    { sum: 400, title: "Free money" },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dummyData.map(({ sum, title }, index) => (
          <FinanceCard sum={sum} title={title} key={index} />
        ))}
      </div>
      <div className="h-80">
        <DataChart />
      </div>
      <div className="mt-4">
        <Button onClick={() => navigate("/create-finance")} variant="ghost">
          Add income
        </Button>
        <FinancialOutput />
      </div>
      <div className="mt-4">
        <Button onClick={() => navigate("/create-finance")} variant="ghost">
          Add expense
        </Button>
        <FinancialOutput />
      </div>
    </div>
  );
};
