
import KYPureMediator from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Mediator/KYPureMediator";
import KYPureNotification from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Observer/KYPureNotification";
import TestLabel from "../../View/TestLabel/TestLabel";
import NotificationMap from "../Map/NotificationMap";

export default class TestLabelMediator extends KYPureMediator {

    static NAME = 'TestLabelMediator';

    constructor(viewComponent: any) {
        super(TestLabelMediator.NAME, viewComponent);
    }

    listNotificationInterests(): string[] {
        return [NotificationMap.UPDATE_LABEL_NUM];
    }

    handleNotification(notification: KYPureNotification): void {
        switch (notification.getName()) {
            case NotificationMap.UPDATE_LABEL_NUM:
                this.updateLabelNum(notification.getBody());
                break;

            default:
                break;
        }
    }

    onRegister() {

    }

    updateLabelNum(num: number) {
        // label.label.string = label.node.x.toString();
        // label.label.fontSize = num;
        // label.node.x = label.node.x+10;
        // this.getComponent().label.string = num.toString();
    }

    getComponent(): TestLabel {
        return super.getComponent();
    }
}
