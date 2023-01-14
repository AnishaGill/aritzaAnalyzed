
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import { PageScroll } from "./PageScrolling"

function App() {
  return (
    <main className="container">
        <PageScroll />;
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<welcomePage />}></Route>
          <Route path="/" element={<brandPage />}></Route>
          <Route path="/" element={<colourPage />}></Route>
          <Route path="/" element={<monthMoneyPage />}></Route>
          <Route path="/" element={<moneyPage />}></Route>
            {/* included do gooded-ness */}
          <Route path="/" element={<recommenedPage />}></Route>
        </Routes>
        </BrowserRouter>
        
    </main>
  );
}

export default App;
