import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import "./helper.css";

export default function Home() {
  const SideBarIcon = ({ icon, text = "tooltip 💡" }: any) => {
    return (
      <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    );
  };

  return (
    <div className="h-screen bg-slate-600">
      <div className="fixed left-0 top-0 m-0 flex h-screen w-16 flex-col bg-primary italic text-secondary shadow">
        <SideBarIcon icon={<FaFire size="28" />} />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
      </div>
    </div>
  );
}
