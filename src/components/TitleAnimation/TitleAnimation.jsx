import React from 'react';
import { motion } from 'motion/react'

const TitleAnimation = ({children}) => {
    return (
         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            {children}
        </motion.div>
    );
};

export default TitleAnimation;