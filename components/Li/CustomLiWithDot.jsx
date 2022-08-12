export default function CustomLiWithDot({ className, children }) {
  return (
    <li>
      <span
        className={`${className} before:mr-2 before:w-5 before:h-5 before:inline-block before:rounded-full before:bg-solid-purple before:border-[5px] flex items-center font-medium text-lg`}
      >
        {children}
      </span>
    </li>
  );
}
