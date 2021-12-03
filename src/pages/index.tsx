import type { NextPage } from 'next'
import Head from 'next/head'

import { Box } from '~/components/Box'
import { Heading } from '~/components/Heading'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Heading>Template Next.js</Heading>
      </Box>
    </>
  )
}

export default Home
