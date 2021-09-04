//Next, React (core node_modules) imports must be placed here

import { motion } from "framer-motion";

//Styles must be imported here
import styles from "./SideNavigation.module.scss";

import Menu from "@/composites/Menu";

const SideNavigationMotion = {
  rest: {
    maxWidth: "40rem",
  },

  hover: {
    maxWidth: "40rem",
  },

  collapsed: {
    maxWidth: "15rem",
  },
};

const TextMotion = {
  rest: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },

  hover: {
    opacity: 1,
  },

  collapsed: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

const HeaderMotion = {
  rest: {
    scale: 1,
    originX: "0px",
  },

  hover: {
    scale: 1,
  },

  collapsed: {
    scale: 0.4,
  },
};

const SideNavigation = ({ isCollapsed, routes, ...props }) => {
  return (
    <motion.aside
      initial="rest"
      whileHover="hover"
      animate={isCollapsed ? "collapsed" : "rest"}
      variants={SideNavigationMotion}
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <motion.div className={styles.header} variants={HeaderMotion}>
            <h1 >
              <span>Solid</span>
              <span>Infrastructure</span>
            </h1>
            <h2>{props.role}</h2>
          </motion.div>

          <Menu
            variants={TextMotion}
            isCollapsed={isCollapsed}
            routes={routes}
          />
        </div>
      </div>
    </motion.aside>
  );
};

export default SideNavigation;
