import Navbar from "./React-Router/Navbar";
import Routs from "./React-Router/Routs";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen justify-center items-center grid grid-cols-5">
        <Routs />
      </div>
    </>
  );
};

export default App;
