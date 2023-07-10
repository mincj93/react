import React from 'react';
import { motion } from "framer-motion"; // 화면전환애니메이션
import Nav from './Nav';

    function NotFound({navVal}) {

        console.log({navVal});

        var animateVal = [
            {
                animate: {x:100},
                transition : { duration: 2, type: "spring" }
            },
            {
                animate: {y:100},
                transition : { duration: 2, type: "spring" }
            },
            {
                initial:{ opacity: 0 },
                animate: {x:100, y:100},
                transition : { duration: 2, type: "spring" }
            },
            {
                animate: {x: [0, 100, 0], y: [0, 100, 0] }
            }
    
        ];
        var random_index = Math.floor(Math.random() * animateVal.length);
        var randomAni = animateVal[random_index];


        return (
            <>
                <Nav navVal={navVal}/>
                <motion.div
                animate={randomAni.animate}
                transition={randomAni.transition}
                initial={randomAni.transition}
                >
                    <h1>안녕하세요. NotFoundPage</h1>
                </motion.div>
            </>

        );
    }

export default NotFound;