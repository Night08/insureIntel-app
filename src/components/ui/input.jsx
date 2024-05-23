import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md  border-[1px] border-slate-800 outline-none placeholder-slate-400 bg-background px-3 py-2 text-sm  file:bg-transparent file:text-sm file:font-medium  disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-[3px]",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
