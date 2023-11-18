import { motion } from "framer-motion"
import React from "react";
import { Roboto } from "next/font/google";
import CloseIcon from '@mui/icons-material/Close';


const roboto = Roboto({
    subsets: ['latin-ext'],
    weight: ['400'],
})


const SlideSidebar = ({
    isOpen,
    setIsOpen
}: {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <motion.div 
            initial={{ x: -1000 }}
            animate={{ x: isOpen ? 0 : -1000}}
            transition={{ duration: 0.2 }}
            className="mt-5 h-[82.5%] w-[300px] bg-white rounded-md mr-2 flex flex-col"
        >
            <div className="w-full flex flex-row justify-between items-center  border-[0.5px] border-b-neutral-400 rounded-t-md">
                <div className="flex flex-row items-center">
                    <p className={`p-2 flex items-center justify-center ${roboto.className}`}>
                        Frames
                    </p>
                    <p className={`p-2 flex items-center justify-center ${roboto.className}`}>
                        Activities
                    </p>
                </div>
                <span className="px-2">
                    <CloseIcon onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-blue-600" />
                </span>
            </div>
        </motion.div>
    )
}


export default SlideSidebar;