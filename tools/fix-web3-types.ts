import { readFile, writeFile } from 'fs-extra'
import { join } from 'path'

const pathToFile = join(__dirname, '../node_modules/truffle-typings/index.d.ts')
const wrong = `declare type Web3 = import("web3");`
const right = `declare type Web3 = import("web3").default;`

fix()

async function fix () {
  const file = await readFile(pathToFile)
  const content = file.toString()

  if (content.includes(wrong)) {
    console.log('Fixing file...')
    const fixed = content.replace(wrong, right)
    await writeFile(pathToFile, fixed)
    console.log('Fixed: ')
    console.log(right)
    console.log(`in file ${pathToFile}`)
  } else {
    console.log('Didn\'t find wrong stuff.')
    if (content.includes(right)) {
      console.log('Looks fixed already!')
    }
  }
}

