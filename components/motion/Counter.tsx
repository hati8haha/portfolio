'use client'
import { motion, useMotionValue, useTransform, animate, ForwardRefComponent, HTMLMotionProps, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface CounterProps extends  HTMLMotionProps<'p'> {
  from: number
  to: number
  duration: number
  inViewShow?: boolean
}

const Counter = ({ from, to, duration,inViewShow = false, ...props }: CounterProps) => {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, to, { duration: duration })
    return controls.stop
  }, [isInView])

  return <motion.p {...props} ref={ref} >{rounded}</motion.p>
}

export default Counter
