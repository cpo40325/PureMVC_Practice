import KYPureFacade from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Core/KYPureFacade";
import MainScene from "../../MainScene";
import TestLabelMediator from "../../PureMVC/Mediator/TestLabelMediator";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TestLabel extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;


    /**
     * 方向
     * 1-> (+,+)
     * 2-> (+,-)
     * 3-> (-,-)
     * 0-> (-,+)
     */
    dir = Math.floor(Math.random() * 4);

    //速度
    xSpeed = 10;
    ySpeed = 10;



    timer: number = 0;
    dirTimer: number = 0;
    // dirDur: number = Math.floor(Math.random() * 10)
    dirDur: number = 3;

    // LIFE-CYCLE CALLBACKS:

    onLoad() { }

    start() {
        KYPureFacade.getInstance('MainFacade').registerMediator(new TestLabelMediator(this));
    }


    update(dt) {
        this.getDir();
        this.move(dt);

        this.dirTimer += dt;
    }
// 1,3
// 2,0



    //決定方向
    getDir() {

        if (this.dirTimer >= this.dirDur) {
            while(true){
                var n = Math.floor(Math.random() * 4);
                if ((n + this.dir)/2 != 0) {
                    this.dir = n;
                    this.dirTimer = 0
                    break;
                }
            }
        }
    }
    move(dt) {


        //位移
        var x = 0;
        var y = 0;


        var b1 = Math.random();
        var b2 = Math.random();

        var sX = this.xSpeed * dt * b1 + b2;
        var sY = this.ySpeed * dt * b2 + b1;
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



}
