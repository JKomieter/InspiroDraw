"use client";
import { socket } from "@/socket";
import { BoardContextType, Board } from "@/types";
import { IEvent } from "fabric/fabric-impl";
import { FabricJSEditor } from "fabricjs-react";
import { createContext, useEffect, useState } from "react";
import { useShapes } from "@/utils/useShapes";


const BoardContext = createContext<BoardContextType>({} as BoardContextType);


const BoardProvider = ({ children }: { children: React.ReactNode }) => {
    const [boardName, setBoardName] = useState<string>('');
    const [path, setPath] = useState<IEvent<MouseEvent>>();
    const [board, setBoard] = useState<Board>();
    const [newJoin, setNewJoin] = useState<string | undefined>("");
    const [boardId, setBoardId] = useState<string | undefined>("");
    const [username, setUsername] = useState<string>("");
    const [editor, setEditor] = useState<FabricJSEditor | undefined>(undefined);
    const { 
        addCircle, 
        addRectangle, 
        addTriangle, 
        addStraightLine, 
        addPolygon, 
        addText,
        addTextbox
    } = useShapes(editor, boardId)

    useEffect(() => {
        // listen for user joined broadcast
        socket.on('user-joined-broadcast', (data) => {
            console.log('user joined broadcast', data);
            setBoard(data);
        })

        socket.on('user-joined', ({ username }) => {
            console.log('user joined', username);
            setNewJoin(username);
        });

        return () => {
            socket.off('user-joined');
            socket.off('user-joined-broadcast');
            socket.off('board-created');
        }
    }, []);

    const joinBoard = async () => {
        try {
            socket.emit('join-board', { boardId: boardId, username: 'test' });
            
            socket.on('user-joined', ({ username }) => {
                console.log('user joined', username);
                setNewJoin(username);
            });
        } catch (error) {
            console.log('error joining board', error);   
        }
    };

    const createBoard = async () => {
        try {
            // create board
            socket.emit('create-board', { boardName, username: 'test' });
            // listen for board created
            socket.on('board-created', (board: Board) => {
                setBoard(board);
            });

        } catch (error) {
            console.log('error creating board', error);
        }
    };


    return (
        <BoardContext.Provider value={{
            createBoard,
            joinBoard,
            boardName,
            setBoardName,
            path,
            setPath,
            newJoin,
            setNewJoin,
            boardId,
            setBoardId,
            username,
            setUsername,
            editor,
            setEditor,
            addCircle,
            addRectangle,
            addTriangle,
            addStraightLine,
            addText,
            addPolygon,
            addTextbox
        }}>
            {children}
        </BoardContext.Provider>
    )
};


export { BoardProvider, BoardContext };