import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hotel from "./pages/hotels/Hotel";
import Blog from "./pages/blog/Blog";
import Logins from "./pages/logins/Logins";
import Register from "./pages/register/Register";
import Register1 from "./pages/register/Register1";
import Register2 from "./pages/register/Register2";
import Register3 from "./pages/register/Register3";
import HomeUser from "./pages/home/HomeUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeuser" element={<HomeUser/>}/>
          <Route path="/hotels" element={<Hotel/>} />
          <Route path="/logins" element={<Logins/>} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/register1" element={<Register1/>}/>
          <Route path="/register2" element={<Register2/>}/>
          <Route path="/register3" element={<Register3/>}/>     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
