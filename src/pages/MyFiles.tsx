import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import File from '../components/File'
import { dummy } from '../utils/file'

const MyFiles: React.FC = () => {
  return (
    <Box>
      <Heading>My files</Heading>
      <Flex my="2" gap="2" wrap="wrap">
        {dummy.map(({author, id, name})=>(
          <File key={id} author={author} name={name} id={id} />
        ))}
      </Flex>
    </Box>
  )
}

export default MyFiles