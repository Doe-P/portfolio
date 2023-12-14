import {reactive} from "vue";

export const experience = reactive({
    id: "section-experience",
    title: "Experience",
    data: [
        {
            date: "2021 - Present",
            picture: "",
            title: {
                name: "Front-end and Mobile app at HalTech",
                link: "https://haltech.la/"
            },
            materialLink: "",
            description: ["- Develop an web applications using html, css, javascript and vue.js.", "- Develop and refactor web applications in the form of clean architecture by typescript.","- Build application using flutter.", "- Maintenance and fix bugs of application."],
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
