import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAll } from '../actions/files/file'
import PublicFile from '../components/PublicFile'
import { dummy } from '../utils/file'

const Public: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    // @ts-ignore
    dispatch(getAll());
  }, [])
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