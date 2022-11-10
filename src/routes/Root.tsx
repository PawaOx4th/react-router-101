import React, { memo } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

type Props = {}

function Root({}: Props) {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default memo(Root)
