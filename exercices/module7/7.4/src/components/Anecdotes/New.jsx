import { Button, Form, Input } from 'antd';

const New = ({ addNew }) => {

  const onFinish = (values) => {
    addNew({
      ...values,
      votes: 0,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };  

  return (
    <div>
      <h2>create a new anecdote</h2>

      <Form name="newAnecdote" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="content"
          name="content"
          rules={[
            {
              required: true,
              message: 'Please input your content!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="author"
          name="author"
          rules={[
            {
              required: true,
              message: 'Please input an author!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="url for more info"
          name="info"
          rules={[
            {
              required: true,
              message: 'Please input a url!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default New;
