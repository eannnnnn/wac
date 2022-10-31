import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-auto w-full overflow-hidden py-1">
      <div className="mx-auto h-full w-5/6 rounded-3xl bg-[rgba(255,255,255,0.07)] px-2 pt-2 pb-3 backdrop-blur-3xl">
        <ul className="flex h-full">
          <li className="relative flex h-full items-center after:absolute after:bottom-0 after:left-2/4 after:h-3 after:-translate-x-2/4 after:transform after:text-gray-300 after:content-['•']">
            <Image
              src={"/assets/menu-icons/finder.svg"}
              alt="menu-finder"
              width={128}
              height={128}
              className="h-20 w-20 object-cover"
            />
          </li>
          <li className="flex h-full items-center">
            <Image
              src={"/assets/menu-icons/launchpad.svg"}
              alt="menu-launchpad"
              width={128}
              height={128}
              className="h-20 w-20 object-cover"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
