import type { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = '', type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={`liquid-glass inline-flex items-center justify-center whitespace-nowrap font-body font-medium transition-transform duration-300 ease-out hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
      {...props}
    />
  ),
)

Button.displayName = 'Button'
