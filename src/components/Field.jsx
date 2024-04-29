import React from "react";

function Field({ onChange, userInput }) {
  return (
    <div className="grid grid-cols-2">
      <label className="mt-2 text-sm font-normal">
        <h1 className="ml-4">Initial Investment </h1>
        <input
          type="number"
          required
          value={userInput.initialInvestment}
          name="initial-investment"
          onChange={(event) =>
            onChange("initialInvestment", event.target.value)
          }
          className="hover:ring-2  mt-2 mx-4 bg-transparent border rounded-lg px-2 h-10  w-40"
        />
      </label>

      <label className="mt-2 text-sm font-normal">
        <h1 className="ml-4">Annual Investment </h1>
        <input
          type="number"
          required
          value={userInput.annualInvestment}
          name="annualInvestment"
          onChange={(event) => onChange("annualInvestment", event.target.value)}
          className="hover:ring-2  mt-2 mx-4 bg-transparent border rounded-lg px-2 h-10  w-40"
        />
      </label>
      <label className="mt-2 text-sm font-normal">
        <h1 className="ml-4">Expected Return </h1>
        <input
          type="number"
          required
          value={userInput.expectedReturn}
          name="expectedReturn"
          onChange={(event) => onChange("expectedReturn", event.target.value)}
          className="hover:ring-2  mt-2 mx-4 bg-transparent border rounded-lg px-2 h-10  w-40"
        />
      </label>
      <label className="mt-2 text-sm font-normal">
        <h1 className="ml-4">Duration</h1>
        <input
          type="number"
          required
          value={userInput.duration}
          name="annualInvestment"
          onChange={(event) => onChange("duration", event.target.value)}
          className="hover:ring-2  mt-2 mx-4 bg-transparent border rounded-lg px-2 h-10  w-40"
        />
      </label>
    </div>
  );
}

export default Field;
