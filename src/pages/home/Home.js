import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Story from "../../components/Story/Story";

export default function Home() {
    
    return(
        <>
<div className="home-container">
<Navbar/>
    <div className="home-wrapper">
        
        
    <div className="sidebar-home">
    <Sidebar/>
    </div>
        <div className="home">
        
        <Story  />
        <Feed />
        </div>
    </div>
</div>
        
                </>

    )
};
