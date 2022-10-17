import { Sidebar } from "../../components/sidebar/Sidebar";
import {Navbar} from "../../components/navbar/Navbar"
import "./home.scss"
import { Widgets } from "../../components/widgets/Widgets";

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets/>
          <Widgets/>
          <Widgets/>
          <Widgets/>
          <Widgets/>
          <Widgets/>
        </div>
      </div>
    </div>
  );
}

export default Home;