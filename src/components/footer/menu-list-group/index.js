import React from 'react';
import MenuList from './menu-list'

const MenuListGroup = ({ menu1, menu2, menu3, needSpace }) => {
  let space = "";
  if(needSpace){
    space = <div className="take-space"></div>
  }
  return (
    <div className="menu-list-group">
        <MenuList menus={menu1} />
        { menu2 ? <MenuList menus={menu2} /> : "" }
        { menu3 ? <MenuList menus={menu3} /> : space }
    </div>
  );
};

export default MenuListGroup;