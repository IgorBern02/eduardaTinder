// Alert.js
import React from "react";

const Alert = ({ title, message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 shadow-lg">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-pink-600 text-white px-4 py-2 rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Alert;
