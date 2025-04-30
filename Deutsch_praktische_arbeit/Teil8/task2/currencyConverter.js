const convertToUSD = (amount, rate) => (amount / rate).toFixed(2)

const convertFromUSD = (amount, rate) => (amount * rate).toFixed(2)

module.exports = { convertFromUSD, convertToUSD }
