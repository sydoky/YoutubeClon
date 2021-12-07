import { BsBroadcast } from "react-icons/bs";

export default function SideNavItem(props) {
  return (
    <li style={{ padding: "0.7rem 0" }}>
      <a
        className={!props.vertical ? "sideNav-Item" : "sideNav-Item vertical"}
        href="#"
        onClick={props.onClick}
      >
        <div>
          {props.icon}
          <span> {props.title} </span>
        </div>
        {props.live && (
          <BsBroadcast style={{ color: "red", fontSize: "0.8rem" }} />
        )}
      </a>
    </li>
  );
}
