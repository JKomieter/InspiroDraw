"use client";
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
    const { setBoardName, newJoin, boardId, setEditor } = useContext(BoardContext);
    const [boardCreated, setBoardCreated] = useState<boolean>(false);
    
    useEffect(() => {
        if (!editor) return;

        editor.canvas.setBackgroundColor('#dee0e2', editor.canvas.renderAll.bind(editor.canvas));
        editor.canvas.allowTouchScrolling = true;
        // allow drawing
        // editor.canvas.isDrawingMode = true;
        editor.canvas.renderOnAddRemove = true;
        setEditor(editor);
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

        // return () => {
        //     !boardCreated && sendBoardName()
        // };
    }, []);

    // useEffect(() => {
    //     if (!editor || !editor.canvas) return;

    //     const gridOptions = {
    //         distance: 20,
    //         width: editor.canvas.width || 0,
    //         height: editor?.canvas.height || 0,
    //         color: '#ccc',
    //         borderColor: '#ddd',
    //         borderWidth: 1,
    //     };

    //     editor?.canvas.on('after:render', () => {
    //         const ctx = editor?.canvas.getContext();
    //         const grid = 20;

    //         ctx.beginPath();

    //         const width = editor?.canvas.width || 0;
    //         const height = editor?.canvas.height || 0;

    //         for (let i = 0; i < width / grid; i++) {
    //             const pos = i * grid;
    //             ctx.moveTo(pos, 0);
    //             ctx.lineTo(pos, height);
    //             ctx.moveTo(0, pos);
    //             ctx.lineTo(width, pos);
    //         }

    //         ctx.closePath();
    //         ctx.strokeStyle = gridOptions.color;
    //         ctx.lineWidth = gridOptions.borderWidth;
    //         ctx.stroke();
    //     });

    //     return () => {
    //         if (editor && editor.canvas) {
    //             editor.canvas.dispose(); // Cleanup fabric canvas on component unmount
    //         } 
    //     };
    // }, [editor]);

    useEffect(() => {
        if (newJoin) console.log('new join', newJoin);

        // send draw event from editor
        editor?.canvas.on('path:created', (e) => {
            socket.emit('draw', { boardId, path: e });
        });

        // listen to add circle event from server
        socket.on('add-circle-broadcast', (data) => {
            try {
                console.log('add circle broadcast', data);
                const circle = new fabric.Circle(data.circle);
                editor?.canvas.add(circle);
            } catch (error) {
                console.error('Error adding to canvas:', error);
            }
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

        // cleeaup
        return () => {
            socket.off('draw-broadcast');
            socket.off('add-circle-broadcast');
            editor?.canvas.off('path:created');
        }
    }, [newJoin, editor]);

    return (
        <div className="w-full h-full">
            <FabricHeader />
            <Suspense fallback={<Skeleton className='w-full h-full absolute -z-20' />}>
                <FabricJSCanvas onReady={onReady} className='w-full h-full absolute overflow-scroll' />
            </Suspense>
            <FabricSidebar editor={editor} />
        </div>
    )
}


export default Board;