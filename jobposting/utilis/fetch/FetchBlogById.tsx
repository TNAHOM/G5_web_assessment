import axios from "axios";
async function fetchBlogById(id: string) {
  console.log("Fetching blog", id);
  try {
    const response = await axios.get(
      `https://a2sv-backend.onrender.com/api/blogs/${id}`
    );
    console.log(response.data, "fetch");
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
}

export default fetchBlogById;
