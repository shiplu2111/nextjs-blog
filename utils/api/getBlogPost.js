import { apiUrl } from "@/utils/config";
export default async function getBlogPost(id) {

    const res = await fetch(
        `${apiUrl}/post-details/${id}`,
    );

    if (!res.ok) {
        throw new Error("Error fetching posts");
    }
    return res.json();
}