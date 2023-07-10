import React from 'react';
import { motion } from "framer-motion"; // 화면전환애니메이션

const Main = (props) => {

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
		}

	];
	var random_index = Math.floor(Math.random() * animateVal.length);
	var randomAni = animateVal[random_index];


	return (
		<>
			<motion.div
			animate={randomAni.animate}
			transition={randomAni.transition}
			initial={randomAni.transition}
			>
			<h1>안녕하세요. MainPage.</h1>
			</motion.div>
		</>
	);
};

export default Main;