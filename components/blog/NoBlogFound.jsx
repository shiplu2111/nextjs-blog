import Link from 'next/link';
const NoBlogFound = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen from-gray-800 via-greeen-300 to-blue-500 bg-gradient-to-br">
        <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
          <div className="max-w-md mx-auto space-y-6">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">
                  Blog not found.
                </p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                  The Blog you are looking for doesn't exist. Here are some helpful
             links:
                </p>
              </div>
            <div className="flex items-center justify-between w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <Link href="/">
              <button className="w-full px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:outline-none">
                Take me Home
              </button>
              </Link>
              <Link href="/blog">
              <button className="w-full px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:outline-none">
                More Blogs
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
   
  );
};

export default NoBlogFound;
