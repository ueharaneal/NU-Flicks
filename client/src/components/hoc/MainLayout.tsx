import { Toaster } from "@/components/ui/toaster";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout(props: MainLayoutProps) {
  return (
    <div>
      {props.children}
      <Toaster />
    </div>
  );
}

export default MainLayout;
