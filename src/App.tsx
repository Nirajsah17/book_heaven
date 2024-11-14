import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;