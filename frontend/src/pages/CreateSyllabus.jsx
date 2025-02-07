import { useState, useEffect } from 'react'
import { Container, Card } from 'react-bootstrap'
import SaveButton from "../components/ui/SaveButton";
import FinalizeButton from "../components/ui/FinalizeButton";
import SyllabusForm from "../components/forms/SyllabusForm";

function CreateSyllabus({ loadedSyllabus }) {

    const [formData, setFormData] = useState({
        year: "2025",  // Example: Year of the syllabus
        program: "MCA",  // Example: Master of Computer Applications
        semester: 1,
        courseCode: "CS501",  // Example: Course Code
        courseName: "Advanced Data Structures",  // Example: Course Name
        anchorFaculty: "Dr. John Doe",  // Example: Faculty Name
        syllabus: {
            unit1: {
                topics: ["Introduction to Trees",
                    "Binary Trees",
                    "AVL Trees"],
                experientialLearning: ["Hands-on implementation of AVL Trees in Python"]
            },
            unit2: {
                topics: ["Graph Theory",
                    "BFS",
                    "DFS",
                    "Shortest Path Algorithms"],
                experientialLearning: ["Developing a real-world shortest path finder using Dijkstra's algorithm"]
            },
            unit3: {
                topics: ["Sorting & Searching Techniques",
                    "Hashing"],
                experientialLearning: ["Comparative analysis of sorting techniques using large datasets"]
            },
            unit4: {
                topics: ["Dynamic Programming",
                    "Greedy Algorithms"],
                experientialLearning: ["Solving real-world optimization problems using dynamic programming"]
            }
        },
        finalized: false  // Add this to track if the syllabus is finalized
    });

    const [isSaved, setIsSaved] = useState(false);
    const [isFinalized, setIsFinalized] = useState(false);



    //Load the syllabus data when it is passed from ViewSyllabus

    useEffect(() => {
        if (loadedSyllabus) {
            setFormData(loadedSyllabus)
            setIsSaved(true)
            setIsFinalized(loadedSyllabus.finalized)
        }
    }, [loadedSyllabus])



    return (
        <Container>
            <Card title="Create Syllabus">
                <SyllabusForm
                    formData={formData}
                    setFormData={setFormData}
                />


                <SaveButton
                    formData={formData}
                    disabled={isSaved}
                    isSaved={isSaved}
                    setIsSaved={setIsSaved}
                />
                <FinalizeButton
                    courseCode={formData.courseCode}
                    disabled={!isSaved || isFinalized}
                    isFinalized={isFinalized}
                    setIsFinalized={setIsFinalized}
                />
            </Card>
        </Container>
    )
}
export default CreateSyllabus
