import { ProductAPI, ClientAPI } from "./api.js";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F5F3E7] flex flex-col items-center">
      <main className="w-full max-w-md flex-1">{children}</main>
      
      {/* La BottomNav */}
      <nav className="fixed bottom-0 w-full max-w-md bg-[#A53F32] ...">
        {/*icone*/}
      </nav>
    </div>
  );
}