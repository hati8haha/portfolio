'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ImageComponentProps {
  images: string[]
  interval: number
  initialX?: number
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  images,
  interval,
  initialX = 0
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => {
      clearInterval(intervalId)
    }
  }, [images, interval])

  return (
    <div className='h-full w-full relative'>
      {images.map((imageUrl, index) => (
        <motion.img
          key={index}
          src={imageUrl}
          alt={`Image ${index}`}
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0,  x: index === currentImageIndex ? 0 : initialX }}
          initial={{ opacity: 0, x: initialX }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  )
}

export default ImageComponent
