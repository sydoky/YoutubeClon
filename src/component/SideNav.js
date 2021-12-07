import { useState } from "react";
import { AiFillHome, AiOutlineYoutube, AiOutlineBulb } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import SideNavItem from "./SideNavItem";
import { BsPlayBtn, BsFilm, BsBroadcast } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { CgPlayList } from "react-icons/cg";
import { GrGamepad } from "react-icons/gr";
import { GiHanger } from "react-icons/gi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function SideNav({ show: display }) {
  const [show, setShow] = useState(false);
  return (
    <>
      {display ? (
        <div style={{ width: "12%" }}>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <SideNavItem title="Home" icon={<AiFillHome />} />
            <SideNavItem title="Explore" icon={<FaRegCompass />} />
            <SideNavItem
              title="Subscription"
              icon={<MdOutlineSubscriptions />}
            />
            <hr
              style={{
                margin: "1rem 0",
                borderColor: "#fcfcfc",
                borderWidth: "0.5px",
              }}
            />
            <SideNavItem title="Library" icon={<MdOutlineVideoLibrary />} />
            <SideNavItem title="Your videos" icon={<BsPlayBtn />} />
            <SideNavItem title="Your movies" icon={<BsFilm />} />
            <SideNavItem title="Watch later" icon={<MdOutlineWatchLater />} />
            {show && (
              <>
                <SideNavItem title="Liked videos" icon={<BiLike />} />
                <SideNavItem title="Favorites" icon={<CgPlayList />} />
                <SideNavItem title="My vlog" icon={<CgPlayList />} />
              </>
            )}
            {show?
            <SideNavItem
              title="Show less"
              icon={<IoIosArrowUp />}
              onClick={() => setShow(!show)}
            />:
            <SideNavItem
              title="Show more"
              icon={<IoIosArrowDown />}
              onClick={() => setShow(!show)}
            />
            }
            <hr
              style={{
                margin: "1rem 0",
                borderColor: "#fcfcfc",
                borderWidth: "0.5px",
              }}
            />

            <SideNavItem
              title="euronews"
              icon={
                <img src="https://yt3.ggpht.com/yf11CBlHMr2hTqx-gUoAR_v9W0iRSK7O8PD5Wi5qKIcU7cKKF11Dhwr2KuKZ_SWRnxDVKIct=s88-c-k-c0x00ffffff-no-rj" />
              }
              live
            />
            <SideNavItem
              title="Get Movies"
              icon={
                <img src="https://yt3.ggpht.com/ytc/AKedOLRIik6Si4nFg4v_tRHddwxWwvUOpeIMtvySK32VuA=s88-c-k-c0x00ffffff-no-rj" />
              }
              live
            />
            <SideNavItem
              title="Vert Dider"
              icon={
                <img src="https://yt3.ggpht.com/ytc/AKedOLTj5aMrF1NFy3GU8k48_ooMjw3uoBkGOMyJo-OK=s88-c-k-c0x00ffffff-no-rj" />
              }
              live
            />

            <hr
              style={{
                margin: "1rem 0",
                borderColor: "#fcfcfc",
                borderWidth: "0.5px",
              }}
            />
            <SideNavItem title="YouTube Premium" icon={<AiOutlineYoutube />} />
            <SideNavItem title="Movies &amp; Shows" icon={<BsFilm />} />
            <SideNavItem title="Gaming" icon={<GrGamepad />} />
            <SideNavItem title="Live" icon={<BsBroadcast />} />
            <SideNavItem title="Fashion &amp; Beauty" icon={<GiHanger />} />
            <SideNavItem title="Learning" icon={<AiOutlineBulb />} />
          </ul>
        </div>
      ) : (
        <div style={{ width: "4%" }}>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <SideNavItem title="Home" icon={<AiFillHome />} vertical />
            <SideNavItem title="Explore" icon={<FaRegCompass />} vertical />
            <SideNavItem
              title="Subscription"
              icon={<MdOutlineSubscriptions />}
              vertical
            />
            <SideNavItem
              title="Library"
              icon={<MdOutlineVideoLibrary />}
              vertical
            />
          </ul>
        </div>
      )}
    </>
  );
}
