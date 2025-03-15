import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PostHogProvider } from 'posthog-js/react'

const options = {
  api_host: window.location.origin, // Use your own domain as the proxy
  ui_host: 'https://app.posthog.com', // Required for toolbar and dashboard links
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostHogProvider 
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={options}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>,
)