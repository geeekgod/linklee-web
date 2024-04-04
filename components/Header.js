function Header({ showUser = false }) {
  return (
    <div>
      <div className="flex w-full flex-row items-center justify-between bg-bg px-4 py-3">
        <div
          className="cursor-pointer text-xl font-medium text-black opacity-80"
          onClick={() => push("/")}
        >
          glue.
        </div>

        <div className="flex items-center gap-x-2">
          <div className="text-xs font-normal text-black text-opacity-40">
            ver 1.0
          </div>

          <div className="flex h-[18px] w-[29px] items-center justify-center gap-2 rounded border border-black border-opacity-40 p-1">
            <div className="text-[8px] font-semibold text-black text-opacity-40">
              BETA
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[1px] bg-gray-200 opacity-60" />
    </div>
  );
}

export default Header;
