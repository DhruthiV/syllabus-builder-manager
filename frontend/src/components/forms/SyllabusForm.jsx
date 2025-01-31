import { Form } from 'react-bootstrap';
import SemesterOptions from './SemesterOptions';
import UnitSection from './UnitSection';

function SyllabusForm({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "program") {
            // Reset semester when program changes
            setFormData({
                ...formData,
                [name]: value,
                semester: ""  // Reset semester when program changes
            });
        } else if (name.startsWith("unit")) {
            const [unit, field] = name.split('_');
            setFormData({
                ...formData,
                syllabus: {
                    ...formData.syllabus,
                    [unit]: {
                        ...formData.syllabus[unit],
                        [field]: value
                    }
                }
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label>Year</Form.Label>
                <Form.Control
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <SemesterOptions 
                formData={formData} 
                handleChange={handleChange} 
            />

            <Form.Group>
                <Form.Label>Course Code</Form.Label>
                <Form.Control
                    type="text"
                    name="courseCode"
                    value={formData.courseCode}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                    type="text"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Anchor Faculty</Form.Label>
                <Form.Control
                    type="text"
                    name="anchorFaculty"
                    value={formData.anchorFaculty}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Unit Sections */}
            {[1, 2, 3, 4].map((unit) => (
                <UnitSection 
                    key={unit}
                    unit={unit} 
                    formData={formData} 
                    handleChange={handleChange} 
                />
            ))}                
        </Form>
    );
}

export default SyllabusForm;
