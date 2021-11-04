import KYPureFacade from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Core/KYPureFacade";
import TestButtonMediator from "../../PureMVC/Mediator/TestButtonMediator";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TestButton extends cc.Component {

    @property(cc.Button)
    button: cc.Button = null;

    // onLoad () {}

    start() {
        KYPureFacade.getInstance('MainFacade').registerMediator(new TestButtonMediator(this));
    }

    // update (dt) {}



}
