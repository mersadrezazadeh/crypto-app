type ButtonProps = {
  size: "small" | "medium" | "large";
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const sizes = {
  small: `px-2 py-1.5 text-center text-xs font-semibold uppercase`,
  medium: `px-4 py-3 text-sm font-medium`,
  large: `px-6 py-3 text-base font-medium`,
};

function Button({ size, disabled, onClick, children }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-brand-600 text-brand-100 hover:bg-brand-700 rounded shadow-lg transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none ${
        size === "small" ? sizes.small : ""
      } ${size === "medium" ? sizes.medium : ""} ${
        size === "large" ? sizes.large : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
