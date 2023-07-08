import MainSection from "@/components/MainSection";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="flex basis-2/12 h-screen border-e-2 w-full" >
        <Sidebar />
      </div>

      <div className="flex basis-10/12">
        {/* main section */}
        <MainSection />
          {/* suggested */}
      </div>
    </div>
  )
}
