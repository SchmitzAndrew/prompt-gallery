import Head from 'next/head';
export default function Contribute() {
    return (
        <div>
            <Head>
                <title>Contribute</title>
                <meta name="description" content="Information about how you can contribute to Prompt Gallery." />
                <meta property="og:title" content="Prompt Gallery" />
                <meta property="og:description" content="Information about how you can contribute to Prompt Gallery." />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="pb-8">
                <div className="mx-auto max-w-7xl px-6">
                    <h1 className="text-3xl font-bold text-white ">Contribute</h1>
                    <p className="text-white font-semibold pt-8">
                        I'm crowdsourcing the prompts used on this website to get a wide variety of images from each model. 
                        If you have a prompt you'd like to share, please reply to this Twitter post: <a href="https://twitter.com/Big_Schmitz/status/1644268937914507265" className="text-white underline font-semibold">https://twitter.com/Big_Schmitz</a>
                    </p>
                    <p className="text-white font-semibold pt-8">
                        The ideal prompt is one that has not been fine tuned to a specific model, and provides a good representation of the capabilities of each model. Please make sure all contributions are appropriate. Please look at the current prompts 
                        on this website to get a good idea of what is good. There is no need to create the image yourself, I will be doing all of the image generation.
                    </p>
                </div>
            </div>
        </div>
    );
}
