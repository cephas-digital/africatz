import "./App.css";
import Page from "./";
import { RiseLoader } from "react-spinners";
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  const pageLoader = () => {
    return new Promise(() => {
      setTimeout(() => {
        setLoading(true);
      }, 2000);
    });
  };
  useEffect(() => {
    pageLoader();
  }, []);
  return (
    <div className="App overflow-x-hidden">
      {!loading ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 ">
          {" "}
          <RiseLoader color="#000000" />{" "}
        </div>
      ) : (
        <Page />
      )}
    </div>
  );
}

export default App;
