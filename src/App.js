import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Articles from './routes/Articles';
import Contact from './routes/Contact';
import SingleArticle from './routes/SingleArticle';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/:articleId" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
