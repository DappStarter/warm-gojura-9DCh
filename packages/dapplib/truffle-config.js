require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food ivory release still equip coral light army genre'; 
let testAccounts = [
"0x2e25e3cbaad73d274ee0923046668b86b1c2a2d1fbbb12b0ccf12f4b26061df6",
"0x986fde1351f19ad462957b211df72863223ec606f99e3119dc9b309e9f601ef2",
"0x1f496f313fe92aefb5d3c7915c8dc648b87d88f6547cdaec207a4a515bca63dd",
"0xb28a34555fbb98785b6a8ad0a1d23aa3c87e452b19b1b6cdce34d23c83e0377e",
"0xe640b0d28683bde4752ee4dcbb6734d0095e5c34bd0f321605c06828aa710be1",
"0x4cd5d6f531ac34dad26d6b528fd9e0b176ba24b97c371c8834f524cb279af2c8",
"0xd64aeb0082d3df81b2c8e79d55edcd04114c238f9d4477c205239d7a59af8a93",
"0x7f1fb119e6b04c4680398a4355219f6c810e7a9761cc74cadea822c9404232ab",
"0x7837205c7441429a4a8cd0bb11c93412ab7c60538826b7b2d79f13f1793ba875",
"0x582f36ecad832916e5a3eac32fc06833b9048cb83aa97b81e47c7f47efb45041"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

