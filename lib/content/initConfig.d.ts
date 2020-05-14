export declare const initConfig = "\n/**\n  * each project will use the \"requester\" function when request remote api\n  * so this file would be included into your source file when compile\n  * */\nimport { IProject } from 'ts-gear'\nimport { requester as fetchRequester } from 'ts-gear/lib/requester/fetch'\n// import { requester as axiosRequester } from 'ts-gear/lib/requester/axios'\n\nconst projects: IProject[] = [\n  {\n    /** project name\n     * will used to mkdir in \"dest\"\n     * */\n    name: 'pet',\n    /** the api files will be generated to\n     * @example 'service'\n     * note: this directory is relative to this ts-gear config file\n     * */\n    dest: 'service',\n    /** swagger doc path\n     * could be remote or local json file\n     * starts with \"http\" is remote\n     * others are dealed local json file\n     * note: if use local file, the directory is relative to this ts-gear config file\n     * */\n    source: 'http://petstore.swagger.io/v2/swagger.json',\n    // source: './fixture/pet.json',\n\n    /**\n     * the param for fetch swagger doc\n     * see https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters\n     * */\n      // fetchSwaggerDocOption: {\n      //   headers: { Accept: 'application/json,*/*' },\n      // },\n\n    requester: fetchRequester(),\n\n    /** filter api path\n     * some project mix too mach useless api\n     * use this option could avoid those to be written in your api file\n     * */\n    // pathMatcher?: /^/api/,\n\n    /**\n     * @default true\n     * ts-gear try to keep the generic type for all definition\n     * but real world swagger doc has many bad definition\n     * if generic type make some error\n     * assign \"false\" to this option\n     * ts-gear will not generate generic type\n     * the process of generating typescript content will be more stable.\n     * */\n    // keepGeneric: true,\n\n    /** if your swagger doc has some non english words in definitions keys or some $ref position,\n     * choose an engine to transate those words to english\n     * the translated results are not for human reading, but for program variable names.\n     * because translation depends on internet, you may need to retry some times to get results successfuly.\n     * once your api is generated, change to another engine and regenerate new api, the translate output will definitely be different, so the api content will be different too.\n     *\n     * most case you don not need this option, try to persuade your teammate to correct the swagger doc to english is a better way.\n     * if there are unregular charator, and you can not fix it,\n     * try to use an engine provided by \"translation.js\"\n     * \"baidu\" or \"google\"\n     * */\n    // translationEngine: 'baidu',\n\n    /** use swagger sample data mock response data\n     * usually usage: process.env.NODE_ENV === 'test'\n     * */\n    // mockResponse: process.env.NODE_ENV === 'test',\n\n    /** output content prettier config */\n    // prettierConfig: { \n    //   semi: false,\n    // }\n  },\n]\n\nexport default projects\n";
