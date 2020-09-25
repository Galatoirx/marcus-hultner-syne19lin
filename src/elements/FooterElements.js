import styled from "styled-components"

export const FooterWrapper = styled.footer`
grid-column: 4 / span 8;
grid-row: 10 / span 5;
  min-height: 11.25rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  .myFooter {
    padding: 4rem 10rem;
    z-index: 10;
    background: #111;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  p {
    text-align: center;
    flex: 0 0 100%;
  }

`

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 2rem;

  img {
    height: 22px;
    padding: 0 1rem;
    transition: filter 0.3s ease;
  }

  img:hover,
  img:focus {
    filter: brightness(50%);
  }
`