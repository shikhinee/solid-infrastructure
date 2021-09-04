//Next, React (core node_modules) imports must be placed here
import { useState } from "react";

import { motion } from "framer-motion";

import styled, { css } from "styled-components";

import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";

//Styles must be imported here
import styles from "./NestedList.module.scss";

const StyledArrow = styled(DownArrow)`
  color: inherit;
  height: 15px;
  position: absolute;
  right: 1em;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);

  transition: transform 0.2s, opacity 0.5s 0.2s;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateY(-50%) rotate(0deg);
    `}
`;

const NestedList = ({ children, head, icon, variants, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.container} noselect`}>
      <li onClick={handleOpen} className={styles.head}>
        {icon}
        <motion.span variants={variants}>
          <StyledArrow isOpen={isOpen} />
          {head}
        </motion.span>
      </li>
      <motion.ul
        initial={{
          height: 0,
        }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.ul>
    </div>
  );
};

export default NestedList;
