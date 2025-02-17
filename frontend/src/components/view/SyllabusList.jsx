import { Table } from "react-bootstrap";
import SyllabusItem from "./SyllabusItem";

function SyllabusList({ syllabus}) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Program</th>
                    <th>Finalized</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {syllabus.map((s) => (
                    <SyllabusItem key={s.courseCode} syllabus={s}/>
                ))}
            </tbody>
        </Table>
    );
}

export default SyllabusList;
