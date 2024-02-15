<template>
    <header class="p-4 flex justify-between bg-transparent backdrop-blur-lg sticky top-0">
        <img src="/branding/beacon_logo_base.png" class="h-12 w-12" />
        <nav class="hidden md:flex gap-6 justify-center items-center">
            <a v-for="item in HEADER_NAV" href="{{ item.content }}"
                class="uppercase text-2xl text-center text-black no-underline hover:underline">
                {{ item.content }}
            </a>
        </nav>
        <img src="/svg/menu.svg" class="h-12 w-12 p-2 block md:hidden" />
    </header>

    <main class="m-4 mb-16 md:mx-40 rounded-lg flex flex-col gap-4">
        <h1 class="text-2xl font-semibold text-black">Welcome to our Real Estate Insights!</h1>
        <p>
            Embark on a journey of discovery with our engaging blog, where we delve into the dynamic world of real estate,
            offering valuable insights, expert advice, and inspiring stories to guide you through your property journey.
            Whether you're a first-time buyer, a seasoned investor, or a curious observer, our blog is your go-to
            destination for all things real estate. Let's explore together and unlock the possibilities that await!
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="[k, v] in Object.entries(BLOG_POSTS)" class="border-solid border p-4 border-gray-500">
                <!--          <img src="{{ v.imageUrl }}" /> -->

                <h1 class="text-lg font-semibold mb-4">{{ v.name }}</h1>

                <p>
                    {{ v.description }}
                </p>

            </div>
        </div>
    </main>

    <footer class="flex flex-col p-12 bg-[#262626] gap-12">
        <div class="flex flex-col md:flex-row justify-between gap-4">
            <img src="/branding/beacon_logo_base.png" class="w-16 h-16 mb-8 md:mb-0" />
            <div class="flex flex-col md:flex-row gap-8">
                <div v-for="[k, v] in Object.entries(FOOTER_ITEMS)" class="flex flex-col gap-2">
                    <p class="font-normal text-white">{{ k }}</p>
                    <p v-for="item in v" class="text-white opacity-60">
                        {{ item }}
                    </p>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center gap-4">
            <img class="invert opacity-60 h-8 w-8" v-for="social in SOCIALS"
                :src="'/svg/logo--' + social.toLowerCase() + '.svg'" />
        </div>

        <p class="text-center text-white">
            © 2024 The Beacon Inc. - All Rights Reserved
        </p>
    </footer>
</template>
  
<script setup lang="ts">
const HEADER_NAV = [{
    "type": "text",
    "content": "properties"
},
{
    "type": "text",
    "content": "blog"
},
{
    "type": "text",
    "content": "about"
},
]

const SOCIALS = [
    "Discord",
    "Facebook",
    "Github",
    "Twitter",
    "YouTube"
]

const FOOTER_ITEMS = {
    "Services": [
        "Buy or Rent",
        "List a Property",
        "Newsletter"
    ],
    "Legal": [
        "Terms and Conditions",
        "Privacy Policy"
    ],
    "Careers": [
        "Internships",
        "Jobs",
        "Partners"
    ]
}

interface BlogPost {
    name: string,
    description: string,
    imageUrl: string,
    author: string,
    date: string
}

const BLOG_POSTS: Array<BlogPost> = [
    {
        "name": "Navigating the Buyer's Market",
        "description": "In this post, we demystify the complexities of the current real estate market, providing actionable tips and strategies to help buyers navigate confidently and make informed decisions in a competitive landscape.",
        "imageUrl": "/blog/navigating_the_buyers_market.png",
        "author": "Ishat Gupta",
        "date": "15-2-2024"
    },
    {
        "name": "Opportunities in Emerging Neighborhoods",
        "description": "Discover the untapped potential of emerging neighborhoods and uncover lucrative investment opportunities that promise high returns and long-term growth prospects.",
        "imageUrl": "/blog/investment_opportunities_in_emerging_neighborhoods.png",
        "author": "Ishat Gupta",
        "date": "15-2-2024"
    },
    {
        "name": "The Future of Sustainable Living",
        "description": "Explore the evolving landscape of sustainable living and eco-friendly housing solutions, as we discuss innovative trends, technologies, and practices shaping the future of real estate.",
        "imageUrl": "/blog/the_future_of_sustainable_living.png",
        "author": "Ishat Gupta",
        "date": "15-2-2024"
    },
    {
        "name": "Transforming Spaces with Style",
        "description": "Get inspired to unleash your creativity and elevate your living spaces with our showcase of stunning renovation projects, expert design tips, and budget-friendly hacks for a home that truly reflects your unique style and personality.",
        "imageUrl": "/blog/renovation_inspiration_transforming_spaces_with_style.png",
        "author": "Ishat Gupta",
        "date": "15-2-2024"
    },
]

</script>
  
<style>
#main-hero {
    background-image: url("/photos/search_bg.webp");
    background-size: cover;
}</style>