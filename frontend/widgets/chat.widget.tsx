import ModeCommentIcon from '@mui/icons-material/ModeComment';


const ChatWidget = () => {
    return (
        <div className="absolute z-20 bottom-20 right-16 p-4 bg-[#2A333C] rounded-lg flex justify-center items-center cursor-pointer shadow-md">
            <ModeCommentIcon className='text-white' />
        </div>
    )
}


export default ChatWidget;