import { Link } from 'react-router-dom';
import { Divider, List, Space } from 'antd';

const AnecdotesList = ({ anecdotes }) => (
  <>
    <Space direction="vertical">
      <Divider>Anecdotes</Divider>
      <List
        bordered
        dataSource={anecdotes}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/anecdotes/${item.id}`}>{item.content}</Link>
          </List.Item>
        )}
      />
    </Space>
  </>
);

export default AnecdotesList;
