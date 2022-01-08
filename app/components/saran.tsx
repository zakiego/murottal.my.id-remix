import { Link } from "remix";

export const Saran = () => {
  return (
    <div className="transition-all ease-in-out opacity-90 hover:opacity-100">
      <Link
        to="saran"
        className="bg-[#002884]/70 text-white rounded-md px-2 py-1.5 font-semibold text-xs md:text-base"
      >
        Saya ingin menambahkan qori lainnya! 👋🏻
      </Link>
    </div>
  );
};
