import Image from "next/image";
import HeaderItem from "./HeaderItem";

// import logo from "~/public/assets/logo/logo.avif";

export default function Header() {
  return (
    <header className="backdrop-blur-3x flex h-7 w-full items-center bg-[rgba(0,0,0,0.2)] pr-4 pl-2 text-xs text-white">
      <section className="h-full">
        <ul className="flex h-full">
          <HeaderItem>
            <Image
              src={"/assets/logo/logo.webp"}
              alt="logo-image"
              width={16}
              height={16}
            />
          </HeaderItem>
          <HeaderItem>Finder</HeaderItem>
          <HeaderItem>파일</HeaderItem>
          <HeaderItem>편집</HeaderItem>
          <HeaderItem>보기</HeaderItem>
          <HeaderItem>이동</HeaderItem>
          <HeaderItem>윈도우</HeaderItem>
          <HeaderItem>도움말</HeaderItem>
        </ul>
      </section>
      <section className="ml-auto h-full">
        <ul className="flex h-full items-center">
          <li>22:00:00</li>
        </ul>
      </section>
    </header>
  );
}
