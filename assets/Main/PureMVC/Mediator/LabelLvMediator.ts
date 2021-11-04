
import KYPureMediator from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Mediator/KYPureMediator";
import KYPureNotification from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Observer/KYPureNotification";
import LabelLv from "../../View/LabelLv/LabelLv";
import NotificationMap from "../Map/NotificationMap";

export default class LabelLvMediator extends KYPureMediator {

    static NAME = 'LabelLvMediator';

    constructor(viewComponent: any) {
        
        super(LabelLvMediator.NAME, viewComponent);
    }

    listNotificationInterests(): string[] {
        
        return [NotificationMap.UPDATE_LABEL_LV];
    }

    handleNotification(notification: KYPureNotification): void {
        switch (notification.getName()) {
            case NotificationMap.UPDATE_LABEL_LV:
                this.updateView(notification.getBody())
                break;
            default:

                break;

        }

    }


    updateView(lv:number) {
        console.log('LabelLvMediator updateView' + lv);
        this.getComponent().node.getComponent(cc.Label).string = 'LV' + lv.toString()
    }

    onClick(button: cc.Button) {

        console.log('LabelLvMediator click');

    }
    onRegister() {
        this.getComponent().node.on('click', this.onClick, this);
    }




    getComponent(): LabelLv {
        return super.getComponent();
    }





}
