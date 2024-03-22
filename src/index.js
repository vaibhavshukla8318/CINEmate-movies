import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Loading } from './components/LoadingAndError';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 4 seconds
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <Loading />
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
