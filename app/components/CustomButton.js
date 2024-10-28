'use client';
export default function CustomButton({ onClick, children }) {
    return (
      <button className="customButton" onClick={onClick}>
        {children}
      </button>
    );
  }
  