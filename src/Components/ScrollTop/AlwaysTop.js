import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const AlwaysTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window && window.scrollTo(0, 0)
  }, [pathname])
}
export default AlwaysTop
