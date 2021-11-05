import EnemyMediator from "../../PureMVC/Mediator/EnemyMediator";
import KYPureFacade from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Core/KYPureFacade";
import MainScene from "../../MainScene";
import TestLabel from "../TestLabel/TestLabel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Enemy extends cc.Component {


    xSpeed = 0;
    ySpeed = 0;
    accTop = false;
    accDown = false;
    accLeft = false;
    accRight = false;
    accel = 5
    maxMoveSpeed = 20;

    start () {


        KYPureFacade.getInstance('MainFacade').registerMediator(new EnemyMediator(this));
        cc.director.getCollisionManager().enabled = true;
    
            // 加速度方向开关
            this.accLeft = false;
            this.accRight = false;
            this.accTop = false;
            this.accDown = true;
            // 主角当前水平方向速度
            this.xSpeed = Math.floor(Math.random()*3);
            this.ySpeed = Math.floor(Math.random()*3);
    }

    onCollisionEnter(){
        
        console.log('Enemy onCollisionEnter');
        
    }

    find(){
        
        var food = this.node.parent.getChildByName('TestLabel')

        if (food == null) {
            return
        }
        
        console.log(food.x,food.y);
        
    }

    update(dt) {
        this.find()

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

        if (this.node.x >= 460 || this.node.x <= -460) {
            this.xSpeed *=-1
        }
        if (this.node.y >= 300 || this.node.y <= -300) {
            this.ySpeed *=-1
        }
        // 根据当前速度更新主角的位置
        this.node.x += this.xSpeed * dt;
        this.node.y += this.ySpeed * dt;
    }
}
