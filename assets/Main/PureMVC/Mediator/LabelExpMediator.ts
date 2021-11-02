
import KYPureMediator from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Mediator/KYPureMediator";
import KYPureNotification from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Observer/KYPureNotification";
import LabelExp from "../../View/LabelExp/LabelExp";
import Player from "../../View/Player/Player";
import TestButton from "../../View/TestButton/TestButton";
import CommandMap from "../Map/CommandMap";
import NotificationMap from "../Map/NotificationMap";

export default class LabelExpMediator extends KYPureMediator {


    static NAME = 'LabelExp';

    constructor(viewComponent: any) {
        super(LabelExpMediator.NAME, viewComponent);
    }

    listNotificationInterests(): string[] {
        return [NotificationMap.UPDATE_LABEL_EXP];
    }

    handleNotification(notification: KYPureNotification): void {
        
        switch (notification.getName()) {
            case NotificationMap.UPDATE_LABEL_EXP:
                this.updateExp(notification.getBody());
                break;

            default:
                break;
        }
    }

    onRegister() {

    }



    getComponent(): LabelExp {
        return super.getComponent();
    }



    updateExp(exp:number) {
       console.log('exp'+exp);

       this.getComponent().string = exp.toString();

    //    var a = this.getComponent() as unknown as cc.Label
    //    a.string = exp.toString();
    }

}
