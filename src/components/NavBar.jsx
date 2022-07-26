import React from 'react'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Nav>
      <span>FILMES</span>
    </Nav>
  )
}

export default NavBar

const Nav = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  span {
    font-weight: 600;
    font-size: 1.4rem;
    color: #000;
  }
`
