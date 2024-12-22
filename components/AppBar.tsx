export const Appbar = ({ title }: { title: string }) => {
  return (
    <>
      <div className="bg-teal-500 text-white p-4 top-0 w-full grow fixed space-between">
        <div className="container flex flex-col lg:flex-row justify-between items-center">
          <div className="font-bold ">{title}</div>
          <div>sdfdgfd</div>
        </div>
      </div>
    </>
  );
};
