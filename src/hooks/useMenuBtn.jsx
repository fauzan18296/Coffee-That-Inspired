import { useState, useCallback } from 'react'

export const useMenuBtn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleBtn = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const handleOutAreaNav = (event) => {
    if (!event.target.closest('#hamburger-menu') && !event.target.closest('#menuNav')) {
      setIsOpen(false)
    }
  }

  return { isOpen, toggleBtn, handleOutAreaNav }
}
