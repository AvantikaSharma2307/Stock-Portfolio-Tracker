import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';
// { title, value, icon, trend }
const MetricCard = ({icon}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        {/* <p className="text-gray-500 text-sm">{title}</p> */}
        {/* <p className="text-2xl font-bold mt-1">{value}</p> */}
      </div>
      {/* <div className={`p-3 rounded-full ${
        trend === 'up' ? 'bg-green-100 text-green-600' : 
        trend === 'down' ? 'bg-red-100 text-red-600' : 
        'bg-blue-100 text-blue-600'
      }`}> */}
        {icon}
      </div>
    </div>
  // </div>
);
// { metrics }
const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard 
        // title="Total Portfolio Value"
        // value={`$${metrics.totalValue.toFixed(2)}`}
        icon={<DollarSign className="w-6 h-6" />}
      />
      <MetricCard 
        // title="Total Gain/Loss"
        // value={`$${metrics.totalGainLoss.toFixed(2)}`}
        icon={<TrendingUp className="w-6 h-6" />}
        // trend={metrics.totalGainLoss >= 0 ? 'up' : 'down'}
      />
      <MetricCard 
        // title="Percentage Change"
        // value={`${metrics.percentageChange.toFixed(2)}%`}
        icon={<Percent className="w-6 h-6" />}
        // trend={metrics.percentageChange >= 0 ? 'up' : 'down'}
      />
      <MetricCard 
        // title="Stocks Tracked"
        // value={metrics.trackedStocks.toString()}
        icon={<TrendingDown className="w-6 h-6" />}
      />
    </div>
  );
};

export default Dashboard;
