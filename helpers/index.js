import stages from '~/data/recruitmentStages';
const idMaker = () => {
    const firstString = Math.random().toString(36).substring(7);
    const secondString = Math.random().toString(36).substring(7);
    return `${firstString}-${secondString}`;
}

const getStageName = (stageId) => {
    // return stages.find( stage => {
    //     if(stage.id == stageId) {
    //         return stage.name;
    //     }
    // })
    const currentStage = stages.find( stage => stage.id == stageId);
    return currentStage.name;
}

export {
    idMaker,
    getStageName
};

