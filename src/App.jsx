import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";

import "./styles/App.css";

const App = () => {
  return (
    <div>
      <Layout>
        <Home></Home>
      </Layout>
    </div>
  );
};

export default App;
