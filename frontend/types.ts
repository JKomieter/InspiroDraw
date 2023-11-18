import { FabricJSEditor } from "fabricjs-react";
import React from "react";

export interface FabricSidebarProps {
    editor: FabricJSEditor | undefined,
}

export type BoardContextType = {
    createBoard: () => void,
    joinBoard: () => void,
    boardName: string,
    setBoardName: React.Dispatch<React.SetStateAction<string>>,
    path: any,
    setPath: React.Dispatch<React.SetStateAction<any>>,
    newJoin: string | undefined,
    setNewJoin: React.Dispatch<React.SetStateAction<string | undefined>>,
    boardId: string | undefined,
    setBoardId: React.Dispatch<React.SetStateAction<string | undefined>>,
    username: string | undefined,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
}

export type User = {
    username: string,
    signalData: any
}

export type Board = {
    users: {
        username: string,
        socketId: string,
    }[], 
    boardName: string, 
    sessionOpen: boolean, 
    initiator: string, 
    boardId: string
}