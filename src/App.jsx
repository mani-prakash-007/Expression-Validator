import { Comparator } from "./components/container/Comparator";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <h1 className="font-bold text-2xl ml-7 mt-10">
            Expression Evaluator
          </h1>
          <div className=" flex justify-center border border-black w-80 min-h-96 mt-10 pt-5 rounded-lg bg-black shadow-inherit ">
            <div>
              <Comparator />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
