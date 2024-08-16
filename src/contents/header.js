import {reactive} from "vue";
import Resume from "../../static/resume-1.pdf"

export const data = reactive({
    name:'Phoukhan.X (Doe)',
    title: 'Front-End & Mobile App Developer',
    description: 'I am a Front-End & Mobile App Developer with 3 years of experience. I have a passion for learning and sharing my knowledge with others a public content creator.',
    link: Resume,
    buttonText: 'View Resume',
});
