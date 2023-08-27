'use client';
type Props = {};

const DownloadButton = (props: Props) => {
  const handleDownload = () => {
    const pdfFilePath = '/cv.pdf';
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'Yaniv Shabi CV.pdf';
    link.click();
  };
  return (
    <div className="text-white grid place-items-center md:place-items-end">
      <div className="text-lg md:text-2xl">Download resume</div>
      <button
        onClick={handleDownload}
        className=" text-lg md:text-2xl bg-white px-12 text-black rounded-xl 
                 transition-colors border border-white hover:bg-black hover:text-white "
      >
        Download
      </button>
    </div>
  );
};

export default DownloadButton;
