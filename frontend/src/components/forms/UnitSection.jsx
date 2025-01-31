import { Form } from 'react-bootstrap';
function UnitSection({unit, formData, handleChange}){
    return(
        <>
        <Form.Group>
                <Form.Label>Unit {unit} Topics</Form.Label>
                <Form.Control as="textarea" rows={3} name={`unit${unit}_topics`} value={formData.syllabus[`unit${unit}`].topics} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
                <Form.Label>Unit {unit} Experiential Learning</Form.Label>
                <Form.Control as="textarea" rows={3} name={`unit${unit}_experientialLearning`} value={formData.syllabus[`unit${unit}`].experientialLearning} onChange={handleChange} />
        </Form.Group>
        </>
    )
}
export default UnitSection