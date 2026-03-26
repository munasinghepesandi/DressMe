
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import SignIn from "./Accounts/SignIn.jsx";
import SignUp from "./Accounts/SignUp.jsx";

import Contact from "./Contact.jsx";

function App() {

  return (
    <div className="App scroll-smooth">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/SignIn" element={<SignIn />}> </Route>
          <Route path="/Contact" element={<Contact />}> </Route>
          <Route path="/SignUp" element={<SignUp />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
