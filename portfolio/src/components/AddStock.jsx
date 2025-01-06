import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export default function AddStock({ onAddStock }) {
  const [symbol, setSymbol] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [price, setPrice] = useState('');
  const [marketCap, setMarketCap] = useState('');
  const [volume, setVolume] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!symbol || !companyName || !price || !marketCap || !volume) return;

    // Callback for adding stock (replace `onAddStock` with your actual function)
    onAddStock({
      stock_symbol: symbol.toUpperCase(),
      company_name: companyName,
      stock_price: Number(price), // Convert to Decimal on backend
      market_cap: Number(marketCap), // Convert to Decimal on backend
      volume: Number(volume),
    });

    // Reset form
    setSymbol('');
    setCompanyName('');
    setPrice('');
    setMarketCap('');
    setVolume('');
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-sans flex justify-center">Stock Portfolio</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md mx-16 my-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stock Symbol Input */}
          <div>
            <label htmlFor="symbol" className="block text-sm font-medium text-gray-700 mb-1">
              Stock Symbol
            </label>
            <input
              id="symbol"
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="AAPL"
              required
            />
          </div>

          {/* Company Name Input */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Apple Inc."
              required
            />
          </div>

          {/* Price per Share Input */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price per Share ($)
            </label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="150.00"
              min="0.01"
              step="0.01"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Market Cap Input */}
          <div>
            <label htmlFor="marketCap" className="block text-sm font-medium text-gray-700 mb-1">
              Market Cap ($)
            </label>
            <input
              id="marketCap"
              type="number"
              value={marketCap}
              onChange={(e) => setMarketCap(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1,000,000,000"
              min="0"
              step="0.01"
              required
            />
          </div>

          {/* Volume Input */}
          <div>
            <label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-1">
              Volume
            </label>
            <input
              id="volume"
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1000000"
              min="0"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <PlusCircle size={20} />
          Add Stock
        </button>
      </form>
    </>
  );
}
