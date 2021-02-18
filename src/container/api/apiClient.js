import {skills} from './../student/StudentData';
import _ from 'lodash';

function getSkillDesc(skillIds){
    let skillDesc=[];
    for (let skillId of skillIds){
        skillDesc.push(_.find(skills,x=> x.id === skillId).desc);
    }

    return skillDesc;
}

export {getSkillDesc}

