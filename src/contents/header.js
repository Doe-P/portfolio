import {reactive} from "vue";
import Resume from "../../static/resume-1.pdf"

export const data = reactive({
    name:'Phoukhan Xayavongsone',
    title: 'Front-End & Mobile App Developer',
    description: 'From concept to reality, bridging the gap with code, transforming ideas into tangible digital solutions.',
    link: Resume,
    buttonText: 'View Resume',
});
