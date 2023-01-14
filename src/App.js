
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import { PageScroll } from "./PageScrolling"

import AllUserJSON from './data/customer_summary.json'


//////////////////////////////////////////////////
const userKeys = Object.keys(AllUserJSON);

const userNumbers = Object.keys(AllUserJSON[userKeys[0]])
const userObjects = []; // this is the object that group info per user

userNumbers.forEach((userNumber) => {
  const newUserObject = {};
  userKeys.forEach((key) => {
    newUserObject[key] = AllUserJSON[key][userNumber]
  })
  userObjects.push(newUserObject);
})

console.log(userObjects);


///////////////////////////////////////////////////


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