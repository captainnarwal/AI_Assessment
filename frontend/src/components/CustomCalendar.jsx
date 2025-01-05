import { Badge, Calendar, Modal ,Button} from 'antd';
import { useState, useEffect } from 'react';
import { fetchIntereviews } from '../services/apis/fetchInterviews'; // Import the API function
import CustomTable from './CustomTable';

const CustomCalendar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIntereviews('mock-token'); // Replace 'mock-token' with actual token if needed
        setInterviews(data);
      } catch (error) {
        console.error('Error fetching interviews:', error);
      }
    };
    fetchData();
  }, []);

  const handleDateClick = (date) => {
    const formattedDate = date.format('YYYY-MM-DD');
    const interviewsForDate = interviews.filter(
      (interview) => interview.scheduled_on === formattedDate
    );

    if (interviewsForDate.length > 0) {
      setModalContent(
        interviewsForDate
      );
    } else {
      setModalContent('No interviews scheduled for this date.');
    }

    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const dateCellRender = (value) => {
    const formattedDate = value.format('YYYY-MM-DD');
    const interviewsForDate = interviews.filter(
      (interview) => interview.scheduled_on === formattedDate
    );

    return (
      <ul className="events" onClick={() => handleDateClick(value)} style={{ cursor: 'pointer' }}>
        {interviewsForDate.map((interview) => (
          <li key={interview.interview_id}>
            <Badge status="success" text={interview.job_role} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  };

  return (
    <>
      <Calendar cellRender={cellRender} />
      <Modal
        title="Interviews"
        width={1000}
        open={isModalVisible}
        footer={
          <Button type="primary" onClick={handleOk}>
            Close
          </Button>
        }
      >
        <CustomTable data={modalContent}/>
      </Modal>
    </>
  );
};

export default CustomCalendar;
