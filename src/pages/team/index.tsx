import React, { ComponentProps, memo } from "react"
import { Link, NavLink, NavLinkProps, Outlet } from "react-router-dom"

function Team({}) {
  return (
    <div>
      <ul className="container flex-wrap flex-row relative">
        <li className="basis-full">
          <NavLink
            to={"/team/a"}
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white"
            }>
            Go to team A
          </NavLink>
        </li>
        <li className="basis-full">
          <NavLink
            to={"/team/b"}
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white"
            }>
            Go to team B
          </NavLink>
        </li>
      </ul>
      <hr />
      <div className="container text-pink-400 font-bold text-3xl p-10">
        <Outlet />
      </div>
    </div>
  )
}

export default memo(Team)
