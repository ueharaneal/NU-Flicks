import {LoaderCircle } from "lucide-react";

export function Loader() {
  return (
    <div className="animate-spin">
      <LoaderCircle />
    </div>
  );
}

export function LargeLoader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoaderCircle size={48} className="animate-spin text-primary"/>
    </div>
  );
}
