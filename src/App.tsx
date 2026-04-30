import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';

// Placeholder for other pages to keep functionality high
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-40 pb-20 bg-slate-950 text-white flex items-center justify-center">
    <div className="text-center px-6">
      <h1 className="text-6xl font-black mb-8 italic tracking-tight">{title}</h1>
      <p className="text-slate-400 text-xl max-w-xl mx-auto leading-relaxed">
        We are currently updating our curriculum for the 2026 session. <br />
        <span className="text-lime-400 font-bold">New syllabus drops next week.</span>
      </p>
      <div className="mt-12">
        <a href="/" className="bg-lime-400 text-black px-8 py-4 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-white transition-all">
          Back to Terminal
        </a>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 font-sans selection:bg-lime-400 selection:text-black">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Placeholder title="PROGRAMS" />} />
          <Route path="/about" element={<Placeholder title="OUR MISSION" />} />
          <Route path="/admissions" element={<Placeholder title="ADMISSIONS" />} />
          <Route path="/blog" element={<Placeholder title="BLOG" />} />
          <Route path="/success" element={<Placeholder title="SUCCESS STORIES" />} />
          <Route path="/apply" element={<Placeholder title="APPLICATION" />} />
          <Route path="/courses/:id" element={<Placeholder title="COURSE CURRICULUM" />} />
        </Routes>

        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
