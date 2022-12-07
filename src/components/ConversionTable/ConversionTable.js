import React from "react";
import { toFahrenheit } from '../../utils/tempCalcs';

function ConversionTable() {
  const rows = [];

    for (let i = 0; i <= 100; i += 10) {
      rows.push(
        <tr>
          <td className="p-3 border text-center">{i}</td>
          <td className="p-3 border text-center">{toFahrenheit(i)}</td>
        </tr>
      );
    }

  function render() {
    return (
      <>
        <div className='container mx-auto px-4 max-w-screen-md'>
          <h2 className="text-lg mb-4">Quick Conversions</h2>

          <table className="table-fixed border border-collapse w-full rounded shadow mb-10">
            <thead>
              <tr>
                <th className="p-3 border">Celsius</th>
                <th className="p-3 border">Fahrenheit</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </>
    )
  }

  return render();
}

export default ConversionTable;