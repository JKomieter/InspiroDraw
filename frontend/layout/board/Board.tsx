"use client";
import useFabric from '@/utils/useFabric';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { Suspense, useContext, useEffect, useState } from 'react';
import FabricHeader from './FabricHeader';
import FabricSidebar from './FabricSidebar';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { Skeleton } from '@mui/material';
import { BoardContext } from '@/context/BoardContext';
import { socket } from '@/app/socket';
import { fabric } from 'fabric';


const Board = () => {
    const { editor, onReady } = useFabricJSEditor();
    const pathname = usePathname();
    const { setBoardName, newJoin, boardId } = useContext(BoardContext);
    const [boardCreated, setBoardCreated] = useState<boolean>(false);

    useEffect(() => {
        if (!editor) return;

        editor.canvas.setBackgroundColor('#dee0e2', editor.canvas.renderAll.bind(editor.canvas));
        editor.canvas.allowTouchScrolling = true;
        // allow drawing
        editor.canvas.isDrawingMode = true;
        editor.canvas.renderOnAddRemove = true;
    }, [editor]);

    useEffect(() => {
        const boardName = pathname.split('/')[2];
        setBoardName(boardName);
        const sendBoardName = async () => {
            const board = {
                boardName,
                users: ['test'],
            }
            await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/create-board`, board);
            setBoardCreated(true);
        };

        return () => {
            !boardCreated && sendBoardName()
        };
    }, []);


    useEffect(() => {
        if (!editor) return;
        if (newJoin) console.log('new join', newJoin);

        // send draw event from editor
        editor.canvas.on('path:created', (e) => {
            // get the drawing to be sent to server and added to canvas
            socket.emit('draw', { boardId, path: e });
        });

        // listen to draw event from server
        socket.on('draw-broadcast', (data) => {
            try {
                console.log('draw broadcast', data);
                // construct the fabric object from the fabric.IEvent<MouseEvent>
                const path = new fabric.Path(data.path.path, data.path);
                // add to canvas
                editor.canvas.add(path);
                editor.canvas.renderAll();
            } catch (error) {
                console.error('Error adding to canvas:', error);
            }
        });
    }, [newJoin, editor]);

    return (
        <div className="w-full h-full">
            <FabricHeader />
            <Suspense fallback={<Skeleton className='w-full h-full absolute' />}>
                <FabricJSCanvas onReady={onReady} className='w-full h-full absolute overflow-scroll' />
            </Suspense>
            <FabricSidebar editor={editor} />
        </div>
    )
}


export default Board;