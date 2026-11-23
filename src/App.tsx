import { MotionConfig } from 'framer-motion'
import Home from './pages/Home'

export default function App() {
  // Respect the visitor's "reduce motion" OS setting for all animations.
  return (
    <MotionConfig reducedMotion="user">
      <Home />
    </MotionConfig>
  )
}
