import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function HomeButton() {
  return (
    <Link href="/">
      <div
        className="fixed bottom-4 right-4 flex h-16 w-16 items-center justify-center rounded-3xl
         bg-slate-900 text-white opacity-30 transition-all hover:opacity-100"
      >
        <FaHome size="28" />
      </div>
    </Link>
  );
}
