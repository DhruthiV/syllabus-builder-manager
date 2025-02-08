import { Form } from 'react-bootstrap';

function UnitSection({ unit, formData, handleChange }) {
    const handleTextAreaChange = (e, field) => {
        const { value } = e.target;
        // Split by commas, trim extra spaces, and filter out empty values
        const updatedArray = value.split(',')
            .map(item => item.trim())
            .filter(item => item !== "");

        handleChange({
            target: {
                name: `unit${unit}_${field}`,
                value: updatedArray
            }
        });
    };

    return (
        <>
            <Form.Group>
                <Form.Label>Unit {unit} Topics</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name={`unit${unit}_topics`}
                    value={formData.syllabus[`unit${unit}`].topics.join(', ')}
                    onChange={(e) => handleTextAreaChange(e, 'topics')}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Unit {unit} Experiential Learning</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name={`unit${unit}_experientialLearning`}
                    value={formData.syllabus[`unit${unit}`].experientialLearning.join(', ')}
                    onChange={(e) => handleTextAreaChange(e, 'experientialLearning')}
                />
            </Form.Group>
        </>
    );
}

export default UnitSection;
