import ReactDOM from 'react-dom/client';
import App from './App';

console.log(App().props.children);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
