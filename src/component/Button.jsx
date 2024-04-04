export default function Button({ type, text }) {
  return (
    <button type={type} className=" bg-gray-300 font-semibold text-white h-12 rounded-md transition duration-300 hover:bg-[#239AFF] text-lg">
      {text}
    </button>
  );
}
