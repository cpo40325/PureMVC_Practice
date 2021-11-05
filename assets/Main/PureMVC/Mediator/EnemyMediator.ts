import KYPureMediator from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Mediator/KYPureMediator";
import KYPureNotification from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Observer/KYPureNotification";

export default class EnemyMediator extends KYPureMediator {

    static NAME = 'EnemyMediator'

    constructor(viewComponent: any) {
        super(EnemyMediator.NAME, viewComponent);
    }


    listNotificationInterests(): String[] {

        return []
    }

    handleNotification(notification: KYPureNotification) {



    }


    onRegister(){
        
    }
    getComponent() {
        return super.getComponent()
    }
}