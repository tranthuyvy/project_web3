// https://eth-goerli.g.alchemy.com/v2/pI5Tau9PpeiG5ik-29L7SzMfCRAXLQ-N

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/pI5Tau9PpeiG5ik-29L7SzMfCRAXLQ-N',
      accounts: ['5501d2efa11b033c7c444074e4b0179001bb6fb6d5eb2e4220215e4a2c080518']
    }
  }
}