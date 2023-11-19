"use client";
import { FabricJSEditor } from "fabricjs-react";
import { fabric } from 'fabric';
import { socket } from "@/socket";
import { useContext } from "react";
import { BoardContext } from "@/context/BoardContext";


const useFabric = (editor: FabricJSEditor | undefined,) => {
    const { boardId } = useContext(BoardContext)
    const addCircle = () => {
        const circle = new fabric.Circle({
            radius: 40,
            fill: 'blue',
            left: 200,
            top: 200
        });
        editor?.canvas.add(circle);

        socket.emit('add-circle', { boardId, circle })
    }

    return {
        addCircle
    }
};

export default useFabric;
