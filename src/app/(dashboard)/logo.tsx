import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Space_Grotesk({
  weight: ["700"],
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center hover:opacity-75 transition h-[68px] px-4">
        <div className="size-14 relative"> {/* increased from size-8 */}
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            fill 
            className="object-contain"
          />
        </div>
      </div>
    </Link>
  );
};