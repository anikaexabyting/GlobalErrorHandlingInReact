import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './component/Hero'
import { ErrorBoundary } from 'react-error-boundary'
import PostList from './component/PostList'
import FileNotFound from './component/FileNotFound'
const logError = (error, info) => {
  // Do something with the error, e.g. log to an external API
};
function Fallback({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}
function App() {
 

  return (
    <>
   <ErrorBoundary FallbackComponent={Fallback}>
   
   <Hero heroName="Joker"/> *
   </ErrorBoundary >
   <ErrorBoundary FallbackComponent={Fallback}>
    <PostList/>
   </ErrorBoundary>
   <ErrorBoundary FallbackComponent={Fallback}>
     <FileNotFound/>
   </ErrorBoundary>
   {/* <ErrorBoundary FallbackComponent={Fallback}>
   <Hero heroName="Joker"/>
   <PostList/>
   <FileNotFound/>
   </ErrorBoundary> */}
    </>
  )
}

export default App
