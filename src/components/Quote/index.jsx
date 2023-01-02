import Author from "../Author";
import Button from "../Button";
import Text from "../Text";
import { StyledQuoteBox } from "./style";

const Quote = ({ quote, setQuote }) => {
  return (
    <StyledQuoteBox>
      <Text text={quote.message} />
      <Author author={quote.author} />
      <Button quote={quote} setQuote={setQuote} />
    </StyledQuoteBox>
  );
};

export default Quote;
