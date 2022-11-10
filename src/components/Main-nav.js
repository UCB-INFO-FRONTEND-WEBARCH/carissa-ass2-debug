import { FaSearch } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

const Main = () => {
    return(
        <div id="grid" className="main-nav">
        <header> 
            <div className="menu-icon">
                <div className="hamburger" id="ham1"></div>
                <div className="hamburger" id="ham2"></div>
                <div className="hamburger" id="ham3"></div> 
            </div>
            <div className="quick-find"> 
                <input type="text" placeholder= "Quick Find"/> 
                <button type="icon" className="search"><FaSearch/></button>
            </div>
            <div className="checked">
                <BsCheck2Circle/>
                <p className="checkoff"> 30/5</p>
            </div>
        </header>
    </div>
    )
}

export default Main 