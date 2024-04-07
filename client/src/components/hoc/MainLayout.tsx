import { Toaster } from "@/components/ui/toaster";
import { RootState } from "@/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout(props: MainLayoutProps) {
  const site = useSelector((state: RootState)=>state.site)
  return (
    <div>
      {props.children}
      <Toaster />
    </div>
  );
}

export default MainLayout;
