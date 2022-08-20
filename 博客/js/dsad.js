import { Empty } from 'antd';

const App = () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

export default App;
const empty = createRoot(document.getElementById("empty"));
empty.render(<App />);