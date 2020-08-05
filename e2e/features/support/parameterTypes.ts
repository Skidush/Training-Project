// import { defineParameterType } from "cucumber";
// import { enumPages } from "../../models/enums/pages.enum";
// import { securityPage } from '../../po/security.po';
// import { dashBoardPage } from '../../po/dashboard.po';

// export class ParameterUtil {
//     static toOrFormat(enumToTransform: any) {
//         const enumArray = [];
//         Object.keys(enumToTransform).forEach(key => {
//             enumArray.push(enumPages[key]);
//         });
//         const regexp = new RegExp(`(${enumArray.join('|')})`)
//         return regexp;
//     }
// }

// defineParameterType({
//     regexp: ParameterUtil.toOrFormat(enumPages),
//     transformer: input => {
//         let currentPage;

//         if (input === 'login') {
//             currentPage = new securityPage();
//         } else {
//             currentPage = new dashBoardPage();
//         }
//         return currentPage;
//     },
//     name: 'page'
// });