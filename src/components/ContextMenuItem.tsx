import { ContextMenuI } from "../interfaces/Interface";

const ContextMenuItem: React.FC<ContextMenuI>= ({name, type, src, payload}) => {
  return (
    <div className={`flex justify-between cursor-pointer items-center py-1 px-3 ${(name == 'Refresh' || name == 'New' || name == 'Personalize' || name == 'Open in Terminal') && "border-b border-[#C9D6EB] pb-2"}`} onClick={() => {
      if(name=='Refresh'){
        location.reload()
      }
    }}>
      <div className="flex items-center">
        <img src={src} alt="View Icon" className="me-3" />
        <span>{name}</span>
      </div>
      {type == 'icon' && 
      <i className={`${payload} text-[14px] text-gray-500`}></i>
    }
      {type == 'text' && 
        <p className="text-[14px] text-gray-500">{payload}</p>
      }
    </div>
  );
};

export default ContextMenuItem;
