import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home.js';
import About from '../pages/About.js';


export default function App() {
return (
<div>
<nav>
<Link to="/">Home</Link> | <Link to="/about">About</Link>
</nav>


<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
</div>
);
}