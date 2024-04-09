import Upload from "@svgs/Upload";

export default function ImageUpload({ labelText, onImageChange }) {
  return (
    <div className="flex w-full flex-col items-start justify-center ">
      {labelText ? (
        <p className="mb-2 text-xs font-normal leading-none text-neutral-700">
          Upload favicon(optional)
        </p>
      ) : null}
      <input
        type="file"
        className="cursor-pointer rounded-xl border border-[#DEE1E6] "
        id={`upload-${labelText}`}
        name={`upload-${labelText}`}
        style={{ display: "none" }}
        onChange={(e) => onImageChange(e.target.files[0])}
      />
      <label 
        className="cursor-pointer rounded-xl border border-[#DEE1E6]"
        onClick={() => document.getElementById(`upload-${labelText}`).click()}
        htmlFor="favicon-upload"
      >
        <div className="cursor-pointer rounded-xl border border-[#DEE1E6]">
          <div className="p-4">
            <Upload width={60} height={60} />
          </div>
        </div>
      </label>
    </div>
  );
}
