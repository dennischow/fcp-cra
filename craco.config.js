module.exports = {
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
                    @import "src/resources/styles/index.scss";
                `,
            },
        },
    },
};
