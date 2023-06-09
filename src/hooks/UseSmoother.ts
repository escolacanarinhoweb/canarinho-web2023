import { useContext } from 'react'
import { SmootherContext } from '@/contexts/SmootherContext'

export const useSmoother = () => {
  const { smoother, setSmoother } = useContext(SmootherContext)
  return { smoother, setSmoother }
}
