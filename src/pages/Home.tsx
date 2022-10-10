import { Box, Button, Flex, FormLabel, Heading, Input, Text, useColorModeValue } from '@chakra-ui/react'
import Editor from '@monaco-editor/react';
import React from 'react'
import LanguageSelector from '../components/LanguageSelector';

interface Props {
    newfile?: boolean;
    title?: string;
    fileId?: string;
}

const Home: React.FC<Props> = ({ title, fileId, newfile }) => {
    const lightMode = useColorModeValue(0, 1)
    return (
        <Box>
            <Heading mb="2">New file</Heading>
            <Flex gap="2">
                <Editor
                    height="85vh"
                    width="70%"
                    theme={lightMode ? "vs-dark": "vs-light"}
                    defaultLanguage="javascript"
                    defaultValue="// some comment"
                />
                <Box>
                    <Box>
                        <FormLabel htmlFor='title'>Title</FormLabel>
                        <Input id="title" placeholder="Title" />
                        <LanguageSelector />
                        <Button variant="outline" colorScheme="blue" my="2">Save</Button>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default Home