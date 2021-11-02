import KYPrueProxy from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Proxy/KYPureProxy";
import NotificationMap from "../Map/NotificationMap";


export default class TestButtonProxy extends KYPrueProxy {

    public static NAME = 'TestButtonProxy';

    count = 0;

    public constructor() {
        super(TestButtonProxy.NAME, null);

    }

    onTestButtonClick() {
        this.count++;
        this.getFacade().sendNotification(NotificationMap.UPDATE_LABEL_NUM, this.count);

    }
}