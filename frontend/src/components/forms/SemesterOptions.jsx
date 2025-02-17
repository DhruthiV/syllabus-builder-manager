import { Form } from 'react-bootstrap';

function SemesterOptions({ formData, handleChange, isEditMode }) {
    const getSemesterOptions = () => {
        return formData.program === "MCA" ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6];
    };;

    return (
        <>
            <Form.Group>
                <Form.Label>Program</Form.Label>
                <Form.Control
                    as="select"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    disabled={isEditMode}
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
                        {getSemesterOptions().map((sem, index) => (
                            <option key={index} value={sem}>{`Semester ${sem}`}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
            )}
        </>
    );
}

export default SemesterOptions;
