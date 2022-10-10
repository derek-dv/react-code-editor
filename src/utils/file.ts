import { uuid } from "uuidv4";
export interface File {
    author: null | string;
    id: string;
    name: string;
    fileType?: string;
    raw?: string;
    favourite?: string[]
}

export const dummy: File[] = [
    {author: "Derek David", fileType: "js", id: "1", name: "demo.js"},
    {author: "Derek David", fileType: "js", id: "2", name: "script.js"},
    {author: "Derek David", fileType: "js", id: "3", name: "square.js"},
    {author: "Anon", fileType: "js", id: "4", name: "demo.js"}
]