import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

export function ProgressBar({ file, setFile }) {

    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <motion.div className="progress-bar"
            // style={{ width: progress + '%' }} // before animation
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        >

        </motion.div>
    )
}


