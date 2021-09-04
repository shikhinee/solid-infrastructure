//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import * as _ from "lodash";

//Styles must be imported here
import styles from "./Menu.module.scss";

// Components must be imported here
import NestedList from "@/components/NestedList";

const Menu = ({ routes, variants, ...props }) => {
  const router = useRouter();
  const [activeObject, setActiveObject] = useState({});

  useEffect(() => {
    _.forOwn(routes, (value, key) => {
      if (router.pathname == value.route) {
        setActiveObject(value);
      } else {
        _.forOwn(value.subRoutes, (difVal, difKey) => {
          if (router.pathname == difVal.route) {
            setActiveObject(difVal);
          }
        });
      }
    });
  }, [router.pathname]);

  return (
    <nav className={styles.container}>
      <ul>
        {Object.entries(routes).map((list, index) => {
          if (list[1].hasOwnProperty("subRoutes")) {
            return (
              <NestedList
                variants={variants}
                head={list[1].title}
                icon={list[1].icon}
                key={index}
              >
                {list[1].subRoutes.map((item, index) => {
                  return (
                    <motion.li
                      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                      whileHover={{ backgroundColor: item == activeObject ? "#d2d3d3" : "rgba(0, 0, 0, 0)" }}
                      animate={{
                        backgroundColor:
                          item == activeObject ? "#03c4a1" : "rgba(0, 0, 0, 0)",
                      }}
                      key={index}
                    >
                      <Link href={item.route}>
                        <a>
                          {item.icon}
                          <motion.span variants={variants}>
                            {item.title}
                          </motion.span>
                        </a>
                      </Link>
                    </motion.li>
                  );
                })}
              </NestedList>
            );
          } else {
            return (
              <motion.li
                key={index}
                initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                whileHover={{ backgroundColor: list[1] == activeObject ? "#d2d3d3" : "rgba(0, 0, 0, 0)" }}
                animate={{
                  backgroundColor:
                    list[1] == activeObject ? "#03c4a1" : "rgba(0, 0, 0, 0)",
                }}
              >
                <Link href={list[1].route}>
                  <a>
                    {list[1].icon}
                    <motion.span variants={variants}>
                      {list[1].title}
                    </motion.span>
                  </a>
                </Link>
              </motion.li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Menu;
