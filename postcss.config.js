module.exports = {
    plugins: {
        "postcss-px-to-viewport":{
            viewportWidth: 375,
            unitPrecision: 3, //转换后的小数位
            viewportUnit: 'vw',
        }
    }
};
