import KYPrueProxy from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Proxy/KYPureProxy";
import NotificationMap from "../Map/NotificationMap";


export default class LabelExpProxy extends KYPrueProxy {

    public static NAME = 'LabelExpProxy';

    exp = 0;

    public constructor() {
        super(LabelExpProxy.NAME, null);

    }

    updateExp() {
        this.exp += 10;
        
        this.getFacade().sendNotification(NotificationMap.UPDATE_LABEL_EXP, this.exp);

    }
}