import LabelExpMediator from "../../PureMVC/Mediator/LabelExpMediator";
import KYPureFacade from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Core/KYPureFacade";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LabelExp extends cc.Component {

    start () {
        KYPureFacade.getInstance('MainFacade').registerMediator(new LabelExpMediator(this));
    }

}
