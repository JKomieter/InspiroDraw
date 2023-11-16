import { motion } from "framer-motion";
import NavigationIcon from '@mui/icons-material/Navigation';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import WidgetsIcon from '@mui/icons-material/Widgets';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CommentIcon from '@mui/icons-material/Comment';
import CropIcon from '@mui/icons-material/Crop';
import IosShareIcon from '@mui/icons-material/IosShare';
import AddBoxIcon from '@mui/icons-material/AddBox';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import SensorWindowIcon from '@mui/icons-material/SensorWindow';
import React from "react";


const InitialSidebar = ({
    addCircle,
    setIsOpen,
    isOpen,
}: {
    addCircle: () => void,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
}) => {
    const items = [
        {
            name: 'Select',
            icon: <NavigationIcon />,
        },
        {
            name: 'Templates',
            icon: <AutoAwesomeMosaicIcon />,
        },
        {
            name: 'Text',
            icon: <TextFieldsIcon />,
        },
        {
            name: 'Sticky note',
            icon: <StickyNote2Icon />
        },
        {
            name: 'Shapes',
            icon: <WidgetsIcon />,
            func: () => addCircle()
        },
        {
            name: 'Connection line',
            icon: <NorthEastIcon />
        },
        {
            name: 'Pen',
            icon: <DriveFileRenameOutlineIcon />
        },
        {
            name: 'Comment',
            icon: <CommentIcon />
        },
        {
            name: 'Frame',
            icon: <CropIcon />
        },
        {
            name: 'Upload',
            icon: <IosShareIcon />
        },
        {
            name: 'More apps',
            icon: <AddBoxIcon />
        }
    ]

    return (
        <motion.div className="flex flex-col items-center mt-10">
            <div className="flex flex-col rounded-md bg-white items-center">
                {items.map((item) => (
                    <div
                        onClick={item?.func}
                        key={item.name} className="rounded-md p-2 hover:bg-[#fed2cf] duration-200 cursor-pointer">
                        {item.icon}
                    </div>
                ))}
            </div>
            <div className="mt-4 flex flex-col items-center rounded-md bg-white">
                <div className="rounded-md p-2 hover:bg-[#fed2cf] duration-200 cursor-pointer">
                    <UndoIcon />
                </div>
                <div className="rounded-md p-2 hover:bg-[#fed2cf] duration-200 cursor-pointer">
                    <RedoIcon />
                </div>
            </div>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-md p-2 bg-white hover:bg-[#fed2cf] duration-200 cursor-pointer mt-12">
                <SensorWindowIcon />
            </div>
        </motion.div>
    )
};


export default InitialSidebar;