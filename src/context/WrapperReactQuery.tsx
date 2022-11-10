import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

type WrapperReactQueryPropsType = {
  children?: React.ReactNode
}

function WrapperReactQuery({ children }: WrapperReactQueryPropsType) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default WrapperReactQuery
