const BodyContent = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 bg-primary rounded-3xl p-3 text-white text-right">
      <div className="flex flex-col items-end sm:mt-14">
        <div className="font-bold text-lg">witt.</div>
        <div className="text-7xl font-bold sm:w-60 sm:mt-4 mb-4">
          your second brain
        </div>
        <p className="w-40 text-sm">
          a personal assistant to organize, track and document your work
        </p>
      </div>
      <img
        className="mt-40 sm:mt-0 h-[520px]"
        src="assets/placeholder.png"
      />
    </div>
  );
};

export default BodyContent;
