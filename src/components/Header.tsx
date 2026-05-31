export default function Header() {
  return (
    <>
      <div className="flex py-8 px-18 justify-between items-center">
        <img src="/images/logo.svg" alt="logo" />

<button className="
flex items-center gap-2
bg-[#24243D]
px-4 py-2
rounded-xl
text-sm
">          <img src="/images/icon-units.svg" alt="units image" /> Units{" "}
          <img src="/images/icon-dropdown.svg" alt="icon dropdown" />
        </button>
      </div>
    </>
  );


}
