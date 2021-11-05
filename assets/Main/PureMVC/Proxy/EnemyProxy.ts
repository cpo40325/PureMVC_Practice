import KYPrueProxy from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Proxy/KYPureProxy";
import NotificationMap from "../Map/NotificationMap";


export default class EnemyProxy extends KYPrueProxy {

    public static NAME = 'EnemyProxy';

    exp = 0
    lv = 1

    public constructor() {
        super(EnemyProxy.NAME, null);

    }

    // updateExp() {
    //     this.exp += 10;
        

    //     if (this.exp >= 100) {
    //         this.exp = 0
    //         this.lv ++
    //         this.getFacade().sendNotification(NotificationMap.UPDATE_LABEL_LV, this.lv)
    //         this.getFacade().sendNotification(NotificationMap.PLAYER_UPGRADE)

    //     }
    //     this.getFacade().sendNotification(NotificationMap.UPDATE_LABEL_EXP, this.exp)


    // }
}