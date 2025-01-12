import { useState } from 'react'

export const useMenuBtn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleBtn = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, toggleBtn }
}
