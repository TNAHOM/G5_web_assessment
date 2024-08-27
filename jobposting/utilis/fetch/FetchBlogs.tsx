import axios from "axios";
async function fetchBlogs() {
  try {
    const response = await axios.get(
      "https://a2sv-backend.onrender.com/api/blogs"
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
}

export default fetchBlogs;
