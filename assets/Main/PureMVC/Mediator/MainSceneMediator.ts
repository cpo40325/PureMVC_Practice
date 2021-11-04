import KYPureMediator from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Mediator/KYPureMediator";
import KYPureNotification from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Observer/KYPureNotification";
import MainScene from "../../MainScene";
import NotificationMap from "../Map/NotificationMap";


export default class MainSceneMediator extends KYPureMediator {

    static NAME = 'LabelLvMediator';

    constructor(viewComponent: any) {
        super(MainSceneMediator.NAME, viewComponent);
    }


    listNotificationInterests(): String[] {
        return [NotificationMap.ADD_LABEL]
    }

    handleNotification(notification: KYPureNotification): void {

        switch (notification.getName()) {


            case NotificationMap.ADD_LABEL:

                this.addLabel()

                break


            default:

                break
        }

    }


    onRegister() {

    }

    getComponent(): MainScene {
        return super.getComponent()
    }

    addLabel() {

        this.getComponent().addLabel()
    }



}