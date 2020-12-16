export function getCourses() {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(['web高级', 'web全栈']);
        }, 2000)
    });
}