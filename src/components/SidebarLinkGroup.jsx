import React, { useState, useEffect } from "react";

const SidebarLinkGroup = ({ children, activeCondition }) => {
  const [open, setOpen] = useState(activeCondition);

  useEffect(() => {
    setOpen(activeCondition);
  }, [activeCondition]);

  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
};

export default SidebarLinkGroup;
