import React from "react"

export default function TodaysCard({children}: {children:React.ReactNode}) {
  return (
    <div className="w-[25%] flex flex-col items-start justify-center p-5 rounded-2xl h-30 bg-gray-800">{children}</div>
  )
}
