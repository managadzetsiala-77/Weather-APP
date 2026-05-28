export default function Header() {
  return (
    <>
      <div className="flex  py-10 px-20 justify-between">
        <img src="/images/logo.svg" alt="logo" />

        <button className="flex items-center gap-2 py-0.5 px-2.5 bg-gray-800 rounded text-white">
          <img src="/images/icon-units.svg" alt="units image" /> Units{" "}
          <img src="/images/icon-dropdown.svg" alt="icon dropdown" />
        </button>
      </div>
    </>
  );
}
