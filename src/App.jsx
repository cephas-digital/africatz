import "./App.css";
import Page from "./";
import { RiseLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SiteMap from "./sitemap";
import Header from "./header";

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
        <Routes>
            <Route path="/*" element={<SiteMap />} />
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Page />} />
            {/* <Route path="/map" element={<SiteMap />} exact /> */}
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
