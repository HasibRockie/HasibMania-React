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
import NewPost from "./Pages/NewPost/NewPost";
import Post from "./Pages/Posts/Post";
import AllPosts from "./Pages/AllPosts/AllPosts";
import AddGratitude from "./Pages/AddGratitude/AddGratitude";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/posts" element={<AllPosts />}></Route>
          <Route exact path="/blogs" element={<Blogs />}></Route>
          <Route exact path="/personals" element={<Personals />}></Route>
          <Route exact path="/others" element={<Others />}></Route>
          <Route exact path="/gratitude" element={<Gratitude />}></Route>
          <Route exact path="/lnqiseh" element={<NewPost />}></Route>
          <Route
            exact
            path="/lnqiseh/add-gratitude"
            element={<AddGratitude />}
          ></Route>
          <Route path="posts">
            <Route path=":postId" element={<Post />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
