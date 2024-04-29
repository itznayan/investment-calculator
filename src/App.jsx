import Field from "./components/Field";
import Header from "./components/Header";
import { useState } from "react";
import Result from "./components/Result";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <div className="h-full w-full bg-gray-950">
        <Header />
        <div className="container-details flex justify-center mb-10 ">
          <div className="px-10 text-xl font-bold  text-white p-2 bg-gradient-to-b from-emerald-600 to-green-950 h-full pb-4 shadow-sm shadow-emerald-900 w-[35%] max-sm:w-[90%] max-md:w-[65%] max-lg:w-[50%] rounded-sm">
            <Field userInput={userInput} onChange={handleChange} />
          </div>
        </div>
        <div className="container-details flex justify-center mb-10 ">
          {!inputIsValid && (
            <p className="text-center text-white">
              {" "}
              Please Enter Duration Greater Than Zero
            </p>
          )}
          {inputIsValid && <Result input={userInput} />}
        </div>
        this is created by nayn
      </div>
    </>
  );
}

export default App;
