import React from 'react';
import { AnimatePresence } from "framer-motion"; // 화면전환 애니메이션
import Nav from './Nav';

import Main from './Main';

const App = () => {
	return (
		<>
			<Nav />
			<div className='App'>
			</div>
		</>
	);
};

export default App;