import { apiUrl } from "@/utils/config";
export default async function getNewPost() {

    const res = await fetch(
        `${apiUrl}/post-newest`,
       
    );

    if (!res.ok) {
        throw new Error("Error fetching posts");
    }

    return res.json();
}