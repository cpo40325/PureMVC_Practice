import ProgressExpMediator from "../../PureMVC/Mediator/ProgressExpMediator";
import KYPureFacade from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Core/KYPureFacade";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ProgressExp extends cc.Component {


    start () {
        KYPureFacade.getInstance('MainFacade').registerMediator(new ProgressExpMediator(this));
    }

}
