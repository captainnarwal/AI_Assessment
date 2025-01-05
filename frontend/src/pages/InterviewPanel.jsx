import React, { useState, useEffect } from 'react';
import { Modal, Button, Typography, List, message } from 'antd';
import { Splitter } from 'antd'; // Ensure this is from the correct package
import InitialSteps from '../components/interview/InitialSteps'; // Import InitialSteps component
import PropTypes from 'prop-types';

const { Title, Text } = Typography;

const InterviewPanel = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isStepsCompleted, setIsStepsCompleted] = useState(false); // Track completion of steps
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questions, setQuestions] = useState([
    'What is your name?',
    'What is your experience in the field?',
    'How do you handle challenges?',
    // Add more questions here
  ]);

  const handleStartInterview = () => {
    message.success('Interview Started');
    setIsModalVisible(false);
    // Your logic for starting the interview here
  };

  const handleStepsCompletion = () => {
    setIsStepsCompleted(true); // Enable the button once all steps are done
  };

  useEffect(() => {
    // Access the webcam stream after closing the modal
    if (!isModalVisible) {
      const videoElement = document.getElementById('webcam-stream');
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => {
            videoElement.srcObject = stream;
          })
          .catch(err => {
            console.error('Error accessing webcam: ', err);
          });
      }
    }
  }, [isModalVisible]);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  return (
    <>
      {/* Modal */}
      <Modal
        title="Welcome"
        open={isModalVisible}
        // onCancel={handleModalClose}
        footer={[
          // Use the Start Interview button, but it's disabled until the steps are completed
          <Button
            key="ok"
            type="primary"
            disabled={!isStepsCompleted}
            onClick={handleStartInterview}
          >
            Start Interview
          </Button>,
        ]}
        style={{ top: '20%' }}
      >
        {/* Stepper inside the modal */}
        <InitialSteps onComplete={handleStepsCompletion} />
      </Modal>

      <Splitter
        layout="horizontal"
        style={{
          height: '100vh',
          width: '100vw',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden', // Prevent scrolling
        }}
        resizable={false}
        collapsible={false}
      >
        {/* Left Panel */}
        <Splitter.Panel size="25%" style={{ display: 'flex', flexDirection: 'column' }}>
          <Splitter layout="vertical" style={{ flex: 1 }}>
            <Splitter.Panel size="50%" style={{ padding: 10 }}>
              {/* Webcam Stream */}
              <video
                id="webcam-stream"
                autoPlay
                muted
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Splitter.Panel>
            <Splitter.Panel style={{ padding: 10 }}>
              {/* Question List */}
              <List
                bordered
                dataSource={questions}
                renderItem={(item) => (
                  <List.Item onClick={() => handleQuestionClick(item)}>
                    {item}
                  </List.Item>
                )}
                style={{
                  height: '100%',
                  overflowY: 'auto',
                }}
              />
            </Splitter.Panel>
          </Splitter>
        </Splitter.Panel>

        {/* Right Panel */}
        <Splitter.Panel style={{ padding: 10 }}>
          {/* Selected Question */}
          {selectedQuestion ? (
            <div>
              <Title level={3}>Question</Title>
              <Text>{selectedQuestion}</Text>
            </div>
          ) : (
            <Text>Select a question from the left side.</Text>
          )}
        </Splitter.Panel>
      </Splitter>
      footer={[
          // Use the Start Interview button, but it's disabled until the steps are completed
          <Button
            key="ok"
            type="primary"
            disabled={!isStepsCompleted}
            onClick={handleStartInterview}
          >
            Start Interview
          </Button>,
        ]}
    </>
  );
};

InterviewPanel.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.string),
};

export default InterviewPanel;
