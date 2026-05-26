import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';

function Main() {
  useEffect(() => {
    // Dynamically add Google Fonts (Poppins)
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap';
    fontLink.rel = 'stylesheet';

    // Dynamically add Font Awesome
    const faLink = document.createElement('link');
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    faLink.rel = 'stylesheet';

    // Append the link tags to the head of the document
    document.head.appendChild(fontLink);
    document.head.appendChild(faLink);

    // Optional: Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// Render the app
createRoot(document.getElementById('root')).render(<Main />);
