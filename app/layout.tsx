import "@/app/global.css";
import { Metadata } from "next";
import { homeOutline, starOutline, timeOutline } from "ionicons/icons";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#00003c] text-white">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-[#54F4D0] text-[#00003c]">
          <h1 className="font-bold">Cinema Guru</h1>
          <div className="flex items-center space-x-4">
            <span>Welcome, user@email.com</span>
            <button className="font-semibold">Logout</button>
          </div>
        </header>

        {/* Full viewport container */}
        <div className="flex h-screen">
          {/* Sidebar navigation */}
          <nav className="w-48 bg-[#1DD2AF] text-white p-6 space-y-4">
            <a href="#" className="flex items-center space-x-2 font-semibold">
              <svg className="w-5 h-5" dangerouslySetInnerHTML={{ __html: homeOutline }} />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-2 font-semibold">
              <svg className="w-5 h-5" dangerouslySetInnerHTML={{ __html: starOutline }} />
              <span>Favorites</span>
            </a>
            <a href="#" className="flex items-center space-x-2 font-semibold">
              <svg className="w-5 h-5" dangerouslySetInnerHTML={{ __html: timeOutline }} />
              <span>Watch Later</span>
            </a>
          </nav>

          {/* Main content area */}
          <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
