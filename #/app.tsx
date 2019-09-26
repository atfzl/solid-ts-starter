import { css } from 'emotion';
import './global.style';
import Routes from './routes/root.route';

function App() {
  return (
    <div
      className={css`
        height: 100%;
        width: 100%;
        min-width: 600px;
      `}
    >
      <Routes />
    </div>
  );
}

export default App;
