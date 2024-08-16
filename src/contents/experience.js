import {reactive} from "vue";

export const experience = reactive({
    id: "section-experience",
    title: "Experience",
    data: [
        {
            date: "MAR 2024 - Present",
            picture: "",
            title: {
                name: "Front-end developer at AIF Group",
                link: "https://aifgrouplaos.com/"
            },
            materialLink: "",
            description: ["- Developed an web applications for inside and outside company about HR management system and Lao postal system using Next.js framework for server side rendering.", "- Maintenance system and Fixing problem."],
            techStack: ["Next.js", "Nuxt.js", "Typescript", "Svelte.js", "Tailwind", "Git/Github"]
        },
        {
            date: "2021 - FEB 2024",
            picture: "",
            title: {
                name: "Front-end and Mobile app at HalTech",
                link: "https://haltech.la/"
            },
            materialLink: "",
            description: ["- Developed an web applications for back door management of hal e-commerce and hal-self using Vue.js framework and Ant design UI framework.", "- One of the team members who developed the hal logistic app about PIN (Personal Identification Number) before transfer point on app, Referral code feature.", "- Maintenance and Fixing problem from bugs and bad user experience on the app."],
            techStack: ["Vue.js", "Javascript", "Typescript", "HTML", "CSS", "Tailwind", "Antd", "Flutter", "Github"]
        },
        {
            date: "June 2020",
            picture: "",
            title: {
                name: "Intern front-end developer at MGM",
                link: "https://mgm-communications.la/"
            },
            materialLink: "",
            description: ["- Develop an website using html, css and javascript", "- Build web landing page by bootstrap 5"],
            techStack: ["Javascript","HTML", "CSS", "Bootstrap"]
        },
    ]
});
