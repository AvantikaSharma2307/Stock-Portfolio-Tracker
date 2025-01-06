import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export default function AddStock() {
  const [symbol, setSymbol] = useState('');
  const [shares, setShares] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!symbol || !shares || !price) return;

    // Callback for adding stock (replace `onAddStock` with your actual function)
    onAddStock({
      symbol: symbol.toUpperCase(),
      shares: Number(shares),
      price: Number(price),
    });

    // Reset form
    setSymbol('');
    setShares('');
    setPrice('');
  };

  return (
    <>
    <h1 className='text-5xl font-bold  text-sans  mt-16 flex justify-center'>Stock Portfolio</h1>
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md mx-16 my-44">
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

        {/* Number of Shares Input */}
        <div>
          <label htmlFor="shares" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Shares
          </label>
          <input
            id="shares"
            type="number"
            value={shares}
            onChange={(e) => setShares(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="100"
            min="1"
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
