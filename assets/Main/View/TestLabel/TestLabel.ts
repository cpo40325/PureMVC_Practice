import KYPureFacade from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Core/KYPureFacade";
import MainScene from "../../MainScene";
import CommandMap from "../../PureMVC/Map/CommandMap";
import Player from "../Player/Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TestLabel extends cc.Component {

    /**
     * 方向
     * 1-> (+,+)
     * 2-> (+,-)
     * 3-> (-,-)
     * 0-> (-,+)
     */

    dir = Math.floor(Math.random() * 4);


    hp = 1

    //速度
    xSpeed = 1;
    ySpeed = 1;


    timer: number = 0;
    dirTimer: number = 0;
    // dirDur: number = Math.floor(Math.random() * 10)
    dirDur: number = 3;


    start() {
        cc.director.getCollisionManager().enabled = true;
        var l = this.getComponent(cc.Label)
        this.getComponent(cc.Label).string = 'o'


        this.node.on('click', this.onClick, this)



        //拖曳
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {

            var delta = event.touch.getDelta()
            this.x += delta.x
            this.y += delta.y

        }, this.node)


    }


    onClick() {
        this.underAttack()
    }


    onCollisionEnter(other: cc.Component, self: cc.Component) {


        if (other.name.search(TestLabel.name) != -1) {
            return
        }
        this.hp--

        if (this.hp == 0) {
            this.dead()
        }else{
            this.getDir()
            this.xSpeed++
            this.ySpeed++
        }

    }
    update(dt) {


        if (this.dirTimer >= this.dirDur) {
            this.getDir();
        }
        this.move(dt);

        this.dirTimer += dt;

    }
    // 1,3
    // 2,0



    //決定方向
    getDir() {
        while (true) {
            var n = Math.floor(Math.random() * 4);
            if ((n + this.dir) / 2 != 0) {
                this.dir = n;
                this.dirTimer = 0
                break;
            }
        }
    }
    move(dt) {


        //位移
        var x = 0;
        var y = 0;


        var b1 = Math.random();
        var b2 = Math.random();

        var sX = this.xSpeed * dt + b1;
        var sY = this.ySpeed * dt + b2;
        switch (this.dir) {
            case 1:
                x += sX;
                y += sY;
                break;
            case 2:
                x += sX;
                y -= sY;
                break;
            case 3:
                x -= sX;
                y -= sY;
                break;
            case 0:
                x -= sX;
                y += sY;
                break;
        }

        // 根据当前速度更新主角的位置
        this.node.x += x;
        this.node.y += y;






        // //0.05秒更新一次位置
        // if (this.timer >= 0.05) {
        //     this.timer = 0;



        //     // this.node.setPosition(this.node.x + x, this.node.y + y);
        //     this.timer += dt;

        // }




    }
    underAttack() {
        this.hp--

        console.log('hp: ' + this.hp);
        if (this.hp == 0) {
            this.dead()
        }

    }

    dead(){
        console.log('dead');
        this.getComponent(TestLabel.name).node.destroy();
        KYPureFacade.getInstance('MainFacade').sendNotification(CommandMap.UPDATE_EXP);
    }


}
