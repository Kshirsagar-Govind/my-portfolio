import './index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./WorkPages/main-page";
import NoteItDownPage from "./WorkPages/note-it-down-page";
import HackxPage from "./WorkPages/hackx-node-page";
import MakeNotePage from "./WorkPages/make-note-page";
import EcomPage from "./WorkPages/ecom-page";
import ResumeBuilderPage from "./WorkPages/resume-builder-page";
import FormsPage from "./WorkPages/form-creater";

function App() {
  return (
    <div className="w-full h-screen flex justify-center bg-pure">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>


          <Route
            exact path="/project-resume-builder" element={<ResumeBuilderPage />}></Route>

          <Route
            exact path="/project-note-it-down" element={<NoteItDownPage />}></Route>

          <Route
            exact path="/project-hack-x-node" element={<HackxPage />}
          >

          </Route>

          <Route
            exact path="/project-make-note" element={<MakeNotePage />}
          >

          </Route>

          <Route
            exact path="/project-ecom" element={<EcomPage />}
          >

          </Route>


          <Route
            exact path="/project-forms" element={<FormsPage />}
          >

          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
