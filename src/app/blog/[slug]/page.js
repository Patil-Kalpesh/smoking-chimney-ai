import SingleBlog from "./SingleBlog";
import axios from "axios";

export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    // Fetch blog data from API
    const res = await axios.get(`/api/blogs/${slug}`);
    const blog = res.data.data;

    return {
      title: blog.title || "Blog Post",
      description: blog.description?.substring(0, 150) || "Read this amazing blog!",
      openGraph: {
        title: blog.title || "Blog Post",
        description: blog.description?.substring(0, 150),
        images: [blog.image || "/placeholder.svg"],
      },
    };
  } catch (error) {
    return {
      title: "Blog Not Found",
      description: "Sorry, this blog post does not exist.",
    };
  }
}

export default function BlogPage({ params }) {
  return <SingleBlog slug={params.slug} />;
}
