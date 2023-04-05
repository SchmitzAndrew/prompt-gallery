export default function Methodology() {
    return (
        <div className="pb-8">
            <div className="mx-auto max-w-7xl px-6">
                <h1 className="text-3xl font-bold text-white ">Methodology</h1>
                <p className="text-white font-semibold pt-8">
                    This goal of this site is to provide a represenataion of the
                    differences between the most popular image generation models. The
                    inspiration for this project came when I was getting started with
                    image generation and I was wondering which model performed the best,
                    but found few resources to compare models.
                </p>
                <p className="text-white font-semibold pt-4">
                    I&apos;ve come to learn that there is a lot of skill to getting a good
                    image from each model, and each model has it&apos;s own ways of
                    interpreting a prompt. Although each model has it&apos;s quirks, I
                    hope this website can be a good example of the baseline performance of
                    each model.
                </p>
                <p className="text-white font-semibold pt-4">
                    Since finetuning each model can result in drastically different
                    results, I&apos;ve decided to use the default settings on every model.
                    Additionally, I used the first result from each image generation,
                    regardless of how many images the model generated. I did this to avoid
                    my bias in selecting the &quot;best&quot; image from each generation.
                </p>

                <h2 className="text-3xl font-semibold text-white pt-4">Model Notes:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-4">
                    <div className="">
                        <h3 className="text-2xl font-bold text-white py-4">DALL·E2</h3>
                        <ul className="list-disc list-outside text-white ">
                            <li>
                                Plugged each prompt direclty into &nbsp;
                                <a
                                    className="text-white underline "
                                    href="https://labs.openai.com/"
                                >
                                    labs.openai.com
                                </a>
                            </li>
                            <li>Used the first image (top left) each time</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-bold text-white py-4">
                            Stable Diffusion
                        </h3>
                        <ul className="list-disc list-outside text-white">
                            <li>
                                Tried to generate images locally with &nbsp;
                                <a
                                    className="text-white underline"
                                    href="https://github.com/n00mkrad/text2image-gui"
                                >
                                    txt2image-gui
                                </a>
                                &nbsp; and &nbsp;
                                <a
                                    className="text-white underline"
                                    href="https://github.com/AUTOMATIC1111/stable-diffusion-webui"
                                >
                                    automatic1111
                                </a>
                                , but my GPU was not powerful enough. :(
                            </li>
                            <li>
                                Used &nbsp;
                                <a
                                    className="text-white underline"
                                    href="https://legacy.dreamstudio.ai/dream"
                                >
                                    dreamstudio.ai
                                </a>
                                &nbsp; instead due to it being created by stability.ai
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-bold text-white py-4">Midjourney</h3>
                        <ul className="list-disc list-outside text-white">
                            <li>Used the Midjourney Discord to generate images</li>
                            <li>
                                Did not used v5 since this is not the default option as of now
                            </li>
                            <li>
                                The only service where I was not able to generate the images for
                                free with trial credits
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-white font-semibold pt-4">
                    All of these services were fairly difficult to use since every service
                    said it was facing high demand and took multiple tries to generate the
                    images. Stable Diffusion offers significantly more customization than
                    both models, but I did not do any of this.
                </p>
                <p className="text-white font-semibold pt-4">
                    If you have any questions/ comments about the methodology used, pleae
                    let me know!
                </p>
            </div>
        </div>
    );
}
