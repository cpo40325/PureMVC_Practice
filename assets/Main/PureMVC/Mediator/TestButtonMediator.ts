
import KYPureMediator from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Mediator/KYPureMediator";
import KYPureNotification from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Observer/KYPureNotification";
import TestButton from "../../View/TestButton/TestButton";
import CommandMap from "../Map/CommandMap";

export default class TestButtonMediator extends KYPureMediator {

    static NAME = 'TestButtonMediator';

    constructor(viewComponent: any) {
        super(TestButtonMediator.NAME, viewComponent);
    }

    listNotificationInterests(): string[] {
        return [];
    }

    handleNotification(notification: KYPureNotification): void {

    }

    onRegister() {
        this.getComponent().node.on('click', this.onClick, this);
    }

    getComponent(): TestButton {
        return super.getComponent();
    }

    onClick(button: cc.Button) {
        this.getFacade().sendNotification(CommandMap.TEST_BUTTON_CLICK);
    }




}
