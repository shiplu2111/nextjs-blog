import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="bg-white rounded-lg shadow  dark:bg-gray-800">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a href="#" className="hover:underline">
        Shiplu
      </a>
      . All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <Link href="/" className="mr-4 hover:underline md:mr-6 ">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="mr-4 hover:underline md:mr-6">
          About
        </Link>
      </li>
      <li>
        <Link href="/blog" className="mr-4 hover:underline md:mr-6">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </li>
    </ul>
  </div>
</footer>

        </>
    );
};

export default Footer;