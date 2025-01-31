import { Button } from "react-bootstrap";

function SaveButton({ disabled, formData, isSaved, setIsSaved }) {

    const handleSave = async () => {

        try {
            const response = await fetch("http://localhost:5000/api/syllabus", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setIsSaved(true);
                alert("Syllabus saved successfully!");
            } else {
                alert("Failed to save syllabus.");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Error saving syllabus.");
        }

    }

    return (
        <Button 
            variant={isSaved ? "secondary" : "success"}  
            onClick={handleSave} 
            disabled={disabled}
        >
            {isSaved ? "Saved" : "Save"} 
        </Button>
    );
}

export default SaveButton;
