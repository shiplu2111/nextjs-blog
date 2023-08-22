import { apiUrl } from "@/utils/config";
export default async function postCategories() {

    const res = await fetch(
        `${apiUrl}/post-categories`,
      
    );

    if (!res.ok) {
        throw new Error("Error fetching posts");
    }

    return res.json();
}