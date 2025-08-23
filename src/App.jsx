import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold ">Thanks For Using CJS 🚀</h1>
      <div className="w-full flex justify-center">
        <button
          onClick={() => toast.success("It works!")}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Show Toast
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
