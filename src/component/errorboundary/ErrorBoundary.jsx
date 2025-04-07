import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  // This lifecycle method is used to update state when an error occurs
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  // This lifecycle method is used to log the error details
  componentDidCatch(error, errorInfo) {
    // You can log error info here or send it to an external service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Optionally, send error to an external logging service like Sentry or your backend
  }

  render() {
    if (this.state.hasError) {
      // You can customize this fallback UI as needed
      return (
        <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
          <h2>Something went wrong!</h2>
          <p>{this.state.errorMessage}</p>
          <p>Please try again later.</p>
        </div>
      );
    }

    return this.props.children; // If no error, render the children components
  }
}

export default ErrorBoundary;
