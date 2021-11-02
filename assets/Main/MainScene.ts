import MainFacade from "./PureMVC/MainFacade";
import CommandMap from "./PureMVC/Map/CommandMap";
import PlayerMediator from "./PureMVC/Mediator/PlayerMediator";
import TestLabelMediator from "./PureMVC/Mediator/TestLabelMediator";
import TestLabel from "./View/TestLabel/TestLabel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainScene extends cc.Component {


    @property(cc.Prefab)
    buttonPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    labelPrefab: cc.Prefab = null;

    facade: MainFacade;

    starup() {
        this.node.addChild(cc.instantiate(this.buttonPrefab));
        this.node.addChild(cc.instantiate(this.labelPrefab));
 

    }


    // onLoad() { }

    start() {
        this.facade = new MainFacade();
        this.starup();
    }



    update(dt) {


        var player = this.getComponentInChildren('Player').node;
        var label = this.getComponentInChildren('TestLabel').node;
        if (this.getPlayerDistance(player, label) < player.width) {
            this.onPicked();
            this.facade.sendNotification(CommandMap.UPDATE_EXP);
            return;
        }


    }
    spawnNewStar() {

        // 使用给定的模板在场景中生成一个新节点
        var newLabel = cc.instantiate(this.labelPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newLabel);
        // 为星星设置一个随机位置
        newLabel.setPosition(0, 0);
        // newLabel.getComponent('Star').game = this;
    }


    onPicked() {
        // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
        this.spawnNewStar();
        // 然后销毁当前星星节点
        this.getComponentInChildren('TestLabel').node.destroy();
    }

    getPlayerDistance(nodeA, nodeB) {
        // 根据 Player 节点位置判断距离
        var playerPos = nodeA.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = nodeB.position.sub(playerPos).mag();
        return dist;
    }



}
