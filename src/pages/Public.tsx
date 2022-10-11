import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import PublicFile from '../components/PublicFile'
import { dummy } from '../utils/file'

const Public: React.FC = () => {
  return (
    <Box>
      <Heading>My files</Heading>
      <Flex my="2" gap="2" wrap="wrap">
        {dummy.map(({author, id, name})=>(
          <PublicFile key={id} author={author} name={name} id={id} />
        ))}
      </Flex>
    </Box>
  )
}

export default Public