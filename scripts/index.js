window.onload = () => {
    const KOS = {
        // keyword DOM
        keyword: document.querySelector("#keyword"),
        // theme DOM
        theme: document.querySelector("#theme"),
        // popup DOM
        popup: document.querySelector("#popup"),
        // tools DOM
        tools: document.querySelector(".tools"),
        // datas
        datas: [
            { name: 'search-baidu', url: 'https://www.baidu.com/s?wd=' },
            { name: 'search-bing', url: 'https://cn.bing.com/search?q=' },
            { name: 'search-yandex', url: 'https://yandex.com/search/?text=' },
            { name: 'translate-google', url: 'https://translate.google.cn/?sl=zh-CN&tl=en&op=translate&text=' },
            { name: 'translate-baidu', url: 'https://fanyi.baidu.com/?aldtype=16047#zh/en/' },
            { name: 'translate-iciba', url: 'http://www.iciba.com/word?w=' },
            { name: 'develop-github', url: 'https://github.com/search?q=' },
            { name: 'develop-MDN', url: 'https://developer.mozilla.org/zh-CN/search?q=' },
            { name: 'develop-juejin', url: 'https://juejin.cn/search?query=' },
            { name: 'develop-tinypng', url: 'https://tinypng.com' },
            { name: 'develop-ps', url: 'https://www.uupoop.com/#/old' },
            { name: 'develop-stackoverflow', url: 'https://stackoverflow.com/search?q=' },
        ],

        /**
         * Random a background image
         * @returns string
         */
        backgroundRandom() {
            return `${parseInt(Math.random() * 6) + 1}.png`
        },

        /**
         * Init
         */
        init() {
            this.watchKeydown()
            this.watchTheme()
            this.watchClick()
        },

        /**
         * Watch keydown
         */
        watchKeydown() {
            document.onkeydown = event => {
                const e = event || window.event;
                const value = this.keyword.value
                e && e.keyCode === 13 && value && window.open(`https://cn.bing.com/search?q=${value}`)
            }
        },

        /**
         * Watch the theme change
         */
        watchTheme() {
            const backgrounds = [
                ""
            ]
            this.theme.onclick = () => {
                this.popup.style.backgroundImage = `url(../images/theme/theme-${this.backgroundRandom()})`
            }
        },

        /**
         * Watch handle click
         */
        watchClick() {
            this.tools.onclick = e => {
                if (e.target.nodeName !== "DIV") return
                const name = e.target.getAttribute("name")
                const url = this.datas.find(item => item.name === name).url || ''
                const path = url + this.keyword.value
                window.open(path, "_blank")
            }
        }
    }
    KOS.init()
}
