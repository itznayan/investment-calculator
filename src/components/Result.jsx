import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ input }) {
  const resultData = calculateInvestmentResults(input);

  return (
    <>
      <table className="bg-gray-950 text-white font-thin">
        <thead>
          <tr>
            <th className="p-2 text-emerald-500 font-normal">Year</th>
            <th className="p-2 text-emerald-500 font-normal">
              Investment Value
            </th>
            <th className="p-2 text-emerald-500 font-normal">Interest Year</th>
            <th className="p-2 text-emerald-500 font-normal">Total Interest</th>
            <th className="p-2 text-emerald-500 font-normal">
              Invested Capital
            </th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year;
            const initialInvestment =
              resultData[0].valueEndOfYear -
              resultData[0].interest -
              resultData[0].annualInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
            return (
              <tr key={yearData.year}>
                <td className="pl-4 ">{yearData.year}</td>
                <td className="pl-4 ">
                  {formatter.format(yearData.valueEndOfYear)}
                </td>
                <td className="pl-4 ">{formatter.format(yearData.interest)}</td>
                <td className="pl-4 ">{formatter.format(totalInterest)}</td>
                <td className="pl-4 ">
                  {formatter.format(totalAmountInvested)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
