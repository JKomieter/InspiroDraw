import { fabric } from "fabric";
import { FabricJSEditor } from "fabricjs-react";
import { socket } from "@/socket";


export const useShapes = (editor: FabricJSEditor | undefined, boardId: string | undefined) => {
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


    const addRectangle = () => {
        const rect = new fabric.Rect({
            width: 100,
            height: 100,
            fill: 'red',
            left: 300,
            top: 300
        });
        editor?.canvas.add(rect);
    }

    const addTriangle = () => {
        const triangle = new fabric.Triangle({
            width: 100,
            height: 100,
            fill: 'green',
            left: 400,
            top: 400
        });
        editor?.canvas.add(triangle);
    }

    const addStraightLine = () => {
        const line = new fabric.Line([50, 100, 200, 200], {
            stroke: 'black',
            strokeWidth: 2,
            left: 500,
            top: 500
        });
        editor?.canvas.add(line);
    };

    const addPolygon = () => {
        const polygon = new fabric.Polygon([
            { x: 185, y: 0 },
            { x: 250, y: 100 },
            { x: 385, y: 170 },
            { x: 0, y: 245 }
        ], {
            fill: 'yellow',
            left: 600,
            top: 600
        });
        editor?.canvas.add(polygon);
    }


    const addText = () => {
        const text = new fabric.IText('Hello world', {
            left: 100,
            top: 100,
            fontFamily: 'arial black',
            fill: '#333',
            fontSize: 30
        });
        editor?.canvas.add(text);
    }
    

    const addTextbox = (color: string) => {
        const textbox = new fabric.Textbox('Hello world', {
            left: 200,
            top: 200,
            width:300,
            height: 400,
            fontSize: 30,
            backgroundColor: color,
        });
        editor?.canvas.add(textbox);
    }


    return {
        addCircle,
        addRectangle,
        addTriangle,
        addStraightLine,
        addPolygon,
        addText,
        addTextbox
    }
}