require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note oval coil grace slice system genius'; 
let testAccounts = [
"0xc5003d12fda250b17c294c460a3ad908528b3dfa456741cbcaf6e50a8d343eec",
"0xf66c8f6e9065e768f2422f92714cb25291db18a384e6404a8bfff778c1092bf7",
"0x2bce5d17d78b38520f471673987398af6ae8be8af475312511be0d903b4d949e",
"0x81873fc65713450310c4169a32f5f4a52fb09c5300fd47eef96a96ec34dd81c2",
"0xdaee99b3d1ff3a9dced0c887c918f7570f9ddbd4339b250b6cf163234555505f",
"0xfe431d08323b54e734394991f06acefcea52b11d17855cceaa8afed6953ff173",
"0x314cd310f9078d840c645f58ef2f354a736c44026f3c6ec3997a02022df10961",
"0xcd8a6fccf5d963e91f7d2d936b206530a048bbf7e9098447a5e02b0a78c155eb",
"0x315087b0e3ebcc62987a863239d983936b9928ac2b4ff1e35a88303906871219",
"0xf91002b2fb4f7d869c5de8b62d77477fcc4b49c4c2a23c35e6843d900a48ccaf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

