"use client";
import getBlogPost from "@/utils/api/getBlogPost";
import NoBlogFound from "@/components/blog/NoBlogFound";
export default async function SingleBlog({ params }) {
  const id = params.id;
let postData = await getBlogPost(id);
let post = postData.postDetails;
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
         {
          post === null ? (
            <div>
              <NoBlogFound />
            </div>
          ) : (<div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={post.img}
              alt={post.title}
            />
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              
              <div
                
                className="block mt-4 text-2xl font-semibold text-gray-800  dark:text-white"
              >
                {post.title}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              {post.created_at}
                  </p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm text-justify">
               {post.content}
                  </p>
              
              
            </div>
          </div>)
         }
            
          
          
        </div>
      </section>
    </div>
  );
}
