'use client';

import { useState } from 'react';
import styles from './NavMenu.module.css';
// import SubNav from '../subNav';

const NavMenu = ({ data }) => {
  // managing the sub menu to open and close
  const [openDropdown, setOpenDropdown] = useState(false);

  // const [dropdownContent, setDropdownContent] = useState(true);

  const list = data.map((list) => {
    const { id, title, menu } = list;

    return (
      <div key={id} className={styles.linkWrap}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a
              href="/"
              className={styles.navMenu}
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <span>{title}</span>
            </a>
          </li>
          <li>
            <div
              className={` ${openDropdown ? styles.submenu : styles.hidden}`}
            >
              {/* <SubNav submenu={menu} /> */}
              <span>submenu</span>
            </div>
          </li>
        </ul>
      </div>
    );
  });
  return <div className={styles.container}>{list}</div>;
};

export default NavMenu;
