import type { Blog } from "~/server/types"

export default defineEventHandler((event) => {
	const BLOG_POSTS: Array<Blog> = [
		{
			name: "Navigating the Buyer's Market",
			description:
				"In this post, we demystify the complexities of the current real estate market, providing actionable tips and strategies to help buyers navigate confidently and make informed decisions in a competitive landscape.",
			imageUrl: "/blog/navigating_the_buyers_market.png",
			author: "Ishat Gupta",
			date: "15/02/24",
			key: "navigating_the_buyers_market",
		},
		{
			name: "Opportunities in Emerging Neighborhoods",
			description:
				"Discover the untapped potential of emerging neighborhoods and uncover lucrative investment opportunities that promise high returns and long-term growth prospects.",
			imageUrl:
				"/blog/investment_opportunities_in_emerging_neighborhoods.png",
			author: "Ishat Gupta",
			date: "12/09/23",
			key: "investment_opportunities_in_emerging_neighborhoods",
		},
		{
			name: "The Future of Sustainable Living",
			description:
				"Explore the evolving landscape of sustainable living and eco-friendly housing solutions, as we discuss innovative trends, technologies, and practices shaping the future of real estate.",
			imageUrl: "/blog/the_future_of_sustainable_living.png",
			author: "Ishat Gupta",
			date: "8/01/24",
			key: "the_future_of_sustainable_living",
		},
		{
			name: "Transform Spaces Style",
			description:
				"Get inspired to unleash your creativity and elevate your living spaces with our showcase of stunning renovation projects, expert design tips, and budget-friendly hacks for a home that truly reflects your unique style and personality.",
			imageUrl: "/blog/transforming_spaces_with_style.png",
			author: "Ishat Gupta",
			date: "2/5/23",
			key: "transforming_spaces_with_style",
		},
	]

	const response = new Response(JSON.stringify(BLOG_POSTS), {
		headers: {
			"content-type": "application/json",
			// "Access-Control-Allow-Origin": "https://tk24-beacon.deno.dev" // Replace with your website's domain
		},
		status: 200,
	})

	return response
})
