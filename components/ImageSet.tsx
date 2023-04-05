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
import Image from 'next/image';

interface ImageSetProps {
    image: string;
    prompt: string;
    author: string;
    link: string;
}

interface FilePaths {
    [key: string]: string;

}

export default function ImageSet({image, prompt, author, link}: ImageSetProps) {
    const dalle_fp = `/images/dalle/${image}.png`;
    const stable_fp = `/images/stable/${image}.png`;
    const midjourney_fp = `/images/midjourney/${image}.png`;
    const filepaths = { "DALLE:2": dalle_fp, "Stable Diffusion": stable_fp, "Midjourney": midjourney_fp};

    let link_icon_filepath = `/link_icons/link.svg`;
    if (link.includes("twitter")) {
        link_icon_filepath = `/link_icons/twitter.svg`;
    }
    else if (link.includes("github")) {
        link_icon_filepath = `/link_icons/github.svg`;
    }
    else if (link.includes("linkedin")) {
        link_icon_filepath = `/link_icons/linkedin.svg`;
    }
    

    return (
        <div>
                <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {Object.entries(filepaths).map(([key,value]: [string, string]) => (
                        <article key={key} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <Image
                                    src={value}
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="sha-lg"
                                />
                                
                            </div>
                        </article>
                    ))}
                </div>
                
                {/* <div className="flex justify-between py-2">
                    <div className="">
                        <p className="font-semibold text-white whitespace-wrap max-w-xs md:max-w-2xl">{prompt}</p>
                    </div>
                    <div className="">
                        <div className="flex flex-row">
                            <p className="font-semibold text-white md:pr-4 ">{author}</p>
                            <a href={link} target="_blank">
                                <Image
                                    src={link_icon_filepath}
                                    alt={link_icon_filepath}
                                    width={25}
                                    height={25}
                                />
                            </a>
                        </div>
                    </div>
                </div> */}
            <div className="flex flex-col md:flex-row justify-between py-2">
                <div className="md:max-w-2xl">
                    <p className="font-semibold text-white whitespace-wrap max-w-xs md:max-w-full">{prompt}</p>
                </div>
                <div className="flex flex-row mt-2 md:mt-0">
                    <p className="font-semibold text-white pr-4">{author}</p>
                    <a href={link} target="_blank">
                        <Image
                            src={link_icon_filepath}
                            alt={link_icon_filepath}
                            width={25}
                            height={25}
                        />
                    </a>
                </div>
            </div>

        </div>
    )
}
