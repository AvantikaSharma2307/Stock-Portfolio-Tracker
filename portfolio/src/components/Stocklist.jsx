import React from 'react';
import { Trash2 } from 'lucide-react';

export default function Stocklist() {
//   if (stocks.length === 0) {
//     return (
//       <div className="text-center py-8 bg-white rounded-lg shadow-md">
//         <p className="text-gray-500">No stocks added yet. Add your first stock above!</p>
//       </div>
//     );
//   }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Symbol
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Shares
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Value
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* {stocks.map((stock, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                {stock.symbol}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                {stock.shares.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                ${stock.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                ${(stock.shares * stock.price).toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => onDeleteStock(index)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 size={20} />
                </button>
              </td>
            </tr> */}
          {/* ))} */}
        </tbody>
        <tfoot className="bg-gray-50">
          {/* <tr>
            <td colSpan={3} className="px-6 py-3 text-right font-medium">
              Total Portfolio Value:
            </td>
            <td className="px-6 py-3 font-medium text-gray-900">
              ${stocks.reduce((sum, stock) => sum + stock.shares * stock.price, 0).toFixed(2)}
            </td>
            <td></td>
          </tr> */}
        </tfoot>
      </table>
    </div>
  );
}
