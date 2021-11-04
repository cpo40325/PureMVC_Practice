
import KYPureMediator from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Mediator/KYPureMediator";
import KYPureNotification from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Observer/KYPureNotification";
import LabelExp from "../../View/LabelExp/LabelExp";
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
        this.getComponent().node.on('click', this.onClick, this);
    }

    onClick(button: cc.Button) {
        console.log('LabelExp onClick');

    }



    getComponent(): LabelExp {
        return super.getComponent();
    }



    updateExp(exp: number) {
        console.log('exp:' + exp);

        this.getComponent().node.getComponent(cc.Label).string = 'exp: ' + exp.toString();

        this.getFacade().sendNotification(CommandMap.UPDATE_EXP_PROGRESS, exp)
    }

}
