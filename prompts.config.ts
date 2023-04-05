// CONTRIBUTING:
// Add a new entry to `prompts`, copy-pasting the following template:
// 'id': {
//  prompt: 'your-prompt',
//  authorName: 'your-name',
//  authorLink: 'link-to-something',
// },
// ID must be a unique 1-2 word summary of your prompt


interface Prompt {
  prompt: string
  authorName: string,
  authorLink: string
}

interface PromptList {
  [key: string]: Prompt
}

export const prompts: PromptList = {
  'rocket': {
    prompt: 'rocket launch, stary night, digital art',
    authorName: 'Andrew Schmitz',
    authorLink: 'https://twitter.com/Big_Schmitz'
  },
  'koala': {
    prompt: 'seventeen parachuting koalas',
    authorName: 'Justin Eldrige',
    authorLink: 'https://eldridgejm.github.io/'
  },
  'fox': {
    prompt: 'Realistic 3d render of a happy, furry and cute baby red fox smiling with big eyes looking straight at you, Pixar style, 32k, full body shot with a light purple background',
    authorName: 'Nikolas Huebecker',
    authorLink: 'https://twitter.com/nhuebecker'
  },
  'raven': {
    prompt: 'Man watching raven perching on a bust of pallas above his door haunted shadows liminal surrealist',
    authorName: 'Adam Khoja',
    authorLink: 'https://twitter.com/AKhoja10'
  },
  'opossum': {
    prompt: 'Photorealistic opossum doing a kickflip on a skateboard, action shot, motion blur',
    authorName: 'Lola Egherman',
    authorLink: 'https://github.com/oohwooh'
  },
}
