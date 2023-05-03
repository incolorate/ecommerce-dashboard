import {
  RxArchive,
  RxCode,
  RxDashboard,
  RxDesktop,
  RxHome,
} from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiCategory } from "react-icons/bi";
import { signOut } from "next-auth/react";

export default function Nav() {
  const inactive = "flex gap-2 items-center p-2";
  const active =
    inactive + " text-green-400 bg-slate-300 bg-opacity-10 rounded-xl";
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="text-white p-4 ">
      <div className="flex gap-2 items-center mb-16">
        <RxDashboard className="text-3xl" />
        <h1 className="text-3xl text-center ">Admin Dashboard</h1>
      </div>

      <nav className="text-white p-2 flex flex-col  gap-6">
        <Link href="/" className={pathname === "/" ? active : inactive}>
          <RxHome className="text-2xl text-center" />
          <p className="text-2xl text-center">Home</p>
        </Link>
        <Link
          href="/products"
          className={pathname.includes("products") ? active : inactive}
        >
          <RxDesktop className="text-2xl text-center" />
          <p className="text-2xl text-center">Products</p>
        </Link>
        <Link
          href="/categories"
          className={pathname.includes("categories") ? active : inactive}
        >
          <BiCategory className="text-2xl text-center" />
          <p className="text-2xl text-center">Categories</p>
        </Link>
        <button
          href="/settings"
          className="flex gap-2 items-center p-2"
          onClick={() => signOut()}
        >
          <RxCode className="text-2xl text-center" />
          <p className="text-2xl text-center">Sign out</p>
        </button>
      </nav>
    </div>
  );
}
