import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

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
