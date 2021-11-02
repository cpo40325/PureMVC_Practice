import KYPureFacade from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Core/KYPureFacade";
import PlayerMediator from "../../PureMVC/Mediator/PlayerMediator";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    onLoad() {
        // 初始化跳跃动作
        // var jumpAction = this.runJumpAction();
        // cc.tween(this.node).then(jumpAction).start()

        // 加速度方向开关
        this.accLeft = false;
        this.accRight = false;
        this.accTop = false;
        this.accDown = false;
        // 主角当前水平方向速度
        this.xSpeed = 0;
        this.ySpeed = 0;
     cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
     cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);    
   
    }

    onDestroy(){
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);    
    }
    @property('jumpHeight')
    jumpHeight = 0;
    // 主角跳跃持续时间
    @property('jumpDuration')
    jumpDuration = 0;
    // 最大移动速度
    @property('maxMoveSpeed')
    maxMoveSpeed = 0;
    // 加速度
    @property('accel')
    accel = 0;
    
    xSpeed = 0;
    ySpeed = 0;
    accTop = false;
    accDown = false;
    accLeft = false;
    accRight = false;
    onKeyDown(event) {
        // set a flag when key pressed
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
            case cc.macro.KEY.w:
                this.accTop = true;
                break;
            case cc.macro.KEY.s:
                this.accDown = true;
                break;
        }
    }

    onKeyUp(event) {
        // unset a flag when key released
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
            case cc.macro.KEY.w:
                this.accTop = false;
                break;
            case cc.macro.KEY.s:
                this.accDown = false;
                break;
        }
    }

    runJumpAction() {
        // 跳跃上升
        var jumpUp = cc.tween().by(this.jumpDuration, { y: this.jumpHeight }, { easing: 'sineOut' });
        // 下落
        var jumpDown = cc.tween().by(this.jumpDuration, { y: -this.jumpHeight }, { easing: 'sineIn' });

        // 创建一个缓动，按 jumpUp、jumpDown 的顺序执行动作
        var tween = cc.tween().sequence(jumpUp, jumpDown)
        // 不断重复
        return cc.tween().repeatForever(tween);
    }
    start() {
        KYPureFacade.getInstance('MainFacade').registerMediator(new PlayerMediator(this));
    }




    update(dt) {
        // 根据当前加速度方向每帧更新速度
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        }
        else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
         if (this.accDown) {
            this.ySpeed -= this.accel * dt;
        }
        else if (this.accTop) {
            this.ySpeed += this.accel * dt;
        }

        // 限制主角的速度不能超过最大值
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            // if speed reach limit, use max speed with current direction
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }
        if (Math.abs(this.ySpeed) > this.maxMoveSpeed) {
            // if speed reach limit, use max speed with current direction
            this.ySpeed = this.maxMoveSpeed * this.ySpeed / Math.abs(this.ySpeed);
        }
        // 根据当前速度更新主角的位置
        this.node.x += this.xSpeed * dt;
        this.node.y += this.ySpeed * dt;
    }

}
