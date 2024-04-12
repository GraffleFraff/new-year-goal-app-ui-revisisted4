import { Modal, Button, Form } from "react-bootstrap";
import React, { useEffect, useRef } from "react";
import { JournalPlus } from "react-bootstrap-icons";

const WeeklyJournalModal = ({ show, handleClose, handleSubmit }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    }
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header style={{ backgroundColor: "#e9ecef" }} closeButton>
        <Modal.Title>
          <JournalPlus />
          &nbsp;
          <b>Weekly Journal</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>
              Reflect on the week. What went well? What didn't go well?
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your thoughts"
              ref={inputRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Are the goals you are setting in line with your high-level vision?
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your thoughts"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              What adjustments could you make heading into the next week to help
              you accomplish your goals?
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your thoughts"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ borderTop: "none" }}>
        <Button variant="outline-secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WeeklyJournalModal;
