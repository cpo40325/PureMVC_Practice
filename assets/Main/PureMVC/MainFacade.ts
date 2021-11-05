import KYPureFacade from "../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Core/KYPureFacade";
import MainScene from "../MainScene";
import TestButtonCommand from "./Command/TestButtonCommand";
import CommandMap from "./Map/CommandMap";
import EnemyProxy from "./Proxy/EnemyProxy";
import LabelExpProxy from "./Proxy/LabelExpProxy";
import MainSceneProxy from "./Proxy/MainSceneProxy";
import TestButtonProxy from "./Proxy/TestButtonProxy";
import TestLabelProxy from "./Proxy/TestLabelProxy";


export default class MainFacade extends KYPureFacade {
    public static NAME = 'MainFacade';


    public constructor(key?: string) {
        super(MainFacade.NAME);
        //註冊控制事件
        this.initialCommand();
        //註冊資料處理項目
        this.initialProxy();
    }

    public static getInstance(): MainFacade {
        return super.getInstance(MainFacade.NAME);
    }

    initialCommand() {
        this.registerCommand(CommandMap.TEST_BUTTON_CLICK, TestButtonCommand);
        this.registerCommand(CommandMap.UPDATE_EXP, TestButtonCommand);
        this.registerCommand(CommandMap.UPDATE_EXP_PROGRESS, TestButtonCommand);
    }
    initialProxy() {
        this.registerProxy(new MainSceneProxy());
        this.registerProxy(new TestLabelProxy());
        this.registerProxy(new TestButtonProxy());
        this.registerProxy(new LabelExpProxy());
        this.registerProxy(new EnemyProxy());

    }

}
