import KYPureFacade from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Core/KYPureFacade";
import LabelLvMediator from "../../PureMVC/Mediator/LabelLvMediator";


const {ccclass, property} = cc._decorator;
@ccclass
export default class LabelLv extends cc.Component{

    start(){
        KYPureFacade.getInstance('MainFacade').registerMediator(new LabelLvMediator(this))
    }
}