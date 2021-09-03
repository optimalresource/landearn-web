import React from 'react';

const MenuList = ({ menus }) => {
    return (
      <div className="menu-list">
        <div className="caption axiforma-bold-black-14px">{menus.title}</div>
        <div className="frame-35">
          {menus.menuLinks.map((menu, index) => {
            return (
              <div
                className="menu-links axiforma-medium-black-12px"
                key={index}
              >
                <a href={menu.url}>{menu.linkText}</a>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default MenuList;