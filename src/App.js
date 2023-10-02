import "./App.css";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loading, Menu } from "./components";
import routes from "./routes";
import { initializeApp } from "firebase/app";

const routesWithoutMenu = ["/login", "/register"];
const loggoutRoutes = ["/login", "/register", "/recovery-password"];

const firebaseConfig = {
  apiKey: "AIzaSyDvw-P7VWGpoREszKba6nvFVy55r5EoHQ0",
  authDomain: "pos-react-eddf0.firebaseapp.com",
  projectId: "pos-react-eddf0",
  storageBucket: "pos-react-eddf0.appspot.com",
  messagingSenderId: "714549031849",
  appId: "1:714549031849:web:e26c56833ecdff1a3c4ab8",
  measurementId: "G-3BZKY1B9TR",
};

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const firebaseApp = initializeApp(firebaseConfig);

  useEffect(() => {
    setInterval(() => {}, 1000 * 60 * 5);
  }, []);

  useEffect(() => {}, [currentPath]);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route, idx) => (
            <Route
              key={`${idx}_rotas`}
              exact
              path={route.path}
              element={
                <route.element
                  firebaseApp={firebaseApp}
                  loggoutRoutes={loggoutRoutes}
                  setCurrentPath={setCurrentPath}
                />
              }
            />
          ))}
        </Routes>
      </Suspense>
      <br></br>
      {!routesWithoutMenu.includes(currentPath) ? (
        <Menu routes={routes} currentPath={currentPath} />
      ) : null}
    </Router>
  );
}

export default App;
