'use client';

import { useState } from 'react';
import styles from './NavMenu.module.css';
import _ from 'lodash';

const NavMenu = ({
  data,
  openDropdown,
  setOpenDropdown,
  submenuDisplay,
  setSubmenuDisplay,
}) => {
  // managing the sub menu contents
  // const [dropdownContent, setDropdownContent] = useState('');
  const [submenu, setSubmenu] = useState([]);

  // find submenu array by the title that user chooses
  const handleMouseEnter = (title) => {
    // find array from JSON data by title
    const dropdownObj = _.find(data, { title }) ?? [];
    // get menu array out of object to set dropdown menu
    const menu = _.get(dropdownObj, 'menu') ?? [];

    setSubmenu(menu);
    setSubmenuDisplay(true);
    setOpenDropdown(true);
  };

  // when mouse enters to blurryBg it closes nav bar
  const handleCloseNav = () => {
    setSubmenuDisplay(false);
    setOpenDropdown(false);
  };

  const list = data.map((list) => {
    const { id, title } = list;

    return (
      <div key={id} className={styles.linkContainer}>
        <div className={styles.linkWrap}>
          <a
            href="/"
            className={styles.navMenu}
            onMouseEnter={() => {
              handleMouseEnter(title);
            }}
          >
            <span>{title}</span>
          </a>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      {/* main nav menus */}
      {list}
      {/* submenu */}
      <div
        className={`${styles.submenuWrap} ${
          openDropdown ? styles.submenu : styles.hidden
        }`}
      >
        {/* dropdown menu wrap */}
        <div className={styles.contentWrap}>
          <div className={styles.submenuItemWrap}>
            {submenu.map((el, index) => (
              <div
                key={index}
                className={`${
                  submenuDisplay
                    ? styles.submenuItems
                    : styles.submenuItemsHidden
                }`}
              >
                <p className={styles.submenuTitle}>{Object.keys(el)}</p>
                <ul className={styles.submenuList}>
                  {Object.values(el)[0].map((item, idx) => (
                    <li className={styles.submenuItem} key={idx}>
                      <a href="/">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* div under dropdown menu */}
        <div className={styles.blurryBg} onMouseEnter={handleCloseNav}>
          empty div
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
