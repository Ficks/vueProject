import Chinese from './Chinese.js'; //中文简体
import Traditional from './Traditional.js'; //繁體中文
import English from './English.js'; //繁體中文
var language = {
    listArr: [{
        src: "./static/images/zg.png",
        name: "简体中文(Chinese)",
        value: "Chinese"
    }, {
        src: "./static/images/zg.png",
        name: "繁體中文(Traditional)",
        value: "Traditional"
    }, {
        src: "./static/images/mg.png",
        name: "English(English)",
        value: "English"
    }],
    value: {
        Chinese: Chinese,
        Traditional: Traditional,
        English: English
    }
}

export default language;