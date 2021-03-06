import Scene from './scene'
import SceneMain from './main'
import ScenePass from './pass'

class SceneStart extends Scene {
    constructor(game) {
        super(game)
    }
    init() {
        this.game.actions = {}
        this.game.registerAction('k', () => {
            this.game.replaceScene(new ScenePass(this.game))
        })
        this.game.registerAction('K', () => {
            this.game.replaceScene(new ScenePass(this.game))
        })

        // 触屏开始游戏
        this.game.c.ontouchstart = () => {           
            this.game.replaceScene(new ScenePass(this.game))
        }

    }
    draw() {
        this.game.ctx.save()
        this.game.ctx.font = '15px sans-serif'
        this.game.ctx.fillStyle = '#000'
        this.game.ctx.textAlign = "center"
        this.game.ctx.textBaseline = "middle"
        this.game.ctx.fillText('作者：XR', this.game.w / 2, this.game.h / 2 - 60)
        this.game.ctx.fillText('特别鸣谢： ZXC LWJ  ', this.game.w / 2, this.game.h / 2 - 45)

        this.game.ctx.fillText('按 k 开始游戏！', this.game.w / 2, this.game.h / 2)
        this.game.ctx.fillText('手机用户点击屏幕', this.game.w / 2, this.game.h / 2 + 30)
        this.game.ctx.fillText('开始游戏', this.game.w / 2, this.game.h / 2 + 45)
        this.game.ctx.restore()
    }
}

export default SceneStart