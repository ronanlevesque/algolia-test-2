import React from 'react';
import './ThemeSwitcher.css';

const dropDownItems = ['default', 'classy', 'ugly'];

const getDropdownItems = (items, theme, onDropdownItemClick)  =>
  items.map( item =>
    <li key={item} className="ThemeSwitcher-dropdownItem">
      <button className="ThemeSwitcher-dropdownItemBtn" onClick={() => onDropdownItemClick(item)}>
        {item === theme
          ? <strong>{item}</strong>
          : item
        }
      </button>
    </li>
  );

const ThemeSwitcher = ({ dropDownIsOpen, theme, onToggleClick, onDropdownItemClick }) =>
  <div className="ThemeSwitcher">
    <button className="ThemeSwitcher-btn" onClick={onToggleClick}>Change theme</button>
    <ul className={`ThemeSwitcher-dropdown ${dropDownIsOpen ? 'is-open' : ''}`}>
      {getDropdownItems(dropDownItems, theme, onDropdownItemClick)}
    </ul>
  </div>;

export default ThemeSwitcher;
