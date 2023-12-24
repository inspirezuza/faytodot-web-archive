import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div>
        <div className="h-screen bg-slate-700 pl-16 pt-16 text-xl text-white">
          <div className="text-4xl font-extrabold ">Faytodot Web Archive</div>
          <div className="ml-4 mt-4 font-medium">
            <div className="  pb-4 text-2xl">
              สำหรับใช้เก็บเว็บไว้ก็อป style tailwind
            </div>

            <Link
              href="/discordnavbar"
              className="text-cyan-400 hover:text-cyan-600"
            >
              discordnavbar
            </Link>
          </div>
          <div className="fixed bottom-[90px] right-6">
            กดกลับหน้าหลักตรงนี้
          </div>
        </div>
      </div>
    </>
  );
}
