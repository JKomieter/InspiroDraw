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
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import CropDinIcon from '@mui/icons-material/CropDin';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PanoramaHorizontalIcon from '@mui/icons-material/PanoramaHorizontal';
import PanoramaWideAngleIcon from '@mui/icons-material/PanoramaWideAngle';


const shapes = [
    {
        icon: <CropDinIcon />,
        func: () => console.log('crop')
    },
    {
        icon: <CropPortraitIcon />,
        func: () => console.log('crop')
    },
    {
        icon: <RadioButtonUncheckedIcon />,
        func: () => console.log('crop')
    },
    {
        icon: <ChangeHistoryIcon />,
        func: () => console.log('crop')
    },
    {
        icon: <StarOutlineIcon />,
        func: () => console.log('crop')
    },
    {
        icon: <ChatBubbleOutlineIcon />,
        func: () => console.log('crop')
    },
    {
        icon: <FavoriteBorderIcon />,
        func: () => console.log('crop') 
    },
    {
        icon: <PanoramaHorizontalIcon />,
        func: () => console.log('crop')
    },
    {
        icon: <PanoramaWideAngleIcon />,
        func: () => console.log('crop')
    }
]



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
        icon: <TextFieldsIcon />,
    },
    {
        name: 'Sticky note',
        icon: <StickyNote2Icon />,

    },
    {
        name: 'Shapes',
        icon: 
        <Dropdown placement='right'>
            <DropdownTrigger>
                <WidgetsIcon />
            </DropdownTrigger>
            <DropdownMenu className='w-[180px] h-[200px] bg-white rounded-md ml-2 flex flex-col'>
                <DropdownItem className='w-full flex flex-row items-center flex-wrap hover:outline-none hover:border-none overflow-hidden'>
                    {
                        shapes.map((shape, index) => (
                            <div key={index} className='p-2 hover:bg-blue-300 rounded-md text-neutral-700'>
                                {shape.icon}
                            </div>
                        ))
                    }
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>,

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