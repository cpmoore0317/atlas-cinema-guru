import "@/app/global.css";
import { Metadata } from "next";
import {
  homeOutline,
  starOutline,
  time,
  film,
  exit,
} from "ionicons/icons";

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
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-[#00003c]"
              dangerouslySetInnerHTML={{
                __html: film.replace("<svg", '<svg fill="currentColor"'),
              }}
            />

            <h1 className="font-bold">Cinema Guru</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="mr-4">Welcome, user@email.com</span>
            <svg
              className="w-6 h-6 text-[#00003c]"
              dangerouslySetInnerHTML={{
                __html: exit.replace("<svg", '<svg fill="currentColor"'),
              }}
            />
            <button className="font-semibold">Logout</button>
          </div>
        </header>

        {/* Full viewport container */}
        <div className="flex h-screen">
          {/* Sidebar navigation */}
          <nav className="w-48 bg-[#1DD2AF] text-white p-6 space-y-4">
            <a href="#" className="flex items-center space-x-2 font-semibold">
            <svg
              className="w-6 h-6 text-[#ffffff]"
              dangerouslySetInnerHTML={{
                __html: homeOutline.replace("<svg", '<svg fill="currentColor"'),
              }}
            />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-2 font-semibold">
            <svg
              className="w-6 h-6 text-[#ffffff]"
              dangerouslySetInnerHTML={{
                __html: starOutline.replace("<svg", '<svg fill="currentColor"'),
              }}
            />
              <span>Favorites</span>
            </a>
            <a href="#" className="flex items-center space-x-2 font-semibold">
            <svg
              className="w-6 h-6 text-[#ffffff]"
              dangerouslySetInnerHTML={{
                __html: time.replace("<svg", '<svg fill="currentColor"'),
              }}
            />
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
