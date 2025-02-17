import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Spinner, Alert } from "react-bootstrap";
import SaveButton from "../components/ui/SaveButton";
import FinalizeButton from "../components/ui/FinalizeButton";
import SyllabusForm from "../components/forms/SyllabusForm";

function EditSyllabus() {
    const { courseCode } = useParams(); // Get course code from URL
    const [formData, setFormData] = useState(null);
    const [isSaved, setIsSaved] = useState(false);
    const [isFinalized, setIsFinalized] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [isEditMode, setIsEditMode] = useState(true);

    useEffect(() => {
        async function fetchSyllabus() {
            try {
                const response = await fetch(`http://localhost:5000/api/syllabus/${courseCode}`);
                if (!response.ok) throw new Error("Syllabus not found");

                const data = await response.json();
                setFormData(data);
                setIsFinalized(data.finalized);
                setIsSaved(true);
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
    if (!formData) return <Alert variant="warning">No syllabus data available</Alert>;

    return (
        <Container>
            <Card title="Edit Syllabus">
                <SyllabusForm
                    formData={formData}
                    setFormData={setFormData}
                    isEditMode={isEditMode}
                />
                <SaveButton
                    formData={formData}
                    disabled={isSaved}
                    isSaved={isSaved}
                    setIsSaved={setIsSaved}
                    setFormData={setFormData}
                    isEditMode={isEditMode}
                />
                <FinalizeButton
                    courseCode={formData.courseCode}
                    disabled={!isSaved || isFinalized}
                    isFinalized={isFinalized}
                    setIsFinalized={setIsFinalized}
                />
            </Card>
        </Container>
    );
}

export default EditSyllabus;
