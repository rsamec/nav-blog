
import Image from 'next/image'
import ship from '../public/big-kalkomey.jpg'

export function BackgroundWithMask() {
  return (
    <div
      className="fixed w-screen h-screen overflow-hidden -z-10 ">
      <Image
        alt="Lodě na řece"
        src={ship}
        placeholder="blur"
        quality={100}
        className='absolute'
        fill
        
        style={{
          objectFit: 'cover',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
    </div>

  )
}
export default function Background() {
  return (    
      <Image
        alt="Lodě na řece"
        src={ship}
        placeholder="blur"
        quality={100}    
        sizes="100vw"
        fill        
        style={{    
          objectFit: 'cover',
        }}
      />   
  )
}