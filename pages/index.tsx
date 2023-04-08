import Head from 'next/head'
import ImageSet from "../components/ImageSet";
import { prompts } from "../prompts.config";

export default function Index() {
    return (
        <div>
            <Head>
                <title>Prompt Gallery</title>
                <meta name="description" content="A comparitive gallery for images from DALL·E2, Stable Diffusion, and Midjourney." />
                <meta property="og:title" content="Prompt Gallery" />
                <meta property="og:description" content="A comparitive gallery for images from DALL·E2, Stable Diffusion, and Midjourney." />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
            </Head>
        <div className="pb-8">
            <div className="mx-auto max-w-7xl px-6">
                <h1 className="text-3xl font-bold text-white ">Prompt Gallery</h1>
                <h2 className="text-white font-semibold pt-4">
                    A collection of prompts and associated images from DALL·E2, Stable
                    Diffusion, and Midjourney.
                </h2>
                {Object.keys(prompts).map((id) => {
                    const prompt = prompts[id];
                    return (
                        <ImageSet
                            key={id}
                            image={id}
                            prompt={prompt.prompt}
                            author={prompt.authorName}
                            link={prompt.authorLink}
                        />
                    );
                })}
            </div>
        </div>
        </div>
    );
}
