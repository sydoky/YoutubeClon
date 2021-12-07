export default function (props) {
  return (
    <div className="category-nav">
      <ul>
        {props?.links.map((link) => (
          <li style={{cursor:"pointer"}} onClick={()=>props.switch(link.id)} className={link.active?"active":""}>
            <a
              
              // href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
