/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/line-clamp'),
    ],
  }
  ```
*/
import Image from 'next/image'

interface ImageSetProps {
    image: string;
    author: string;
    link: string;
}

export default function ImageSet({image, author, link}: ImageSetProps) {
    
    const dalle_fp = `/images/dalle/${image}.png`;
    const stable_fp = `/images/stable/${image}.png`;
    const midjourney_fp = `/images/midjourney/${image}.png`;
    const filepaths = [dalle_fp, stable_fp, midjourney_fp];

    return (
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {filepaths.map((fp) => (
                        <article key={fp} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <Image
                                    src={fp}
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="sha-lg"
                                />
                                
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        
    )
}
