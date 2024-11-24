import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";

const MainLayout = () => {
  const isMobile = false;
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 flex h-full overflow-hidden"
      >
        <ResizablePanel
          defaultSize={20}
          minSize={isMobile ? 0 : 20}
          maxSize={30}
        >

          <LeftSidebar/>
        
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-white rounded-lg transition-colors" />
        <ResizablePanel defaultSize={isMobile ? 80 : 60}>
          <Outlet />
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-white rounded-lg transition-colors" />

        <ResizablePanel
          defaultSize={20}
          minSize={0}
          maxSize={25}
          collapsedSize={0}
        >
          {/* reight sidebar */}
          right sidebar
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default MainLayout;