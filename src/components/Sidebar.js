import { useNavigate } from "react-router-dom";
import { FaInbox } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const inboxNav = () => {
    navigate("/");
  };
  const todayNav = () => {
    navigate("/today");
  };
  const upcomingNav = () => {
    navigate("/upcoming");
  };

  return (
    <>
      <div id="grid">
        <div className="side-bar">
          <ul className="fa-ul">
            <li className="menu">
              <button onClick={inboxNav}>
                <FaInbox />
                <span className="listText">Inbox</span>
                <span className="taskCount">4</span>
              </button>
            </li>
            <li className="menu">
              <button onClick={todayNav}>
                <FaRegCalendarAlt />
                <span className="listText">Today</span>
                <span className="taskCount">5</span>
              </button>
            </li>
            <li className="menu">
              <button onClick={upcomingNav}>
                <FaRegStar />
                <span className="listText">Upcoming</span>
                <span className="taskCount">3</span>
              </button>
            </li>
            <li className="menu" id="project">
              <button>
                <FaAngleDown />
                <span className="listText">Projects</span>
              </button>
            </li>
            <ul className="projects">
              <button type="button" className="collapsible" id="button1">
                <li className="classNamees">
                  <FaChevronRight />
                  <span className="listText"></span>
                  <FaRegCircle />
                  <span className="listText"></span>INFO 153A
                  <span className="taskCount">3</span>
                </li>
              </button>
              <ul className="to-do-list">
                <li className="to-do">
                  <FaRegCircle />
                  <span className="listText">Labs</span>
                  <span className="taskCount">4</span>
                </li>
                <li className="to-do">
                  <FaRegCircle />
                  <span className="listText">Assignments</span>
                  <span className="taskCount">1</span>
                </li>
                <li className="to-do">
                  <FaRegCircle />
                  <span className="listText">Readings</span>
                  <span className="taskCount">5</span>
                </li>
              </ul>
              <button type="button" className="collapsible" id="button2">
                <li className="classNamees">
                  <FaChevronRight />
                  <span className="listText"></span>
                  <FaRegCircle />
                  <span className="listText">ECON 162</span>
                  <span className="taskCount">7</span>
                </li>
              </button>
              <ul className="to-do-list">
                <li className="to-do">
                  <FaRegCircle />
                  <span className="listText">Lecture Slides</span>
                  <span className="taskCount">5</span>
                </li>
                <li className="to-do">
                  <FaRegCircle />
                  <span className="listText">Lecture Notes</span>
                  <span className="taskCount">5</span>
                </li>
                <li className="to-do">
                  <FaRegCircle />
                  <span className="listText">Lecture Readings</span>
                  <span className="taskCount">3</span>
                </li>
              </ul>
              <button type="button" className="collapsible" id="button3">
                <li className="classNamees">
                  <FaChevronRight />
                  <span className="listText"></span>
                  <FaRegCircle />
                  <span className="listText">ECON 184</span>
                  <span className="taskCount">10</span>
                </li>
              </button>
              <button type="button" className="collapsible" id="button4">
                <li className="classNamees">
                  <FaChevronRight />
                  <span className="listText"></span>
                  <FaRegCircle />
                  <span className="listText">EnvEcon 185</span>
                  <span className="taskCount">2</span>
                </li>
              </button>
            </ul>
            <li className="menu">
              <button>
                <FaPlus />
                <span className="listText">Add Projects</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

// Routing code//
{
  /* <Route
    exact path="/inbox"
    render={() => {
        return <Inbox title="Inbox" />;
          }}
        />

<Route
    exact path="/today"
    render={() => {
        return <Today title="Today" />;
          }}
        />

<Route
    exact path="/upcoming"
    render={() => {
        return <Inbox title="upcoming" />;
          }}
        /> */
}

// <script>

// var a = document.getElementById("button1");
// var b = document.getElementById("button2");

// a.addEventListener("click", function() {
//     var content = this.nextElementSibling;
//     if (content.style.display === "none") {
//       content.style.display = "block";
//       this.innerHTML=`<li className="classNamees"><i className="fa fa-angle-down"></i><span className="listText"></span><FaRegCircle/><span className="listText"></span>INFO 153A<span className="taskCount">3</span></li>`;
//     } else {
//       content.style.display = "none";
//       this.innerHTML=`<li className="classNamees"><FaChevronRight/><span className="listText"></span><FaRegCircle/><span className="listText"></span>INFO 153A<span className="taskCount">3</span></li>`;
//     }
//   });

// b.addEventListener("click", function() {
//     var content = this.nextElementSibling;
//     if (content.style.display === "none") {
//       content.style.display = "block";
//       this.innerHTML=`<li className="classNamees"><i className="fa fa-angle-down"></i><span className="listText"></span><FaRegCircle/><span className="listText"></span>ECON 162<span className="taskCount">7</span></li>`;
//     } else {
//       content.style.display = "none";
//       this.innerHTML=`<li className="classNamees"><FaChevronRight/><span className="listText"></span><FaRegCircle/><span className="listText"></span>ECON 162<span className="taskCount">7</span></li>`;
//     }
//   });

// </script>
