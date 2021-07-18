import React, { useState } from 'react'
// import { Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button, Form } from 'react-bootstrap'
function AddFolderButton() {
    const [open, setOpen] = useState(false);

    const closeModel = () => {
        setOpen(false)
    }
    const openModel = () => {
        setOpen(true);
    }
    return (
        <>
            <button onClick={openModel}>
                <FontAwesomeIcon icon={faFolderPlus} />
            </button>

            <Modal show = {open} onHide = {closeModel}>
                <Form>
                    <Modal.Dialog>


                        <Modal.Body>
                            <Form.Group>
                                <Form.Label>
                                    Folder Name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeModel}>Close</Button>
                            <Button variant="primary" >Add Folder</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Form>
            </Modal>

        </>
    )
}

export default AddFolderButton;