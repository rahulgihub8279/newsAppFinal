import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apikey = "cb5a4dcfac11449ab1293684ed818586";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <LoadingBar
          height={2}
          loaderSpeed={500}
          color="#f11946"
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setprogress={setProgress}
                apikey={apikey}
                key="/"
                pageSize={6}
                country="us"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setprogress={setProgress}
                apikey={apikey}
                key="/business"
                pageSize={6}
                country="us"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setprogress={setProgress}
                apikey={apikey}
                key="/entertainment"
                pageSize={6}
                country="us"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setprogress={setProgress}
                apikey={apikey}
                key="/health"
                pageSize={6}
                country="us"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setprogress={setProgress}
                apikey={apikey}
                key="/science"
                pageSize={6}
                country="us"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setprogress={setProgress}
                apikey={apikey}
                key="/sports"
                pageSize={6}
                country="us"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setprogress={setProgress}
                apikey={apikey}
                key="/technology"
                pageSize={6}
                country="us"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
