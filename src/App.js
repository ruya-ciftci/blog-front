import { Routes,Route } from "react-router-dom";

import './App.css';
import HomePage from './pages/Home/HomePage';
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import About from './About/About.jsx'; // About sayfasını import edin

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />}/>
        <Route  path="/blog/:id" element={<ArticleDetailPage />}/>
         <Route path="/about" element={<About />} /> 
      </Routes>

    </div>
  );
}

export default App;
