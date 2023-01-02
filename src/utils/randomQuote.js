import MOCKS_QUOTE from "../__mocks__/MOCK_QUOTE.json";

const randomQuote = () =>
  MOCKS_QUOTE[Math.floor(Math.random() * MOCKS_QUOTE.length)];

export default randomQuote;
