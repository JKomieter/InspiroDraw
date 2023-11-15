"use client";
import useFabric from '@/context/useFabric';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { useEffect } from 'react';
import FabricHeader from './FabricHeader';


const Board = () => {
    const { editor, onReady } = useFabricJSEditor();
    const { addCircle } = useFabric(editor);

    useEffect(() => {
        if (!editor) return;

        editor.canvas.setBackgroundColor('#F7F2DD', editor.canvas.renderAll.bind(editor.canvas));
    }, [editor]); 

    return (
        <div className="w-full h-full">
            <FabricHeader />
            <FabricJSCanvas onReady={onReady} className='w-full h-full absolute' />
        </div>
    )
}


export default Board;