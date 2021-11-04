
import KYPureMediator from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Mediator/KYPureMediator";
import KYPureNotification from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Observer/KYPureNotification";
import Player from "../../View/Player/Player";

export default class PlayerMediator extends KYPureMediator {

    static NAME = 'PlayerMediator';

    constructor(viewComponent: any) {
        super(PlayerMediator.NAME, viewComponent);
    }

    listNotificationInterests(): string[] {
        return [];
    }

    handleNotification(notification: KYPureNotification): void {

    }
    onClick(button: cc.Button) {
        // this.getFacade().sendNotification(CommandMap.TEST_LABEL_CLICK);

        console.log('PlayerMediator click');
        
        
    }
    onRegister() {
        this.getComponent().node.on('click', this.onClick, this);
     // 初始化键盘输入监听
    //  cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.getComponent().onKeyDown, this);
    //  cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.getComponent().onKeyUp, this);    
    }


    onDestroy() {
        // 取消键盘输入监听
        // cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.getComponent().onKeyDown, this);
        // cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.getComponent().onKeyUp, this);
    }

    getComponent(): Player {
        return super.getComponent();
    }





}
