// See the defaults and options here
// https://github.com/trufflesuite/truffle/blob/develop/packages/config/src/configDefaults.ts

export default {
  networks: {
    // default
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },

    // test chains
    // ropsten: {
    //   provider: new HDWalletProvider("candy maple cake sugar pudding cream honey rich smooth crumble sweet treat", "https://ropsten.infura.io/"),
    //   network_id: 3
    // },
    // rinkeby: {
    //   provider: new HDWalletProvider("candy maple cake sugar pudding cream honey rich smooth crumble sweet treat", "https://rinkeby.infura.io/"), // lol someone funded this account!
    //   network_id: 3
    // },
    // kovan: {
    //   provider: new HDWalletProvider("candy maple clay sugar pudding cream honey rich smooth crumble sweet treat", "https://kovan.infura.io/"),
    //   network_id: 42
    // },
  },

  test_file_extension_regexp: /.*\.test\.js$/,
}
