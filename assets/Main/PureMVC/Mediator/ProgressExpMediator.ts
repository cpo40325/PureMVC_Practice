
import KYPureMediator from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Mediator/KYPureMediator";
import KYPureNotification from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Observer/KYPureNotification";
import ProgressExp from "../../View/ProgressExp/ProgressExp";
import CommandMap from "../Map/CommandMap";


export default class ProgressExpMediator extends KYPureMediator {

    static NAME = 'ProgressExpMediator';

    constructor(viewComponent: any) {
        super(ProgressExpMediator.NAME, viewComponent);
    }

    listNotificationInterests(): string[] {
        return [CommandMap.UPDATE_EXP_PROGRESS];
    }

    handleNotification(notification: KYPureNotification): void {
        switch (notification.getName()) {
            case CommandMap.UPDATE_EXP_PROGRESS:

            this.updateView(notification.getBody())

            break;
            default:
                break;
        }
    }

    onRegister() {
        this.getComponent().node.on('click', this.onClick, this);
    }

    updateView(exp: number){
        var progress = this.getComponent().node.getComponent(cc.ProgressBar)
        console.log(exp);
        

        progress.progress = exp/ 100

    }


    onClick(button: cc.Button) {
    }
    getComponent(): ProgressExp {
        return super.getComponent();
    }
}
