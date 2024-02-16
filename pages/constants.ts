const HEADER_NAV = [
	{
		"type": "text",
		"content": "Properties",
	},
	{
		"type": "text",
		"content": "Blog",
	},
	{
		"type": "text",
		"content": "About",
	},
]

const FOOTER_ITEMS = {
	"Services": [
		"Buy or Rent",
		"List a Property",
		"Newsletter",
	],
	"Legal": [
		"Terms and Conditions",
		"Privacy Policy",
	],
	"Careers": [
		"Internships",
		"Jobs",
		"Partners",
	],
}

interface Author {
	name: string
	pfp: string
	description: string
}

interface PropertyDetail {
	title: string
	description: string
	price: string
	location: string
	image: string
	date: string
	id: number
}

const SOCIALS = [
	{
		"name": "Discord",
		"url": "https://discord.gg/",
	},
	{
		"name": "Facebook",
		"url": "https://www.facebook.com/",
	},
	{
		"name": "Github",
		"url": "https://github.com/LePichu/tk24-re-app",
	},
	{
		"name": "Twitter",
		"url": "https://twitter.com/",
	},
	{
		"name": "YouTube",
		"url": "https://www.youtube.com/",
	},
]

export { FOOTER_ITEMS, HEADER_NAV, SOCIALS }
export type { Author, PropertyDetail }
