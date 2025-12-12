import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const mountApplication = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Could not find root element to mount to");
    return;
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
    rootElement.innerHTML = `
      <div style="padding: 40px; font-family: sans-serif; text-align: center; color: #ef4444;">
        <h1 style="font-size: 24px; margin-bottom: 16px;">System Error</h1>
        <p>The operating system failed to initialize.</p>
        <pre style="background: #fee2e2; padding: 16px; border-radius: 8px; margin-top: 20px; overflow: auto; text-align: left;">
          ${error instanceof Error ? error.message : String(error)}
        </pre>
      </div>
    `;
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApplication);
} else {
  mountApplication();
}