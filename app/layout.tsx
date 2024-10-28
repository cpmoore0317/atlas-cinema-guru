import "@/app/global.css";
import { Metadata } from "next";

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
        <header className="flex justify-between items-center px-6 py-4 bg-[#1ED2AF] text-[#00003c]">
          <h1 className="font-bold">Cinema Guru</h1>
          <div className="flex items-center space-x-4">
            <span>Welcome, user@email.com</span>
            <button className="font-semibold hover:underline">Logout</button>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
