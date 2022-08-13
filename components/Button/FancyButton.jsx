export default function FancyButton({ children, className = '', style }) {
  return (
    <button
      style={{ ...style }}
      className={`shadow-lg shadow-fancy-purple/80 py-4 px-9 bg-fancy-purple text-white flex rounded-xl items-center text-lg ${className}`}
    >
      {children}
    </button>
  );
}
