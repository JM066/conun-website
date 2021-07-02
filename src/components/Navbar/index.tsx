import React from "react";

import Link from "next/link";

import styles from "./Navbar.module.scss";

const PAGES = [
  {
    id: "whitepaper",
    label: "Whitepaper",
    path: "/whitepaper",
  },
  {
    id: "news",
    label: "News",
    path: "/news",
  },
  {
    id: "team",
    label: "Team",
    path: "/team",
  },
  {
    id: "github",
    label: "Github",
    path: "https://github.com/CONUN-Global/",
    isExternal: true,
  },
  {
    id: "roadmap",
    label: "Roadmap",
    path: "/roadmap",
  },
];

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <span>Conun Logo</span>
      <div className={styles.Pages}>
        {PAGES.map((page) => {
          if (page?.isExternal) {
            return (
              <a
                key={page.id}
                href={page.path}
                className={styles.Page}
                target="_blank"
                rel="noreferrer"
              >
                {page.label}
              </a>
            );
          }

          return (
            <Link key={page.id} href={page.path}>
              <a className={styles.Page}>{page.label}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
