export const ErrorPage = ({ error }: { error: string }) => {
  return (
    <div className="text-center">
      <div className="pt-10 text-xl font-medium md:text-3xl">
        Maaf sedang ada masalah ☹️
      </div>
      <div className="underline ">{error}</div>
    </div>
  );
};
