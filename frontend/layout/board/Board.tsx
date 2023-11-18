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
import { socket } from '@/socket';
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
        if (newJoin) console.log('new join', newJoin);

        // send draw event from editor
        editor?.canvas.on('path:created', (e) => {
            // get the drawing to be sent to server and added to canvas
            socket.emit('draw', { boardId, path: e });
        });

        // listen to draw event from server
        socket.on('draw-broadcast', (data) => {
            try {
                console.log('draw broadcast', data);
                const path = new fabric.Path(data.path.path.path);
                path.set({ ...data.path.path });
                editor?.canvas.add(path);
            } catch (error) {
                console.error('Error adding to canvas:', error);
            }
        });

        // listen to add circle event from server
        socket.on('add-circle-broadcast', (data) => {
            try {
                console.log('add circle broadcast', data);
                // add the circle to canvas
                const circle = new fabric.Circle(data.circle);
                editor?.canvas.add(circle);
            } catch (error) {
                console.error('Error adding to canvas:', error);
            }
        });

        // cleeaup
        return () => {
            socket.off('draw-broadcast');
            editor?.canvas.off('path:created');
        }
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