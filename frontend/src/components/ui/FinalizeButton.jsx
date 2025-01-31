import { useState } from 'react';
import { Button } from 'react-bootstrap';
import FinalizeConfirmation from '../modals/FinalizeConfirmation';

function FinalizeButton({ disabled, isFinalized, setIsFinalized, courseCode }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmFinalize = async () => {
        setShowModal(false);
        try {
            const response = await fetch(`http://localhost:5000/api/syllabus/finalize/${courseCode}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await response.json();
            if (response.ok) {
                setIsFinalized(true); 
                alert(result.message);  
            } else {
                alert(result.message);  
            }
        } catch (error) {
            console.error('Error finalizing syllabus:', error);
            alert('An error occurred while finalizing the syllabus.');
        }
    };

    return (
        <>
            <Button
                variant={isFinalized ? 'secondary' : 'primary'}
                onClick={handleOpenModal}
                disabled={disabled}
            >
                {isFinalized ? 'Finalized' : 'Finalize'}
            </Button>

            <FinalizeConfirmation
                show={showModal}
                onConfirm={handleConfirmFinalize}
                onClose={handleCloseModal}
            />
        </>
    );
}

export default FinalizeButton;
