import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"; // 화면전환 애니메이션

import MainPage from './MainPage';
import SubPage from './SubPage';

const App = () => {

	
	return (
		<div className='App'>
			<BrowserRouter>
				<AnimatePresence>
				<Routes>
					<Route path="/" element={<MainPage />}></Route>
					<Route path="SubPage" element={<SubPage />}></Route>
				</Routes>
				</AnimatePresence>
			</BrowserRouter>
		</div>
	);
};

export default App;