import { Space, Table, Tag ,Button  } from 'antd';
import PropTypes from 'prop-types'; // Import PropTypes

const CustomTable = ({ data }) => {
  const columns = [
    {
      title: 'Interview ID',
      dataIndex: 'interview_id',
      key: 'interview_id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Scheduled On',
      dataIndex: 'scheduled_on',
      key: 'scheduled_on',
    },
    {
      title: 'Scheduled At',
      dataIndex: 'scheduled_at',
      key: 'scheduled_at',
    },
    {
      title: 'Job Role',
      dataIndex: 'job_role',
      key: 'job_role',
    },
    {
      title: 'Skill',
      dataIndex: 'skill',
      key: 'skill',
      render: (skill) => (
        <Tag color="blue" key={skill}>
          {skill}
        </Tag>
      ),
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
        <Button type="primary" >
            Join
          </Button>
          <Button type="primary" >
            Decline
          </Button>

        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="interview_id" />;
};


CustomTable.propTypes = {
    data: PropTypes.any.isRequired, // Prop validation for children
  };
  
export default CustomTable;
