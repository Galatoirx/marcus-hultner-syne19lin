import styled from "styled-components"

export const NavWrapper = styled.nav`
 /*styling for the navbar container */
  grid-column: 3 / span 10;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  background-color:hsl(21, 93%, 58%);
  padding:20px;
  color:white;

  /*styling for the navbar menu */
.NavStyle{
  
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding:  20px;
  display: flex;
  justify-content: space-between;
  list-style-type:none;
  font-size:1.5rem;
}
/*Css for menu link*/
a{
  text-decoration: none;
  color:white;
}
  img {
    height: 40px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;

    .NavStyle{
      font-size:1rem;
    }
  }
`
