import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Topbar from './component/Topbar';
import Blog from './component/Blog';
import NotFound from './component/NotFound';
import LastAddedBlog from './component/LastAddedBlog';
import SetupDoc from './component/docs-components/SetupDoc';
import DocsTemplate from './component/DocsTemplate';
import Documents from './component/docs-components/Documents';
import DemoProject from './component/docs-components/DemoProject';
import DocsTutorial from './component/docs-components/DocsTutorial';

function App() {

  return (
    <>
    <Topbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/add-blog">
        <Route  index element={<About />}></Route>
        <Route  path="/add-blog/last-blog" element={<LastAddedBlog />}></Route>
      </Route>
      <Route path="/docs" element={<DocsTemplate/>}>
        <Route  index element={<SetupDoc />}></Route>
        <Route  path="/docs/documents" element={<Documents />}></Route>
        <Route  path="/docs/demo-project" element={<DemoProject />}></Route>
        <Route  path="/docs/tutorial" element={<DocsTutorial />}></Route>
      </Route>
      <Route path="/blog/:id" element={<Blog />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </>
  );
}

export default App;

