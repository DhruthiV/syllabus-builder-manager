import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import ViewSyllabus from "./pages/ViewSyllabus";
import SingleSyllabusEdit from './components/edit/SingleSyllabusEdit'
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included
import SingleSyllabusView from "./components/view/SingleSyllabusView";

function App() {
    return (
        <Router>
            <Container>
                <h1>Syllabus Management</h1>
                <Routes>
                    <Route path="/" element={<ViewSyllabus />} />
                    <Route path="/syllabus/:courseCode" element={<SingleSyllabusView />} />
                    <Route path="/syllabus/edit/:courseCode" element={<SingleSyllabusEdit />} />


                </Routes>
            </Container>
        </Router>
    );
}

export default App;
