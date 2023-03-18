import { IoMdCloudUpload } from "react-icons/io";
import { useDropzone } from "react-dropzone";

function Dropzone({ onDrop, accept, file }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept,
    multiple: false,
  });

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-light_gray rounded-lg px-5 cursor-pointer hover:scale-[103%] duration-300 ease-in-out transition-all"
      {...getRootProps()}
    >
      <input className="" {...getInputProps()} />
      <div className="flex flex-col items-center justify-center text-center">
        {isDragActive ? (
          <p className="text-sm">Release to drop the file here</p>
        ) : (
          <>
            <IoMdCloudUpload size={60} className="fill-light_gray" />
            <p className="text-sm text-medium_gray">
              Drag & drop your {file ? "file" : "image"} here Or{" "}
              <span className="text-dark_blue">browse files</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Dropzone;
