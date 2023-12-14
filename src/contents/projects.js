import {reactive} from "vue";
import VuePassageDemo from "../../static/vue_passage_demo.gif";
import Portfolio from "../../static/portfolio.gif"

export const projects = reactive({
    id: "section-projects",
    title: "Projects",
    data: [
        {
            date: "14 Dec 2023",
            picture: VuePassageDemo,
            title: {
                name: "Vue3 + Passage.js authentication",
                link: "https://github.com/Doe-P/vue3-auth-with-passage.js"
            },
            materialLink: "https://github.com/Doe-P/vue3-auth-with-passage.js",
            description: ["- Develop simple authentication with passage.js using vue.js 3", "- Can login and register with biometric in 20 seconds."],
            techStack: ["Vue.js","Passage.js", "Tailwindcss", "Pinia"]
        },
        {
            date: "19 Oct 2023",
            picture: Portfolio,
            title: {
                name: "My Portfolio",
                link: "https://github.com/Doe-P/portfolio"
            },
            materialLink: "https://github.com/Doe-P/portfolio",
            description: ["A simple portfolio build with vue.js 3 and Tailwindcss. Inspiration from https://blackboy96.xyz/"],
            techStack: ["Vue.js","Tailwindcss"]
        },
    ]
});
