import styled from "styled-components"

export const CardWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;

  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 46%;
  margin: 2% 2%;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);



  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    margin-top: 10%;
  }
`
