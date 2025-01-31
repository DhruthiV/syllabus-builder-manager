import { Form } from 'react-bootstrap';

function SemesterOptions({ formData, handleChange }) {
    const getSemesterOptions = () => {
        return formData.program === "MCA"
            ? ["Semester 1", "Semester 2", "Semester 3", "Semester 4"]
            : ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6"];
    };

    return (
        <>
            <Form.Group>
                <Form.Label>Program</Form.Label>
                <Form.Control
                    as="select"
                    name="program"
                    value={formData.program}
                    onChange={handleChange} // Passing handleChange here
                    required
                >
                    <option value="">Select Program</option>
                    <option value="MCA">MCA</option>
                    <option value="BCA">BCA</option>
                </Form.Control>
            </Form.Group>

            {formData.program && (
                <Form.Group>
                    <Form.Label>Semester</Form.Label>
                    <Form.Control
                        as="select"
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange} // This is important for keeping the field controlled
                        required
                    >
                        <option value="">Select Semester</option>
                        {getSemesterOptions().map((semester, index) => (
                            <option key={index} value={semester}>{semester}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
            )}
        </>
    );
}

export default SemesterOptions;
