import { AArrowDown, MenuSquare, QrCode, Receipt } from "lucide-react";
import Image from "next/image";
import bg from "@/app/images/LiveMenu bg.jpg";
export default function Home() {
  return (
    <main className="relative">
      <div className="-z-10 top-0 absolute contrast-75 opacity-35">
        <Image alt="bg" src={bg} />
      </div>
      <div className="flex flex-col text-center p-10 items-center justify-center tracking-wider">
        <h1 className="text-3xl font-extrabold">LIVE MENU</h1>
        <div className="mt-6 text-sm flex flex-col items-center justify-center gap-y-3 font-semibold">
          <h2>
            1. SCAN QR CODE
          </h2>
          <QrCode size={75} strokeWidth={1} />
          <h2>
            2. CHECKOUT YOUR MENU
          </h2>
          <MenuSquare size={75} strokeWidth={1} />
          <h2>
            3. PICK ORDER AND PAY
          </h2>
          <Receipt size={75} strokeWidth={1} />
        </div>
      </div>
    </main>
  );
}
