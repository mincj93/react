/* 
craco 모듈
src 디렉토리 외부(프로젝트 외부)에 있는 js 파일을 사용하기 위해 사용한 모듈 

참조 https://bobbyhadz.com/blog/react-you-attempted-to-import-which-falls-outside-project#using-craco-to-import-files-from-outside-the-src-directory


사용법
1. npm install @craco/craco --save-dev 설치

2. craco.config.js 생성하기.
※ 파일은 반드시 해당 프로젝트의 package.json 파일과 동일한 레벨의 폴더에 만들어야함.

3. 아래 구분 craco.config.js 파일에 복사 + 붙여넣기

4. 해당 프로젝트의 package.json의 script 문 수정하기
"scripts": {
    "start": "craco start",
    "build": "cross-env BUILD_PATH='../server/build/fruit_build' craco build",
    "test": "craco test",
    "eject": "craco eject",
},

원래는 "react-scripts start" 혹은 "react-scripts build" 이런 구분이었는데 전부 craco 로 바꿨음.

*/

// craco.config.js 에 붙여넣기
module.exports = {
    webpack: {
        configure: webpackConfig => {
            const scopePluginIndex =
                webpackConfig.resolve.plugins.findIndex(
                    ({ constructor }) =>
                        constructor &&
                        constructor.name === 'ModuleScopePlugin',
                );

            webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
            return webpackConfig;
        },
    },
    babel: {
        presets: ['@babel/preset-react'],
        loaderOptions: (babelLoaderOptions, { env, paths }) => {
            return babelLoaderOptions;
        },
    },
};

// 복붙 끝

