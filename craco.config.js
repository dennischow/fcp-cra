module.exports = {
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
                    @import "src/assets/styles/index.scss";
                `,
            },
        },
    },
};
