import { getAllPosts } from "@/lib/api";

export default async function sitemap() {
	const baseUrl = "https://www.hao-ting.com"; // Update with your actual domain

	// Get all blog posts
	const posts = await getAllPosts();

	// Generate sitemap entries for blog posts
	const blogEntries = posts.map((post) => ({
		url: `${baseUrl}/posts/${post.id}`,
		lastModified: post.date ? new Date(post.date) : new Date(),
	}));

	// Static pages
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/posts`,
			lastModified: new Date(),
		},
	];

	return [...staticPages, ...blogEntries];
}
