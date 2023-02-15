function InterSection({ children }) {
  return (
    <div className="w-full mx-auto flex items-center justify-center">
      <div className="max-w-7xl flex flex-wrap justify-around w-full">{children}</div>
    </div>
  );
}

export default InterSection;
