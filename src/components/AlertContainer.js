import React, { useState, useCallback } from 'react';
import Alert from './Alert';

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts([...toasts, { id, message, type }]);
  }, [toasts]);

  const removeToast = useCallback((id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  }, [toasts]);

  return (
    <div className="fixed top-4 right-4 flex flex-col items-end space-y-4">
      {toasts.map(toast => (
        <Alert
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
      <div className="space-x-2">
        <button onClick={() => addToast('This is a success message!', 'success')} className="px-4 py-2 bg-green-500 text-white rounded-md">Show Success Toast</button>
        <button onClick={() => addToast('This is an error message!', 'error')} className="px-4 py-2 bg-red-500 text-white rounded-md">Show Error Toast</button>
        <button onClick={() => addToast('This is an info message!', 'info')} className="px-4 py-2 bg-blue-500 text-white rounded-md">Show Info Toast</button>
        <button onClick={() => addToast('This is a warning message!', 'warning')} className="px-4 py-2 bg-yellow-500 text-white rounded-md">Show Warning Toast</button>
      </div>
    </div>
  );
};

export default ToastContainer;