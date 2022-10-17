import { Box, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'
import languages from '../utils/languages'

interface Props {
  set:  React.Dispatch<React.SetStateAction<string>>
}

const LanguageSelector: React.FC<Props> = ({set}) => {
  return (
    <Box>
        <FormLabel mt="2" htmlFor='language'>Language</FormLabel>
        <Select id="language" onChange={(e)=>{
          set(e.target.value)
        }}>
            {languages.map(({id, language})=>(
                <option key={id} value={id}>{language}</option>
            ))}
        </Select>
    </Box>
  )
}

export default LanguageSelector