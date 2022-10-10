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
  
const File: React.FC<Props> = ({author, id, name}) => {
    return (
        <Box
          maxW={'300px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
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
                    leftIcon={<FiDelete fontSize="sm"/>}
                    ml="1"
                    mt={8}
                    bg={useColorModeValue('red.500', 'red.400')}
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    }}
                >
                Delete
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

export default File