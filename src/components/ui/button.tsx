import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl",
        outline: "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-lg hover:shadow-xl",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg hover:shadow-xl",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        game: "bg-gradient-to-r from-game-orange to-game-yellow text-black font-black text-lg shadow-lg hover:shadow-2xl border-4 border-game-orange-dark hover:from-game-yellow hover:to-game-orange",
        "game-blue": "bg-gradient-to-r from-game-blue to-secondary text-black font-black text-lg shadow-lg hover:shadow-2xl border-4 border-blue-600 hover:from-secondary hover:to-game-blue",
        "game-red": "bg-gradient-to-r from-game-red to-red-500 text-foreground font-black text-lg shadow-lg hover:shadow-2xl border-4 border-red-700 hover:from-red-500 hover:to-game-red",
        "game-purple": "bg-gradient-to-r from-game-purple to-purple-500 text-foreground font-black text-lg shadow-lg hover:shadow-2xl border-4 border-purple-700 hover:from-purple-500 hover:to-game-purple",
        "game-green": "bg-gradient-to-r from-game-green to-green-500 text-foreground font-black text-lg shadow-lg hover:shadow-2xl border-4 border-green-700 hover:from-green-500 hover:to-game-green",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-16 rounded-lg px-10 text-xl",
        xl: "h-20 rounded-xl px-12 text-2xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
