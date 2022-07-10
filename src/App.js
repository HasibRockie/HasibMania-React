import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import Personals from "./Pages/Personals/Personals";
import Others from "./Pages/Others/Others";
import NotFound from "./Pages/NotFound/NotFound";
import Gratitude from "./Pages/Gratitude/Gratitude";
import Post02 from "./Pages/Posts/Post02/Post02";
import Post01 from "./Pages/Posts/Post01/Post01";
import Post03 from "./Pages/Posts/Post03/Post03";
import Post04 from "./Pages/Posts/Post04/Post04";
import Post05 from "./Pages/Posts/Post05/Post05";
import Post06 from "./Pages/Posts/Post06/Post06";
import Post07 from "./Pages/Posts/Post07/Post07";
import Post08 from "./Pages/Posts/Post08/Post08";
import Post09 from "./Pages/Posts/Post09/Post09";
import Post10 from "./Pages/Posts/Post10/Post10";
import Post11 from "./Pages/Posts/Post11/Post11";
import Post12 from "./Pages/Posts/Post12/Post12";
import Post13 from "./Pages/Posts/Post13/Post13";
import Post14 from "./Pages/Posts/Post14/Post14";
import Post15 from "./Pages/Posts/Post15/Post15";
import NewPost from './Pages/NewPost/NewPost';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/blogs" element={<Blogs />}></Route>
          <Route exact path="/personals" element={<Personals />}></Route>
          <Route exact path="/others" element={<Others />}></Route>
          <Route exact path="/gratitude" element={<Gratitude />}></Route>
          <Route exact path="/lnqiseh" element={<NewPost />}></Route>
          <Route path="posts">
            <Route path="01" element={<Post01 />} />
            <Route path="02" element={<Post02 />} />
            <Route path="03" element={<Post03 />} />
            <Route path="04" element={<Post04 />} />
            <Route path="05" element={<Post05 />} />
            <Route path="06" element={<Post06 />} />
            <Route path="07" element={<Post07 />} />
            <Route path="08" element={<Post08 />} />
            <Route path="09" element={<Post09 />} />
            <Route path="10" element={<Post10 />} />
            <Route path="11" element={<Post11 />} />
            <Route path="12" element={<Post12 />} />
            <Route path="13" element={<Post13 />} />
            <Route path="14" element={<Post14 />} />
            <Route path="15" element={<Post15 />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
