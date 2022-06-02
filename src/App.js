import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRouter } from "~/routes";
import { DefaultLayout } from "~/components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
