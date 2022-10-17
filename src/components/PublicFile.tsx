import { EditIcon } from '@chakra-ui/icons';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import { FiDelete, FiHeart } from 'react-icons/fi';

interface Props {
    author: string | null;
    id: string;
    name: string;
}
  
const PublicFile: React.FC<Props> = ({author, id, name}) => {
    return (
        <Box
          maxW={'300px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          cursor="pointer"
          transition="200ms ease-in"
          _hover={{
            transform: 'scale(110% )',
            boxShadow: 'lg',
        }}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
            objectFit={'cover'}
          />
          <Box p={1}>
            <Stack spacing={0}  align={'center'} mb={5}>
              <Text fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {author}
              </Text>
              <Text color={'gray.500'}>{name}</Text>
            </Stack>

            <Box>
                <Button
                    leftIcon={<EditIcon fontSize="sm"/>}
                    ml="1"
                    mt={8}
                    bg={useColorModeValue('#151f21', 'gray.900')}
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    }}
                >
                    Edit
                </Button>
            
                <Button
                    leftIcon={<FiHeart fontSize="sm"/>}
                    ml="1"
                    mt={8}
                    bg={useColorModeValue('blue.500', 'blue.400')}
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                        transform: 'translateY(-2px )',
                        boxShadow: 'lg',
                    }}
                >
                Like
                </Button>
            </Box>
          </Box>
        </Box>
    );
  }

export default PublicFile