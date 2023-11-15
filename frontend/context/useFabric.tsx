"use client";
import { FabricJSEditor } from "fabricjs-react";
import { fabric } from 'fabric';


const useFabric = (editor: FabricJSEditor | undefined,) => {

    const addCircle = () => {
        const circle = new fabric.Circle({
            radius: 20,
            fill: 'green',
            left: 100,
            top: 100
        });
        editor?.canvas.add(circle);
    }

    return {
        addCircle
    }
};

export default useFabric;
