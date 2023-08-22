import Card from "@/components/blog/Card";
import Category from "@/components/blog/Category";
// import postCategories from "@/utils/api/postCategories";
import getNewPost from "@/utils/api/getNewPost";

export default async function BlogByCategory() {
  // const posts = await postCategories();
  const newPosts = await getNewPost();
  return (
    <>
      <section className="bg-gray-50 ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Kickstart your marketing
            </h2>
            <p className="mt-4 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>
          {/* <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
           
          {posts.map((post) => (
            <Category post={post} key={post.id} />
            ))}
          </div> */}
         
        </div>
      </section>

      <div className="py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 my-2  md:px-6 ">
          {newPosts.map((post) => (
            <Card
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>

      
    </>
  );
}
