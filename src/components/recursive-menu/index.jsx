import MenuList from "./menulist";

export default function TreeView({menu=[]}){
    return(
        <div>
            <MenuList list={menu}/>
        </div>
    )
}