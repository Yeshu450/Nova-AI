# 🤖 Nova AI Chatbot (Frontend)

**Nova** is a sleek, responsive AI chatbot interface built using **React** and styled with **Tailwind CSS**. It integrates **Google Generative AI (Gemini API)** to provide real-time conversational responses.

🔗 [Live Demo](https://your-live-link.netlify.app) <!-- Replace with actual deployed link -->

---

## ✨ Features

-   ⚡ Powered by Google Gemini (generative AI)
-   🗨️ Interactive chat interface
-   🧠 Stores and displays chat history
-   📱 Responsive sidebar with toggle menu
-   🌐 Simple and elegant UI using Tailwind CSS
-   ♻️ Clear chat with "New Chat" button

---

## 🛠️ Technologies Used

-   React
-   Tailwind CSS
-   Google Generative AI SDK (`@google/genai`)
-   Vite (build tool)
-   ES6+ JavaScript

---

## 📁 Folder Structure

```
nova-ai/
├── src/
│   ├── Nova.jsx          # Main chatbot component
│   ├── App.jsx / main.jsx
│   └── index.css         # Tailwind styles
├── public/
│   └── index.html
├── .env                  # Contains API key
├── package.json
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file in the root of your project with the following:

```
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
```

> ⚠️ Never expose your API key in public repositories.

---

## 🚀 How to Run Locally

1. **Install Dependencies**

```bash
npm install
```

2. **Run Development Server**

```bash
npm run dev
```

3. Visit in browser:

```
http://localhost:5173/
```

---

## 📄 Code Highlights

### 🔗 Gemini API Integration

```js
const ai = new GoogleGenAI({ apiKey });
const response = await ai.models.generateContent({
	model: 'gemini-2.0-flash-001',
	contents: input,
});
```

### 🧠 Chat Memory

```js
setChatHistory((prev) => [...prev, { userText: input, aiText: response.text }]);
```

### 📱 Sidebar Toggle

```js
const [sidebarOpen, setSidebarOpen] = useState(true);
<button onClick={() => setSidebarOpen(!sidebarOpen)}>Menu</button>;
```

---

## 📦 Dependencies

-   `react`
-   `@google/genai`
-   `tailwindcss`
-   `vite`

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👤 Author

**Yeswanth Kumar Rallapilla**  
GitHub: [yeshu450](https://github.com/yeshu450)

---

**Nova** — A friendly face to the power of AI 🌟
