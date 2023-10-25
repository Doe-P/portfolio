import {reactive} from "vue";

export const experience = reactive({
    id: "section-experience",
    title: "Experience",
    data: [
        {
            date: "2021 - 2023",
            picture: "",
            title: {
                name: "Front-end and Mobile app at HalTech",
                link: "https://github.com/Doe-P"
            },
            materialLink: "https://github.com/Doe-P",
            description: ["· Developed a real-time statistical analysis system for football betting and investing, which conducted extensive data analysis over four years, showing consistent positive returns on selected matches that were placed by selected conditions.", "· Developed a notification system to send alerts to the Line application when there are matches that meet the specified conditions."],
            techStack: ["Vue.js", "Javascript", "Typescript", "HTML", "CSS", "Tailwind", "Antd", "Flutter", "github"]
        }
    ]
});
