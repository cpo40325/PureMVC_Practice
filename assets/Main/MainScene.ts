import MainFacade from "./PureMVC/MainFacade";
import CommandMap from "./PureMVC/Map/CommandMap";
import MainSceneMediator from "./PureMVC/Mediator/MainSceneMediator";
import PlayerMediator from "./PureMVC/Mediator/PlayerMediator";
import Player from "./View/Player/Player";
import TestLabel from "./View/TestLabel/TestLabel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainScene extends cc.Component {

    @property(cc.Prefab)
    labelPrefab: cc.Prefab = null;

    facade: MainFacade;

    player: Player = null

    starup() {
        this.node.addChild(cc.instantiate(this.labelPrefab));
        this.player = this.getComponentInChildren(Player.name)

    }


    start() {
        this.facade = new MainFacade();
        this.facade.registerMediator(new MainSceneMediator(this))
        this.starup();
    }


    addLabel() {

        // 使用给定的模板在场景中生成一个新节点
        var newLabel = cc.instantiate(this.labelPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newLabel);
        // 为星星设置一个随机位置
        newLabel.setPosition(0, 0);
        // newLabel.getComponent('Star').game = this;
    }





    // onPicked() {
    //     // 然后销毁当前星星节点
    //     this.getComponentInChildren(TestLabel.name).node.destroy();
    // }

    // getPlayerDistance(nodeA, nodeB) {
    //     // 根据 Player 节点位置判断距离
    //     var playerPos = nodeA.getPosition();
    //     // 根据两点位置计算两点之间距离
    //     var dist = nodeB.position.sub(playerPos).mag();
    //     return dist;
    // }

       // collision(){
    //     var label = this.getComponentInChildren(TestLabel.name)
 

    //     if (label == null || this.player == null) {
            
    //         console.log('collision null');
            
    //         return
    //     }


        

    //     if (this.getPlayerDistance(this.player.node, label.node) < this.player.node.width) {
    //         this.onPicked();
    //         this.facade.sendNotification(CommandMap.UPDATE_EXP);
    //     }

    // }



}
