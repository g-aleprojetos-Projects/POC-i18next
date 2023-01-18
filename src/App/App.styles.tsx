import styled from "styled-components";

export interface IApp {
  escolhido?: boolean
}

export const Container = styled.div`
display: flex;
flex-direction: column;
`

export const Header = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
height: 100px;
background-color: #202024;
`

export const Nav = styled.nav`
display: flex;
padding-right: 30px;
`

export const Item = styled.a`
margin: 10px;
`
export const Texto = styled.p`
font-size: 15px;
color: #fff;
cursor: pointer;
`

export const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Botao = styled.button<IApp>`
  width: 100px;
  height: 30px;
  margin: 10px;
  background-color: ${props => props.escolhido? "#aff": "#aaa" }
`
