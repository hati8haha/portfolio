'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Carousel from '../motion/Carousel'
interface FloatingImagesProps {
  images: string[]
}

const FloatingImages = ({ images }: FloatingImagesProps) => {
  return (
    <div className='h-full w-full relative flex flex-col gap-2'>
      <Carousel images={images} autoPlay={true} draggable={true} autoPlayInterval={1000} imgClassName=' object-contain object-center' />
      {/* {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ y: index * 30, zIndex: index, opacity: 0 }}
          animate={{
            y: index * 30 + 220,
            zIndex: images.length - index,
            opacity: 1
          }}
          exit={{
            y: index * 30 + 220,
            zIndex: images.length - index,
            opacity: 1
          }}
          
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 3,
            delay: index,
            // type: 'just',
            // ease: 'easeInOut'
          }}
          className='absolute'
        >
          <Image
            src={image}
            alt={image}
            width={500}
            height={500}
            className={`transition-all rounded-lg shadow hover:shadow-lg  object-contain`}
          />
        </motion.div>
      ))} */}
    </div>
  )
}

export default FloatingImages
