import React from "react"
import clsx from "clsx"

import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className={clsx("w-full", "h-20", "bg-slate-400", "px-5")}>
      <ul
        className={clsx(
          "flex",
          "justify-start",
          "w-full h-full",
          "items-center",
          "text-xl",
          "gap-4"
        )}>
        <li>
          <Link to={`/home`}>Home</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
        <li>
          <Link to={`/team`}>Team</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
