import {default as IWeb3} from 'web3'


declare global {
  interface Web3 extends IWeb3 {

  }
}

declare const web3:Web3;