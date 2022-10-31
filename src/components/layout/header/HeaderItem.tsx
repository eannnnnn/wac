import { PropsWithChildren } from "react";

export default function HeaderItem({ children }: PropsWithChildren) {
  return (
    <li className="flex h-full cursor-pointer items-center rounded-sm px-3 hover:bg-[rgba(255,255,255,0.2)] hover:backdrop-blur-3xl">
      {children}
    </li>
  );
}
