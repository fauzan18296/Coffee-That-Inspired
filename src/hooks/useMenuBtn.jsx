import { useState } from 'react'

export const useMenuBtn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleBtn = () => {
    setIsOpen(!isOpen)
  }

  const handleOutAreaNav = (event) => {
    if (!event.target.closest('#hamburger-menu') && !event.target.closest('#menuNav')) {
      setIsOpen(false)
    }
  }

  return { isOpen, toggleBtn, handleOutAreaNav }
}
