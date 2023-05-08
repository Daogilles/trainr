import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navigation: React.FC = () => {
  const { status } = useSession();
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className="bg-white mx-auto max-w-7xl flex flex-row items-center justify-center relative py-6">
      <Link
        href="/"
        className={`absolute left-0 text-4xl font-bold leading-9 tracking-tight text-gray-900 ${inter.className}`}
      >
        TrainR
      </Link>
      <nav className="flex" aria-label="Global">
        <ul className="hidden lg:flex lg:gap-x-12">
          <li>
            <Link
              href="/"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Training
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Trainrs
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Food
            </Link>
          </li>
        </ul>
      </nav>

      {status === "unauthenticated" && currentRoute !== "/auth" && (
        <div className="hidden lg:flex absolute right-0 align-center">
          <Link
            href="/auth"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      )}

      {status === "authenticated" && (
        <div className="hidden lg:flex absolute right-0 align-center">
          <Link
            href="/profile"
            className="text-sm font-semibold leading-6 text-gray-900 px-4"
          >
            Profile
          </Link>
          <button
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Navigation;
