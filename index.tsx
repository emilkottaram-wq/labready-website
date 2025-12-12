import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

console.log('Mounting LabReady application...');

try {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (error) {
  console.error("Failed to mount application:", error);
  rootElement.innerHTML = '<div style="padding: 20px; font-family: sans-serif;"><h1>Application Error</h1><p>Failed to load the application. Check console for details.</p></div>';
}