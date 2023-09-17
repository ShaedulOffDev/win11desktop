import { useState, useEffect } from "react";
import { Network, Sun, Volume } from "../assets";
import {Icons} from "../constants";
import Icon from "./Icon";

const Taskbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [leave, setLeave] = useState(true);
  let date = new Date();
  useEffect(() => {
    if (isOpen && leave) {
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  }, [isOpen, leave]);
  const GetMonth = (month: number): string => {
    switch(month){
      case 0:
        return 'Jan'
        break
      case 1:
        return 'Feb'
        break
      case 2:
        return 'March'
        break
      case 3:
        return 'Apr'
        break
      case 4:
        return 'May'
        break
      case 5:
        return 'Jun'
        break
      case 6:
        return 'Jul'
        break
      case 7:
        return 'Aug'
        break
      case 8:
        return 'Sep'
        break
      case 9:
        return 'Oct'
        break
      case 10:
        return 'Nov'
        break
      case 11:
        return 'Dec'
        break
      default:
        return 'NaN'
    }
  }
  return (
    <div
      onMouseMove={() => setIsOpen(true)}
      onMouseEnter={() => setLeave(false)}
      onMouseLeave={() => setLeave(true)}
      className={`absolute ${
        isOpen ? "bottom-[0]" : "bottom-[-49.99px]"
      } flex justify-between items-center border-t px-5 border-[#325585] w-full h-[50px]`}
      style={{
        transition: ".3s linear",
        backdropFilter: "blur(30px)",
        background: "rgba(10, 67, 158,0.8)",
      }}
    >
      <div className="flex items-center">
        <img src={Sun} width={20} alt="Sun" className="me-2" />
        <div className="text-white leading-3 flex flex-col text-[12px]">
          <span className="mb-[3px]">27°C</span>
          <span>Sunday</span>
        </div>
      </div>
      <div className="flex items-center gap-x-6">
        {Icons.map((e) => {
          if (e.type == "taskbar") {
            return (
              <Icon key={e.name} name={e.name} type={e.type} src={e.src} />
            );
          }
        })}
      </div>
      <div className="flex items-center gap-x-6 text-white font-normal text-[11.5px]">
        <i className="fa fa-chevron-up"></i>
        <span>ENG</span>
        <div className="flex gap-x-2">
          <img src={Network} alt="Network" />
          <img src={Volume} alt="Volume" />
        </div>
        <div className="flex flex-col items-end">
          <span>
            {date.getHours()}:
            {date.getMinutes() < 10
              ? `0${date.getMinutes()}`
              : date.getMinutes()}{" "}
            {date.getHours() > 11 ? "PM" : "AM"}
          </span>
          <span>
            {date.getDate()}
            -
            {GetMonth(date.getMonth())}
            -
            {date.getFullYear() - 2000}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
