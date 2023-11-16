import { FabricSidebarProps } from "@/types";
import useFabric from "@/utils/useFabric";
import { useState } from "react";
import InitialSidebar from "./InitialSidebar";
import SlideSidebar from "./SlideSidebar";
import { motion } from "framer-motion";



const FabricSidebar: React.FC<FabricSidebarProps> = ({
    editor
}) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const { addCircle } = useFabric(editor);

    return (
        <motion.div 
        initial={{ x: -308}}
        animate={{ x: isOpen ? 0 : -308}}
        transition={{ duration: 0.2 }}
        className=" h-full left-0 p-2 absolute z-30 flex flex-row">
            <SlideSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <InitialSidebar  addCircle={addCircle} setIsOpen={setIsOpen} isOpen={isOpen} />
       </motion.div>
    )
}


export default FabricSidebar;


