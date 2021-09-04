//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import * as _ from "lodash";

//Styles must be imported here
import styles from "./Header.module.scss";

// Components must be imported here

const Header = ({
  isCollapsed,
  children,
  handleCollapse,
  routes,
  ...props
}) => {
  const router = useRouter();

  const [header, setHeader] = useState({
    title: "",
    subTitle: "",
  });

  useEffect(() => {
    _.forOwn(routes, (value, key) => {
      if (router.pathname == value.route) {
        setHeader({
          title: value.title,
        });
      } else {
        _.forOwn(value.subRoutes, (difVal, difKey) => {
          if (router.pathname == difVal.route) {
            setHeader({
              title: value.title,
              subTitle: difVal.title,
            });
          }
        });
      }
    });
  }, [router.pathname]);

  return (
    <header className={styles.container}>
      <button onClick={handleCollapse} className={styles.collapseBtn}>
        {(isCollapsed && "Open Nav") || "Close Nav"}
      </button>
      <div>
        <h1>{header.title}</h1>
        <h2>{header.subTitle}</h2>
      </div>
    </header>
  );
};

export default Header;
