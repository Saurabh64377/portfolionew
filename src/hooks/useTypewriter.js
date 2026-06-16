import { useState, useEffect, useRef } from 'react'

export const useTypewriter = (words = [], speed = 80, deleteSpeed = 50, pause = 2000) => {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (!words.length) return

    const currentWord = words[wordIndex % words.length]

    const tick = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1))
        if (displayText.length <= 1) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
          timeoutRef.current = setTimeout(tick, 400)
          return
        }
        timeoutRef.current = setTimeout(tick, deleteSpeed)
      } else {
        setDisplayText(currentWord.slice(0, displayText.length + 1))
        if (displayText.length === currentWord.length) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pause)
          return
        }
        timeoutRef.current = setTimeout(tick, speed)
      }
    }

    timeoutRef.current = setTimeout(tick, speed)
    return () => clearTimeout(timeoutRef.current)
  }, [displayText, isDeleting, wordIndex, words, speed, deleteSpeed, pause])

  return displayText
}
