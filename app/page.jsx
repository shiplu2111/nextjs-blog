import Banner from "@/components/Banner";
import Newsletter from "@/components/Newsletter";
import Card from "@/components/blog/Card";
import getNewPost from "@/utils/api/getNewPost";

export default async function Home() {
  const posts = await getNewPost();
  return (
    <>
    <Banner />
      <div className="py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 my-2  md:px-6 ">
          {posts.map((post) => (
            <Card
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>
      <Newsletter />
    </>
  );
}
