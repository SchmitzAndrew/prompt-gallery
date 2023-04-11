// CONTRIBUTING:
// Add a new entry to `prompts`, copy-pasting the following template:
// 'id': {
//  prompt: 'your-prompt',
//  authorName: 'your-name',
//  authorLink: 'link-to-something',
// },
// ID must be a unique 1-2 word summary of your prompt

interface Prompt {
    prompt: string;
    authorName: string;
    authorLink: string;
}

interface PromptList {
    [key: string]: Prompt;
}

export const prompts: PromptList = {
    rocket: {
        prompt: "rocket launch, stary night, digital art",
        authorName: "Andrew Schmitz",
        authorLink: "https://twitter.com/Big_Schmitz",
    },
    popArt: {
        prompt: "Pop Art Deco landscape art, beautiful beach, sunset, volumetric, cinematic lighting",
        authorName: "Heather Cooper",
        authorLink: "https://twitter.com/HBCoop_"

    },
    koala: {
        prompt: "seventeen parachuting koalas",
        authorName: "Justin Eldrige",
        authorLink: "https://eldridgejm.github.io/",
    },
    fox: {
        prompt: "Realistic 3d render of a happy, furry and cute baby red fox smiling with big eyes looking straight at you, Pixar style, 32k, full body shot with a light purple background",
        authorName: "Nikolas Huebecker",
        authorLink: "https://twitter.com/nhuebecker",
    },
    raven: {
        prompt: "Man watching raven perching on a bust of pallas above his door haunted shadows liminal surrealist",
        authorName: "Adam Khoja",
        authorLink: "https://twitter.com/AKhoja10",
    },
    hexagon:{
        prompt: "Hexagon Landscape art, volumetric, highly detailed, 8k, turquoise, yellow, hyper realistic",
        authorName: "Heather Cooper",
        authorLink: "https://twitter.com/HBCoop_"
    },
    grass: {
        prompt: "man lying down in the grass and looking up at the stars and the moon",
        authorName: "Christina Huang",
        authorLink: "https://twitter.com/silkthyme",
    },
    opossum: {
        prompt: "Photorealistic opossum doing a kickflip on a skateboard, action shot, motion blur",
        authorName: "Lola Egherman",
        authorLink: "https://github.com/oohwooh",
    },
    yachtSunrise: {
        prompt: "sunrise over the ocean with a yacht, hyperrealistic",
        authorName: "Andrew Masek",
        authorLink: "https://github.com/portoaj",
    },
    spaceDonut: {
        prompt: "Unicorn floating in space on a homer Simpson style donut hyper realistic",
        authorName: "Shubham Patil",
        authorLink: "https://twitter.com/ShubhamPatilsd",
    },
    renaissance: {
        prompt: "a renaissance painting of a house on the bluffs overlooking a vast moor with blooming gooseberry thickets",
        authorName: "Christina Huang",
        authorLink: "https://twitter.com/silkthyme",
    },
    wave: {
        prompt: "crashing wave, tsunami, glassy, sunset, clouds, beautiful",
        authorName: "Andrew Schmitz",
        authorLink: "https://aschmitz.dev",
    },
    synthwave:{
        prompt: "Minimalist abstract synthwave scene, purple orange yellow, UHD, 3D, 8k, perfect composition",
        authorName: "Heather Cooper",
        authorLink: "https://twitter.com/HBCoop_"
    },
    
    backflip: {
        prompt: "person doing a backflip, 80's cartoon",
        authorName: "Andrew Masek",
        authorLink: "https://github.com/portoaj",
    },
    pencilWorld: {
        prompt: "A tiny, microscopic world living on the tip of a pencil",
        authorName: "Samuel Mai",
        authorLink: "https://github.com/KawsInTheLab",
    },
};
