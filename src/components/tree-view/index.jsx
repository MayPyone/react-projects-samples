import MenuList from "./menu-list";
import './style.css'

export default function TreeView({ menu = [] }) {
  console.log(menu);
  return (
    <div className="tree-view-container">
      <MenuList list={menu} />
    </div>
  );
}