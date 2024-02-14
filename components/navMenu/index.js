'use client';

import { useEffect, useState } from 'react';
import styles from './NavMenu.module.css';
import _ from 'lodash';

const NavMenu = ({
  data,
  setOpenDropdown,
  openDropdown,
  submenuDisplay,
  setSubmenuDisplay,
}) => {
  // managing the sub menu contents
  const [dropdownContent, setDropdownContent] = useState('');
  const [submenu, setSubmenu] = useState([]);

  // find correct menu obj by the hovered nav menu title!
  // -> not to display every single submenus
  const dropdownObj = _.find(data, { title: dropdownContent }) ?? [];

  // extract only 'Menu' of the correspond obj
  const menu = _.get(dropdownObj, 'menu') ?? [];

  const handleMouseEnter = (menu) => {
    setOpenDropdown(true);
    // save hovered menu's submenus in the state
    setSubmenu(menu);
    setSubmenuDisplay(true);
  };

  console.log(submenuDisplay);

  const list = data.map((list) => {
    const { id, title } = list;

    return (
      <div key={id} className={styles.linkWrap}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a
              href="/"
              className={styles.navMenu}
              // onMouseLeave logic in 'NavMenu' component
              onMouseEnter={() => handleMouseEnter(menu)}
            >
              <span onMouseEnter={() => setDropdownContent(title)}>
                {title}
              </span>
            </a>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      {list}
      {/* submenu */}
      <div
        className={`${styles.submenuWrap} ${
          openDropdown ? styles.submenu : styles.hidden
        }`}
      >
        {submenu.map((el, index) => (
          <div
            key={index}
            className={`${
              submenuDisplay ? styles.submenuItems : styles.submenuItemsHidden
            }`}
          >
            <p className={styles.submenuTitle}>{Object.keys(el)}</p>
            <ul className={styles.submenuItemWrap}>
              {Object.values(el)[0].map((item, idx) => (
                <li className={styles.submenuItem} key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
