import React from 'react'
import Head from 'next/head'

const Page: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Circle of Fifths</title>
      </Head>
      <div className="container">{children}</div>
    </>
  )
}

export default Page
