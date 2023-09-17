import {IconI} from "../interfaces/Interface";

const Icon: React.FC<IconI> = ({ name, src, type }) => {
  const nameArr = name.split(" ");
  let truncatedName = "";

  if (nameArr.length > 1) {
    let nm: string[] = [];
    nameArr.map((e) => {
      if (e.length > 11) {
        nm.push(e.slice(0, 10) + "...");
      } else {
        nm.push(e);
      }
    });
    truncatedName = nm.join(" ");
  } else {
    if (name.length > 11) {
      truncatedName = name.slice(0, 10) + "...";
    } else {
      truncatedName = name;
    }
  }
  return (
    <div
      className={`w-[74px] text-white flex flex-col cursor-pointer ${
        type !== "taskbar" && "pt-2"
      } items-center`}
      style={
        type == "taskbar"
          ? { height: "auto", width: "auto" }
          : { height: `${(window.innerHeight - 50) / 11}px` }
      }
    >
      <div className="relative">
        <img
          className='object-contain w-[25px]'
          src={src}
          alt={name}
          style={{ width: type == "taskbar" ? 25 : 44 }}
        />
        {(name == "Chrome" || name == "VS code") && (
          <span className="w-[6px] h-[3px] bg-[#99AECC] flex rounded-2xl absolute start-[50%] translate-x-[-50%] top-[115%]"></span>
        )}
      </div>
      {type !== "taskbar" && (
        <p
          className="text-[12px] text-center leading-3 mt-2"
          style={{
            filter: "drop-shadow(0 1.5px 2px #000)",
            textShadow: "0 1px 2px #000, 0 -1px 2px #000",
          }}
        >
          {truncatedName}
        </p>
      )}
    </div>
  );
};

export default Icon;
