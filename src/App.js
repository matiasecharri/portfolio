import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
     <Layout />
      <Routes>     
        <Route path="/" element={<Home />}></Route>
        <Route path="/home"></Route>
      </Routes>
    </>
  );
}

export default App;
