import { useState } from "react";
import styled from "styled-components";
import Quote from "./components/Quote";
import randomQuote from "./utils/randomQuote";

const StyledMain = styled.main`
  background-color: ${({ theme }) => theme};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  transition: background-color 1s;
  font-size: 1.2em;
`;

const App = () => {
  const [quote, setQuote] = useState(randomQuote);
  console.log(quote);

  return (
    <StyledMain theme={quote.color} className="App">
      {quote && <Quote quote={quote} setQuote={setQuote} />}
    </StyledMain>
  );
};

export default App;
