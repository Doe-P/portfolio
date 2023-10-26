import {reactive} from "vue";

export const experience = reactive({
    id: "section-experience",
    title: "Experience",
    data: [
        {
            date: "2021 - 2023",
            picture: "https://haltech.la/",
            title: {
                name: "Front-end and Mobile app at HalTech",
                link: ""
            },
            materialLink: "",
            description: ["·ພັດທະນາ front-end ລະບົບຈັດການ ແລະ ລາຍງານຂໍ້ມູນສິນຄ້າ, ລາຍການອໍເດີຂອງ hal ecommerce ແລະ ມີການແຈ້ງເຕືອນແອັດມິນເວລາມີການສັ່ງຊື້ຈາກແອບ ແລະ ພັດທະນາລະບົບຈັດການຊັ້ນວາງສິນຄ້າຕາມສາຂາ", "·ພັດທະນາ UI ແອບພລິເຄຊັນກ່ຽວກັບການສັ່ງຊື້, ຈັດສົ່ງນ້ຳດື່ມ, ປັກມຸດສະຖານທີ່ຈັດສົ່ງ ແລະ ແຈ້ງເຕືອນເມືອຈັດສົ່ງນ້ຳສຳເລັດ.","·ເປັນສ່ວນໜື່ງໃນການພັດທະນາຟັງຊັນການລົງທະບຽນຜ່ານລະຫັດແນະນຳ ແລະ ການໃສ່ລະຫັດ PIN ໃນແອບພລິເຄຊັນ", "·ແກ້ bugs ແລະ ພັດທະນາບາງຟັງຊັນທີ່ລະບົບຕ້ອງການ."],
            techStack: ["Vue.js", "Javascript", "Typescript", "HTML", "CSS", "Tailwind", "Antd", "Flutter", "Github"]
        },
        {
            date: "2020 - 2021",
            picture: "",
            title: {
                name: "Intern on web front-end developer at MGM",
                link: "https://mgm-communications.la/"
            },
            materialLink: "",
            description: ["·ອອກແບບ UI ແລະ ພັດທະນາເວບໄຊ"],
            techStack: ["Javascript","HTML", "CSS", "Bootstrap"]
        },
    ]
});
