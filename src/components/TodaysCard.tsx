import React from "react"

export default function TodaysCard({children}: {children:React.ReactNode}) {
  return (
    <div className="
w-full
h-[110px]
flex
flex-col
justify-center
gap-3
p-6
rounded-2xl
bg-[#24243D]
">{children}</div>
  )
}
