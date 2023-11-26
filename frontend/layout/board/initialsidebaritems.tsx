import NavigationIcon from '@mui/icons-material/Navigation';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import WidgetsIcon from '@mui/icons-material/Widgets';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CommentIcon from '@mui/icons-material/Comment';
import CropIcon from '@mui/icons-material/Crop';
import IosShareIcon from '@mui/icons-material/IosShare';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CropDinIcon from '@mui/icons-material/CropDin';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PanoramaHorizontalIcon from '@mui/icons-material/PanoramaHorizontal';
import PanoramaWideAngleIcon from '@mui/icons-material/PanoramaWideAngle';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { Nunito } from 'next/font/google';
import { CircleIcon, TriangleIcon } from '@/utils/shapes';
import { CurvedLineIcon, DirectionalLineIcon, StraightArrowIcon, StraightLineIcon } from '@/utils/lines';
import { AddTextIcon, StickyNoteIcon } from '@/utils/useText';
import { Divider } from '@mui/material';


const nunito = Nunito({
    subsets: ['latin-ext'],
    weight: ['300'],
});


const shapes = [
    {
        icon: <CropDinIcon />,
        name: 'Rectangle'
    },
    {
        icon: <CropPortraitIcon />,
        name: 'Square'
    },
    {
        icon: <CircleIcon />,
        name: 'Circle'
    },
    {
        icon: <TriangleIcon />,
        name: 'Line'
    },
    {
        icon: <StarOutlineIcon />,
        name: 'Star'
    },
    {
        icon: <ChatBubbleOutlineIcon />,
        name: 'Speech bubble'
    },
    {
        icon: <FavoriteBorderIcon />,
        name: 'Heart'
    },
    {
        icon: <PanoramaHorizontalIcon />,
        name: 'Arrow'
    },
    {
        icon: <PanoramaWideAngleIcon />,
        name: 'Triangle'
    }
]


const lines = [
    {
        name: 'Straight line',
        icon: <StraightLineIcon />
    },
    {
        name: "Straight arrow",
        icon: <StraightArrowIcon />
    },
    {
        name: "Curved line",
        icon: <CurvedLineIcon />
    },
    {
        name: "directional line",
        icon: <DirectionalLineIcon />
    }
]


const stickyNotes = [
    '#FFCCCB',
    '#FFB6C1',
    '#FFA07A',
    '#FF8C00',
    '#FFD700',
    '#FFFF00',
    '#ADFF2F',
    '#7FFF00',
    '#00FA9A',
    '#00CED1',
    '#87CEEB',
    '#6495ED',
    '#9370DB',
    '#8A2BE2',
    '#4B0082',
    '#800080',
];



export const items = [
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
        icon: <AddTextIcon />,
    },
    {
        name: 'Sticky note',
        icon:
            <Popover placement='right'>
                <PopoverTrigger>
                    <StickyNote2Icon />
                </PopoverTrigger>
                <PopoverContent className='ml-2 bg-white rounded-md flex flex-col p-2 h-[640px] w-[180px] mt-20 gap-3 justify-start'>
                    <button className={`w-full py-2 text-center bg-neutral-100 hover:bg-neutral-200 duration-150 ${nunito.className} rounded-md`}>
                        View templates
                    </button>
                    <Divider className='text-neutral-500 w-full mb-3' />
                    <div className="grid grid-cols-2 gap-4">
                        {
                            stickyNotes.map((color) => ( 
                                <StickyNoteIcon key={color} color={color} />
                            ))
                        }
                    </div>
                    <p className={`${nunito.className} border-dashed border-b-black border-b-[1px] border-spacing-1 mt-3 justify-end flex hover:text-blue-600 hover:border-blue-600 duration-150 cursor-pointer`}>
                        Bulk mode
                    </p>
                </PopoverContent>
            </Popover>,

    },
    {
        name: 'Shapes',
        icon:
            <Popover placement='right'>
                <PopoverTrigger>
                    <WidgetsIcon />
                </PopoverTrigger>
                <PopoverContent className='ml-2 bg-white rounded-md flex flex-col p-2'>
                    <div className="grid grid-cols-3">
                        {
                            shapes.map((shape) => (
                                <div
                                    key={shape.name}
                                    className="rounded-md p-2 hover:bg-[#fed2cf] duration-200 cursor-pointer m-0.5">
                                    {shape.icon}
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <button className={`w-full py-2 text-center bg-neutral-200 ${nunito.className} rounded-md`}>
                            All shapes
                        </button>
                        <p className={`text-xs ${nunito.className} text-neutral-400 text-center`}>
                            Flowchart, AWS, UML
                        </p>
                    </div>
                </PopoverContent>
            </Popover>,

    },
    {
        name: 'Connection line',
        icon:
            <Popover placement='right'>
                <PopoverTrigger>
                    <NorthEastIcon />
                </PopoverTrigger>
                <PopoverContent className='ml-2 bg-white rounded-md flex flex-col'>
                    {
                        lines.map((line) => (
                            <div
                                key={line.name}
                                className="rounded-md p-2 hover:bg-[#fed2cf] duration-200 cursor-pointer m-[1px]">
                                {line.icon}
                            </div>
                        ))
                    }
                </PopoverContent>
            </Popover>
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