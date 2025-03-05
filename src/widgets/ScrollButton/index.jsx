import styles from './style.module.css'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/shared/ui'

export const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false)
  const scrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY
      setShowButton(scrollRef.current > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const onClick = () => window.scrollTo({ top: 0  })

  if(!showButton) return null

  return (
    <Button className={styles.toTop} text="⬆" onClick={onClick} />
  )
}
