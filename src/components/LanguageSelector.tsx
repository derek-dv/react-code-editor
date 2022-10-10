import { Box, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'
import languages from '../utils/languages'

const LanguageSelector: React.FC = () => {
  return (
    <Box>
        <FormLabel mt="2" htmlFor='language'>Language</FormLabel>
        <Select id="language">
            {languages.map(({id, language})=>(
                <option key={id}>{language}</option>
            ))}
        </Select>
    </Box>
  )
}

export default LanguageSelector