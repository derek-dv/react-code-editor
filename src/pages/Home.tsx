import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";
import LanguageSelector from "../components/LanguageSelector";
import { db } from "../firebase";
import { editor } from "monaco-editor";
import { useDispatch, useSelector } from "react-redux";
import { save } from "../actions/files/file";
import { State } from "../store";
import { useNavigate } from "react-router-dom";

interface Props {
  newfile?: boolean;
  fileId?: string;
}

export interface FileDoc {
  author: string;
  favourite: string[];
  name: string;
  type: string;
  raw: string;
}

const Home: React.FC<Props> = ({ fileId, newfile }) => {
  const lightMode = useColorModeValue(0, 1);
  const [language, setLanguage] = useState("bat");
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state: State)=>state.files);
  const navigate = useNavigate();

  const saveHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(save({author: uuidv4(), favourite: [], name: title, raw: code, type: language}));
  };

  const handleEditorChange = (value: any , event: editor.IModelContentChangedEvent) => {
    setCode(value);
  };
  return (
    <Box>
      <Heading mb="2">New file</Heading>
      <Flex gap="2">
        <Editor
          height="85vh"
          width="70%"
          theme={lightMode ? "vs-dark" : "vs-light"}
          defaultLanguage={language}
          language={language}
          value={code}
          onChange={handleEditorChange}
        />
        <Box>
          <form onSubmit={saveHandler}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              placeholder="Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <LanguageSelector set={setLanguage} />
            <Button isLoading={loading} disabled={loading} type="submit" variant="outline" colorScheme="blue" my="2">
              Save
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
