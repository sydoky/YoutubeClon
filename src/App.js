import logo from "./logo.svg";
import "./App.css";
import { GoThreeBars } from "react-icons/go";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline, IoIosArrowUp } from "react-icons/io";
import { GrApps } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { RiMicFill } from "react-icons/ri";
import SideNav from "./component/SideNav";
import Categories from "./component/Categories";
import { FaAllergies } from "react-icons/fa";
import VideoCard from "./component/VideoCard";
import { useState } from "react";

let initialLinks = [];

function App() {
  const [show, setShow] = useState(true);
  const [links, setLinks] = useState([
    {
      id: 1,
      label: "All",
      href: "/",
      active: true,
    },
    {
      id: 2,
      label: "Sales",
      href: "/",
      active: false,
    },
    {
      id: 3,
      label: "Humans",
      href: "/",
      active: false,
    },
    {
      id: 4,
      label: "History",
      href: "/",
      active: false,
    },
    {
      id: 5,
      label: "Comedy",
      href: "/",
      active: false,
    },
  ]);
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.5rem 1.8rem",
        }}
      >
        <div>
          <button
            onClick={() => setShow(!show)}
            style={{
              fontSize: "1.3rem",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {" "}
            <GoThreeBars />
          </button>
          <img src="/youtube.jpg" style={{ height: "20px", width: "90px" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ height: "2.6rem" }}>
            <input
              type="text"
              style={{
                width: "560px",
                maxWidth: "100%",
                padding: "0.7rem",
                height: "100%",
              }}
            />
            <button
              style={{
                height: "100%",
                padding: "0.5rem 1.3rem",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
                border: "1px solid #aaa",
                borderLeft: "none",
              }}
            >
              <GoSearch />
            </button>
          </div>
          <button
            style={{
              fontSize: "1.2rem",
              backgroundColor: "transparent",
              border: "none",
              marginLeft: "0.7rem",
            }}
          >
            <RiMicFill />
          </button>
        </div>
        <div className="right-icons">
          <button>
            <RiVideoAddLine />
          </button>
          <button>
            <GrApps />
          </button>
          <button>
            <IoMdNotificationsOutline />
          </button>
        </div>
      </header>
      <div style={{ display: "flex" }}>
        <SideNav show={show} />
        <div
          style={{ height: "100vh", width: "100%", backgroundColor: "#F9F9F9" }}
        >
          <Categories
            links={links}
            switch={(id) => {
              
              let linkList = links.map((sLink) => {
                if (sLink.id == id) {
                  sLink.active = true;
                } else {
                  sLink.active = false;
                }
                return sLink;
              });
              console.log(linkList)
              // link.active = true;
              let linkG = linkList.find(link => link.id==id);
              let index = linkList.indexOf(linkG);
              // linkList.splice(index, 1, linkG);
              setLinks([...linkList]);
            }}
          />
          <div className="video-list">
            <div style={{ width: "25%" }}>
              <VideoCard />
            </div>
            <div style={{ width: "25%" }}>
              <VideoCard />
            </div>
            <div style={{ width: "25%" }}>
              <VideoCard />
            </div>
            <div style={{ width: "25%" }}>
              <VideoCard />
            </div>
            <div style={{ width: "25%" }}>
              <VideoCard />
            </div>
            <div style={{ width: "25%" }}>
              <VideoCard />
            </div>
            <div style={{ width: "25%" }}>
              <VideoCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
