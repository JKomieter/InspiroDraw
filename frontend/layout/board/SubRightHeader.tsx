import NearMeIcon from '@mui/icons-material/NearMe';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CommentIcon from '@mui/icons-material/Comment';
import { Avatar, Divider } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const SubRightHeader = () => {

    const items = [
        {
            name: "Hide collaborators' cursors",
            icon: <NearMeIcon />
        },
        {
            name: "Reactions",
            icon: <CelebrationIcon />
        },
        {
            name: "Comments",
            icon: <CommentIcon />
        }
    ]

    return (
        <div className='flex flex-row rounded-md bg-white p-1 items-center transition-all overflow-hidden'>
            {
                items.map((item) => (
                    <div
                        key={item.name}
                        className="p-2 rounded-md hover:bg-[#fed2cf] duration-200 cursor-pointer">
                        {item.icon}
                    </div>
                ))
            }
            <Avatar sx={{ width: 30, height: 30, bgcolor: 'blue' }}  className='p-2 mx-1'>J</Avatar>
            <div className="p-2 rounded-md hover:bg-[#fed2cf] duration-200 cursor-pointer">
                <NotificationsNoneIcon />
            </div>
            <div className="flex flex-row items-center rounded-md bg-slate-200 py-1 mx-1">
                <p className='px-3 text-xs font-semibold cursor-pointer'>Present</p>
                <Divider orientation="vertical" flexItem />
                <span className='px-2 cursor-pointer'>
                    <KeyboardArrowDownIcon />
                </span>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold mx-1 rounded-md">
                Share
            </button>
        </div>
    )
};


export default SubRightHeader;