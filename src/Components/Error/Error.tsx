const ErrorMsg = (errorName: { error: string }) => {
  return (
    <p className="text-red-600 text-[14px] mt-1 text-center p-1">
      Le champs {errorName.error} est requis
    </p>
  );
};

export default ErrorMsg;
