import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>
      
      <ul className="NavStyle">
        <li><a href="/">Home</a></li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
        
      
    </NavWrapper>
  )
}
