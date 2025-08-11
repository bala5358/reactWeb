import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const DropdownCommon = ({ dropdownMain, icon = true, iconName, btn, options, onSelect }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]); // Show first as default
  const toggle = () => setDropdownOpen((prev) => !prev);

  const handleSelect = (item) => {
    setSelected(item);
    onSelect && onSelect(item); // Call parent
    setDropdownOpen(false);
  };

  return (
    <Dropdown {...dropdownMain} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle {...btn}>
        {icon && <i className={iconName}></i>}
        {!icon && selected}
      </DropdownToggle>
      <DropdownMenu>
        {options.map((item, i) => (
          <DropdownItem key={i} onClick={() => handleSelect(item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownCommon;
