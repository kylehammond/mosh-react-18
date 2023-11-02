let count = 0;

const Message = () => {
  count++;
  return <div>Message {count}</div>;
};

export default Message;

// results in Message 2, 4, 6 instead of 1 2 3 as expected
// due to strict mode (only in development mode)  won't do so in other envs
// strict mode made react render each time twice - first render is to check if things are ok, second render is the real one
// so it renders
// Message 1
// Message 2
// Message 3
// Message 4
// Message 5
// Message 6
