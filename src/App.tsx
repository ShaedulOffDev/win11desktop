import Icon from "./components/Icon";
import Taskbar from "./components/Taskbar";
import {Icons} from "./constants";
import {IconI} from "./interfaces/Interface";
import ContextMenu from "./components/ContextMenu";

const App = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div
          className="flex flex-wrap w-[148px] flex-col"
          style={{ height: `${window.innerHeight - 50}px` }}
        >
          {Icons.map((e: IconI) => {
            if (e.type == "left") {
              return (
                <Icon key={e.name} name={e.name} type={e.type} src={e.src} />
              );
            }
          })}
        </div>
        <div
          className="flex flex-wrap w-[100px] flex-col items-end"
          style={{ height: `${window.innerHeight - 50}px` }}
        >
          {Icons.map((e: IconI) => {
            if (e.type == "right") {
              return (
                <Icon key={e.name} name={e.name} type={e.type} src={e.src} />
              );
            }
          })}
        </div>
      </div>
      <Taskbar />
      <ContextMenu />
    </div>
  );
};

export default App;
