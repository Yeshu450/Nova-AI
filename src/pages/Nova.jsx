import React from 'react';
import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

function Nova() {
	const [input, setInput] = useState('');
	const [chatHistory, setChatHistory] = useState([]);
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
	console.log('API Key Loaded');

	const handleSend = async () => {
		if (input.trim() !== '') {
			const ai = new GoogleGenAI({ apiKey });

			const response = await ai.models.generateContent({
				model: 'gemini-2.0-flash-001',
				contents: input,
			});

			console.log(response.text);

			setChatHistory((prev) => [
				...prev,
				{ userText: input, aiText: response.text },
			]);
			setInput('');
		}
	};

	const handleNewChat = () => {
		setChatHistory([]);
		setInput('');
	};

	return (
		<main className='flex h-screen w-screen font-sans overflow-auto'>
			<button
				className='absolute top-6 left-4 z-50 bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 rounded'
				onClick={() => setSidebarOpen(!sidebarOpen)}
			>
				Menu
			</button>
			<div
				className={`fixed top-0 left-0 z-40 h-full w-48 bg-gray-900 text-white p-4 flex-col transition-transform duration-300 ease-in-out 
				${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<button
					className=' fixed top-18 left-4 z-40 bg-blue-600 hover:bg-blue-700 px-2 py-2 rounded mb-4 '
					onClick={handleNewChat}
				>
					New Chat
				</button>
			</div>

			<div className='flex flex-1 flex-col bg-gray-600 '>
				<div className='flex-1 flex-col bg-white m-2 p-2 overflow-auto border gap-5'>
					{chatHistory.map((val, ind) => (
						<div key={ind} className='flex flex-col gap-4'>
							<div className='flex justify-end'>
								<div className='bg-blue-100 text-black rounded-lg p-3 max-w-[70%] shadow'>
									<p>
										<strong>You:</strong> {val.userText}
									</p>
								</div>
							</div>

							<div className='flex justify-start'>
								<div className='bg-gray-100 text-black rounded-lg p-3 max-w-[70%] shadow'>
									<p>
										<strong>Nova:</strong> {val.aiText}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='p-4 bg-white flex gap-4 border-t '>
					<input
						type='text'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder='Type a message...'
						className='flex-1 border border-gray-900 rounded-lg px-4 py-2 outline-none '
					/>
					<button
						onClick={handleSend}
						className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'
					>
						Send
					</button>
				</div>
			</div>
		</main>
	);
}

export default Nova;
