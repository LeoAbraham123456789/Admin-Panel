import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Single from "./pages/single/Single"
import List from "./pages/list/List"
import New from "./pages/new/New"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element = {<Home/>}/>
            <Route path="login" element= {<Login/>}/>
            <Route path = "users">
              <Route index element = {<List/>}/>
              <Route path =":userId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path = "products">
              <Route index element = {<List/>}/>
              <Route path =":productId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;