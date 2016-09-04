const devtron = require('devtron');
const devToolsInstaller = require('electron-devtools-installer');

const initTools =  () => {
    devtron.install();

    return Promise.all(
        [devToolsInstaller.REDUX_DEVTOOLS, devToolsInstaller.REACT_DEVELOPER_TOOLS].map((tool) => {
            return devToolsInstaller.default(tool)
                .then((name) => console.log(`Added Extension:  ${name}`))
                .catch((err) => console.log('An error occurred: ', err));
        })
    );
};

module.exports.initTools = initTools;
