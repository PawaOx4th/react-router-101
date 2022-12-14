import React, { memo } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import WrapperReactQuery from "../context/WrapperReactQuery"

type Props = {}

function Root({}: Props) {
  return (
    <WrapperReactQuery>
      <div className="w-full min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </WrapperReactQuery>
  )
}

export default memo(Root)
