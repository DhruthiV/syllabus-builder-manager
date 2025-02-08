import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function SyllabusItem({ syllabus, onSelect }) {

    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/syllabus/${syllabus.courseCode}`)
    }

    const handleEdit = () => {
        navigate(`/syllabus/edit/${syllabus.courseCode}`)
    }


    return (
        <tr>
            <td>{syllabus.courseCode}</td>
            <td>{syllabus.courseName}</td>
            <td>{syllabus.program}</td>
            <td>{syllabus.finalized ? "Yes" : "No"}</td>

            <td>
                <Button
                    variant="info"
                    onClick={() => navigate(`/syllabus/${syllabus.courseCode}`)}
                >
                    View
                </Button>
                {!syllabus.finalized && (
                    <Button
                        variant="warning"
                        onClick={() => navigate(`/syllabus/edit/${syllabus.courseCode}`)}
                    >
                        Edit
                    </Button>
                )}


            </td>
        </tr>
    );
}

export default SyllabusItem;