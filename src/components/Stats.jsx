export default function Stats({ dark }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 max-w-sm">
      <div
        className={`p-4 rounded-xl text-center ${
          dark ? "bg-[#14012b] border-[#3c1cff]" : "bg-[#fff7ec]"
        }`}
      >
        <p className={`${dark ? "text-[#ac96ff]" : "text-[#a67845]"} text-xs`}>
          Experience
        </p>
        <p className={`text-xl font-bold ${dark ? "text-white" : "text-[#6e4f2a]"}`}>
          2+ Years
        </p>
      </div>

      <div
        className={`p-4 rounded-xl text-center ${
          dark ? "bg-[#14012b] border-[#3c1cff]" : "bg-[#fff7ec]"
        }`}
      >
        <p className={`${dark ? "text-[#ac96ff]" : "text-[#a67845]"} text-xs`}>
          Specialization
        </p>
        <p className={`text-xl font-bold ${dark ? "text-white" : "text-[#6e4f2a]"}`}>
          React & Mobile
        </p>
      </div>
    </div>
  );
}
