import MainFacade from "./PureMVC/MainFacade";
import CommandMap from "./PureMVC/Map/CommandMap";
import MainSceneMediator from "./PureMVC/Mediator/MainSceneMediator";
import PlayerMediator from "./PureMVC/Mediator/PlayerMediator";
import Player from "./View/Player/Player";

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

        var x = 480 - Math.floor(Math.random()* 960)
        var y = 320 - Math.floor(Math.random()* 640)

        newLabel.setPosition(x,y)
        console.log(x+' , '+y);
        
    }





}
