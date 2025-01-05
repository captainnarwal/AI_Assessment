import PropTypes from 'prop-types'; // Import PropTypes
import { Layout } from 'antd';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';
import CustomSidebar from './CustomSidebar';

const { Content } = Layout;

const CustomLayout = ({ children }) => (
  <Layout hasSider>
    <CustomSidebar />
    <Layout
      style={{
        marginInlineStart: 200,
      }}
    >
      <CustomHeader />
      <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
        }}
      >
        <div
          style={{
            padding: 24,
            textAlign: 'center',
            background: '#f0f2f5',
            borderRadius: 8,
          }}
        >
          {children}
        </div>
      </Content>
      <CustomFooter />
    </Layout>
  </Layout>
);

CustomLayout.propTypes = {
  children: PropTypes.node.isRequired, // Prop validation for children
};

export default CustomLayout;
