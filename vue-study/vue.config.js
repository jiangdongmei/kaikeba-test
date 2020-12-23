module.exports = {
    
    devServer:{
        // before(app) {
        //     app.get('/api/courses', (req, res) => {
        //         res.json(['web高级', 'web全栈']);
        //     });
        // }
        proxy: "http://localhost:3000"
    }
}
    