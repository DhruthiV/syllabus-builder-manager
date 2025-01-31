import { Modal, Button } from "react-bootstrap";

function FinalizeConfirmation({ show, onConfirm, onClose }) {
    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Finalization</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Once finalized, the syllabus cannot be edited. Do you want to finalize it?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Go Back
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Yes, Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FinalizeConfirmation;
