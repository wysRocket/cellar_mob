import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { styled } from '@mui/material/styles'

type Props = {
  children?: ReactNode
}

const Main = styled('main')`
  * {
    font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
      'Courier New', monospace, serif;
  }
  body {
    margin: 0;
  }
  a {
    color: #22bad9;
  }
  p {
    font-size: 14px;
    line-height: 24px;
  }
  article {
    margin: 0 auto;
    max-width: 650px;
  }
  section {
    padding: 25px;
  }
  button {
    align-items: center;
    background-color: white;
    border: 0.5 solid gray;
    color: #0cf010;
    border-radius: 15px;
    display: flex;
    padding: 5px 7px;
    transition: background-color 0.3s;
  }
  button:active {
    background-color: #1b9db7;
  }
  button:disabled {
    background-color: #b5bebf;
  }
  button:focus {
    outline: none;
  }
  .mr-2 {
    margin-right: 1rem;
  }
  .mt-2 {
    margin-top: 1rem;
  }
  .mb-4 {
    margin-bottom: 2rem;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .search-block {
    align-items: center;
    justify-content: center;
  }
`

const Layout = ({ children }: Props) => <Main>{children}</Main>

export default Layout
