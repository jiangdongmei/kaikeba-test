// export function getCourses() {
//     return new Promise(resolve => {
//         setTimeout(function() {
//             resolve(['web高级', 'web全栈']);
//         }, 2000)
//     });
// }
// 通过模拟接口操作
import axios from 'axios'
export function getCourses() {
    return axios.get('/api/courses').then(res => {
        return res.data;
    });
}