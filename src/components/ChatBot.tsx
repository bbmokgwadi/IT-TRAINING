import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your DevAcademy guide. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, isBot: false }];
    setMessages(newMessages);
    setInput("");

    // Simple auto-reply
    setTimeout(() => {
      let reply = "That's a great question! Our admissions team would love to discuss that with you. Would you like to book a call?";
      if (input.toLowerCase().includes('price') || input.toLowerCase().includes('cost')) {
        reply = "Our courses range from $899 to $1,499. We offer flexible payment plans and scholarships!";
      } else if (input.toLowerCase().includes('start') || input.toLowerCase().includes('apply')) {
        reply = "You can start your application right on the homepage! Click the 'Enroll Now' button to begin.";
      }
      setMessages([...newMessages, { text: reply, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 h-96 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center text-black">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Academy Guide</h4>
                  <p className="text-[10px] text-lime-400 uppercase font-black tracking-widest">Active Now</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-hide">
              {messages.map((m, idx) => (
                <div key={idx} className={m.isBot ? 'flex flex-col' : 'flex flex-col items-end'}>
                  <div className={`p-3 rounded-2xl text-xs leading-relaxed max-w-[85%] ${m.isBot ? 'bg-white/5 text-slate-300 rounded-tl-none' : 'bg-lime-400 text-black font-medium rounded-tr-none'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/10">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-slate-950 border border-white/10 rounded-full px-4 py-2 text-xs text-white focus:border-lime-400 outline-none transition-all"
                />
                <button type="submit" className="absolute right-2 top-1.5 text-lime-400 hover:text-white transition-colors">
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-lime-400 text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:scale-110 transition-transform active:scale-95"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
