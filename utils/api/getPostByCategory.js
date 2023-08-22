import { apiUrl } from "@/utils/config";
export default async function getPostByCategory(id) {

    const res = await fetch(
        `${apiUrl}/post-list/${id}`,
        
    );

    if (!res.ok) {
        throw new Error("Error fetching posts");
    }

    return res.json();
}