import randomQuote from "../../utils/randomQuote";
import {
  StyledButton,
  StyledButtonContainer,
  StyledButtonLink,
  StyledLink,
} from "./style";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Tumblr } from "../../assets/tumblr.svg";

const Button = ({ quote, setQuote }) => {
  return (
    <StyledButtonContainer id="button-container">
      <StyledButtonLink id="button-link">
        <StyledButton theme={quote.color}>
          <StyledLink
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=devchalenger&text=${`"${quote.message}" ${quote.author}`}`}
            target="_top"
          >
            <Twitter height={15} />
          </StyledLink>
        </StyledButton>
        <StyledButton theme={quote.color}>
          <StyledLink
            id="tumblr-quote"
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,devchalenger&caption=${quote.author}&content=${quote.message}.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
            rel="noopener"
          >
            <Tumblr height={15} />
          </StyledLink>
        </StyledButton>
      </StyledButtonLink>
      <StyledButton
        theme={quote.color}
        id="new-quote"
        onClick={() => {
          setQuote(randomQuote);
        }}
      >
        New quote
      </StyledButton>
    </StyledButtonContainer>
  );
};

export default Button;
