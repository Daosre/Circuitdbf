const ErrorMsg = (errorName: { error: string }) => {
  return (
    <p className="text-[#FD3131] text-[14px] mt-1 text-center p-1">
      Le champs {errorName.error} est requis
    </p>
  );
};

export default ErrorMsg;
