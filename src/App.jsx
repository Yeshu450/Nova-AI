import React from 'react';
import './App.css';
import Nova from './pages/Nova';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<div className=' flex flex-col h-screen w-screen'>
			<Header />
			<Nova />
			<Footer />
		</div>
	);
}

export default App;
