function BgButton({ColorHandlear,btnColor,text}) {
  return (
    <button
      onClick={ColorHandlear}
      className="rounded-xl outline-none px-2 text-white shadow-2xl"
      style={{ background: btnColor }}
    >
      {text}
    </button>
  );
}

export default BgButton;
