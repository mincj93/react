import React from 'react';
import { motion } from "framer-motion";

const MainPage = () => {
    const routeVariants = {
        initial: {
            y: '100vh'
        },
        final: {
            y: '0vh'
        }
    }

	return (
        <motion.div 
        variants={routeVariants}
        initial="initial"
        animate="final"
        style={{backgroundColor : 'aqua'}}>
		    <h1><a href='/SubPage'>SubPage 이동</a></h1>
        </motion.div>
	);
};

export default MainPage;