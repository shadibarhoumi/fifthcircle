import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { ArcherContainer, ArcherElement } from 'react-archer'

const noteStyle = {
  width: '20px',
  height: '30px',
  backgroundColor: 'deeppink',
  color: 'white',
  padding: '4px',
  fontWeight: 'bold',
} as React.CSSProperties

const rootStyle = { display: 'flex', justifyContent: 'center' }
const rowStyle = { margin: '200px 0', display: 'flex', justifyContent: 'space-between' }
const boxStyle = { padding: '10px', border: '1px solid black' }

export default function Home() {
  return (
    <>
      <Flex flexDirection="column" alignItems="center">
        <p>Hi David! -Shadi</p>
        <img width="1000" src="/mockup.png" alt="Mockup" />
      </Flex>
    </>
  )
}
