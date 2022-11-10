import React, { useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import http from "../config/axiosGlobalConfig"

type Props = {}

function Home({}: Props) {
  const [page, setPage] = useState(1)
  const inputRef = useRef<HTMLInputElement>(null)

  const { data, isLoading } = useQuery(["todo", page], async () => {
    const respose = await http.get("/todos", {
      params: {
        _start: 0,
        _limit: 1,
        _page: page
      }
    })

    return respose
  })

  return (
    <div>
      <div>
        <input
          autoFocus
          ref={inputRef}
          disabled={isLoading}
          type="number"
          value={page}
          onChange={(e) => setPage(+e.target.value)}
        />
      </div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  )
}

export default Home
