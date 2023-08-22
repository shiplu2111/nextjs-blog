import Card from "@/components/blog/Card";
import getPostByCategory from "@/utils/api/getPostByCategory";

export default async function SingleBlog({ params }) {
  const id = params.id;
  const postByCategory = getPostByCategory(id);
  const posts = await postByCategory;

  return (
    <div>
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
    </div>
  );
}
