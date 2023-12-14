import {defineStore} from "pinia";

export const useSectionStore = defineStore('sectionStore', {
    state: () => ({
       sectionIds: [],
        currentSection: '',
    }),
    getters:{
        getCurrentSection: (state) => state.currentSection,
    },
    actions: {
        addSectionIds(sectionId){
            const elementId = document.getElementById(sectionId).id;
            this.sectionIds = [...new Set([...this.sectionIds, elementId])];
            this.currentSection = this.sectionIds.length > 0 ? this.sectionIds[0] : sectionId;
        },
        setCurrentSectionId(sectionId){
            this.currentSection = sectionId;
        }
    }
});
