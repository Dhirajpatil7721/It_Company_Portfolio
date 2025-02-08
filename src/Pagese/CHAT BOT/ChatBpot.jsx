import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

export default function ChatBot() {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", sender: "bot" },
    ]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages([...messages, userMessage]);
        setInput("");

        setTimeout(() => {
            const botReply = { text: getBotResponse(input), sender: "bot" };
            setMessages((prevMessages) => [...prevMessages, botReply]);
        }, 500);
    };

    const getBotResponse = (message) => {
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes("hello")) return "Hi there!";
        if (lowerMessage.includes("How are you")) return "I am Fine!, What about you! ";
        if (lowerMessage.includes("i am also")) return "That's Great! ";
        if (lowerMessage.includes("help")) return "Sure! What do you need help with?";
        return "I'm not sure how to respond to that.";
    };

    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
            {isOpen && (
                <div className="w-80 bg-white border rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <div className="h-64 overflow-auto p-3 bg-gray-100">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 my-1 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="flex p-2 border-t bg-gray-50">
                        <input
                            className="flex-grow border rounded-lg p-2 focus:outline-none"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                        />
                        <button onClick={handleSend} className="ml-2 p-2 bg-blue-600 text-white rounded-lg">
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="mt-2 p-3 bg-blue-600 text-white rounded-full shadow-lg">
                <MessageCircle size={24} />
            </button>
        </div>
    );
}