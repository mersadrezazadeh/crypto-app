type ButtonProps = {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function Button({ disabled, onClick, children }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="bg-brand-600 px-6 py-3 text-base font-medium text-brand-100 hover:bg-brand-700 rounded shadow-lg transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
    >
      {children}
    </button>
  );
}

export default Button;
