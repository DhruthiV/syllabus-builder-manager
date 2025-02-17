import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Spinner, Alert } from "react-bootstrap";

function SingleSyllabusView() {
    const { courseCode } = useParams();
    const [syllabus, setSyllabus] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchSyllabus() {
            try {
                const response = await fetch(`http://localhost:5000/api/syllabus/${courseCode}`);
                if (!response.ok) throw new Error("Syllabus not found");

                const data = await response.json();
                setSyllabus(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchSyllabus();
    }, [courseCode]);

    if (loading) return <Spinner animation="border" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
        <Container>
            <Card>
                <Card.Body>
                    <h3>{syllabus.courseName} ({syllabus.courseCode})</h3>
                    <p><strong>Program:</strong> {syllabus.program}</p>
                    <p><strong>Year:</strong> {syllabus.year}</p>
                    <p><strong>Anchor Faculty:</strong> {syllabus.anchorFaculty}</p>
                    <h5>Syllabus</h5>
                    {syllabus.syllabus && Object.keys(syllabus.syllabus).map(unit => (
                        <div key={unit}>
                            <h6>Unit {unit}</h6>
                            <p><strong>Topics:</strong> {syllabus.syllabus[unit].topics}</p>
                            <p><strong>Experiential Learning:</strong> {syllabus.syllabus[unit].experientialLearning}</p>
                        </div>
                    ))}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default SingleSyllabusView;
