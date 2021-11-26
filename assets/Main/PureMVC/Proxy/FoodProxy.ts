import KYPrueProxy from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Proxy/KYPureProxy";
import NotificationMap from "../Map/NotificationMap";


export default class FoodlProxy extends KYPrueProxy {

    public static NAME = 'FoodProxy';


    labelCount = 1


    public constructor() {
        super(FoodlProxy.NAME, null);

    }

    onTestButtonClick() {

        this.labelCount++
        console.log('labelCount: ' + this.labelCount);

        this.sendNotification(NotificationMap.ADD_LABEL)
        
    }
}