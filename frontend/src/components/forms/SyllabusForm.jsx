import { Form } from 'react-bootstrap';
import SemesterOptions from './SemesterOptions';
import UnitSection from './UnitSection';

function SyllabusForm({ formData, setFormData, isEditMode = false }) {
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "program") {
            setFormData({
                ...formData,
                [name]: value,
                semester: "" 
            });
        } else if (name.startsWith("unit")) {
            const [unit, field] = name.split('_');

            // If the field is topics or experientialLearning, split values into an array
            if (field === 'topics' || field === 'experientialLearning') {
                setFormData({
                    ...formData,
                    syllabus: {
                        ...formData.syllabus,
                        [unit]: {
                            ...formData.syllabus[unit],
                            [field]: updatedValue
                        }
                    }
                });
            }
        } else {
            // For other fields like year, program, etc.
            setFormData({ ...formData, [name]: value });
        }
    };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    
    //     if (name === "program") {
    //         setFormData({
    //             ...formData,
    //             [name]: value,
    //             semester: "" // Reset semester when program changes
    //         });
    //     } else if (name.startsWith("unit")) {
    //         const [unit, field] = name.split('_');
    
    //         if (field === 'topics' || field === 'experientialLearning') {
    //             setFormData({
    //                 ...formData,
    //                 syllabus: {
    //                     ...formData.syllabus,
    //                     [unit]: {
    //                         ...formData.syllabus[unit],
    //                         [field]: value.split(',')  // Convert input to array
    //                     }
    //                 }
    //             });
    //         }
    //     } else {
    //         setFormData({ ...formData, [name]: value });
    //     }
    // };
    

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
                isEditMode={isEditMode}
            />

            <Form.Group>
                <Form.Label>Course Code</Form.Label>
                <Form.Control
                    type="text"
                    name="courseCode"
                    value={formData.courseCode}
                    onChange={handleChange}
                    disabled={isEditMode}
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
