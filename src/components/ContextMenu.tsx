import { useState } from "react";
import { contextMenuItems } from "../constants"
import ContextMenuItem from "./ContextMenuItem"

const ContextMenu = () => {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})
  window.addEventListener("contextmenu", (e: any) => {
    e.preventDefault();
    setOpen(true)
    setPosition({x: e.clientX, y: e.clientY})
  });
  window.addEventListener("click", (e: any) => {
    console.log(e.target);
    
  });
  return (
    <div className={`w-[250px] bg-[#D4E2ED] absolute px-1 py-2 rounded-[10px] ${!open && 'hidden'}`} style={{top: position.y, left: position.x}}>
      {contextMenuItems.map(e=>(
        <ContextMenuItem key={e.name} name={e.name} type={e.type} src={e.src} payload={e.payload}/>    
      ))}
    </div>
  )
}

export default ContextMenu
