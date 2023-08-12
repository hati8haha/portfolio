import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@motionone/utils'

interface CarouselProps {
  images: string[]
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 560 : -560,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 560 : -560,
      opacity: 0
    }
  }
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <AnimatePresence initial={false} custom={direction} >
        <motion.img
          key={page}
          className='absolute h-full w-full object-cover object-center'
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        />
      </AnimatePresence>
      <div className='dark:bg-bunker-800 dark:bg-opacity-25 dark:backdropbackdrop-blur rounded-full  top-[calc(50%_-_20px)] absolute w-10 h-10 flex justify-center items-center select-none cursor-pointer font-[bold] text-lg z-[2]  right-2.5' onClick={() => paginate(1)}>
        {'‣'}
      </div>
      <div className='dark:bg-bunker-800 dark:bg-opacity-25 dark:backdropbackdrop-blur rounded-full  top-[calc(50%_-_20px)] absolute w-10 h-10 flex justify-center items-center select-none cursor-pointer font-[bold] text-lg z-[2]   -scale-100 left-2.5' onClick={() => paginate(-1)}>
        {'‣'}
      </div>
    </>
  )
}

export default Carousel
