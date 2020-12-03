import React from 'react';
import { motion } from 'framer-motion'

export function Modal({ selectedImg, setSelectedImg }) {

    const handleClick = (e) => {
        //check if the click lands on the backdrop, not the img
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null)
        }
    }

    return (
        <motion.div
            className="backdrop"
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img
                src={selectedImg}
                alt="enlarged image"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>
    )
}