"use client";
import useFabric from '@/utils/useFabric';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { useEffect } from 'react';
import FabricHeader from './FabricHeader';
import FabricSidebar from './FabricSidebar';
import { usePathname } from 'next/navigation';
import axios from 'axios';


const Board = () => {
    const { editor, onReady } = useFabricJSEditor();
    const pathname = usePathname();

    useEffect(() => {
        if (!editor) return;

        editor.canvas.setBackgroundColor('#767676', editor.canvas.renderAll.bind(editor.canvas));
        editor.canvas.allowTouchScrolling = true;
        // allow drawing
        editor.canvas.isDrawingMode = true;
    }, [editor]); 

    useEffect(() => {
        const boardId = pathname.split('/')[2];
    
        const sendBoardName = async () => {
            const board = {
                boardName: boardId,
                username: 'test',
                userId: 'test',
            }

            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/create-board`, board);
            console.log(res.data);
        };

        sendBoardName();
    }, []);


    useEffect(() => {
        // listen for drawing mode
        if (!editor) return;

        editor.canvas.on('path:created', (e) => {
            const path = e;
            
        });
    }, [editor]);

    return (
        <div className="w-full h-full">
            <FabricHeader />
            <FabricJSCanvas onReady={onReady} className='w-full h-full absolute overflow-scroll' />
            <FabricSidebar editor={editor} />
        </div>
    )
}


export default Board;