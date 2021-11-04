import KYPrueProxy from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Proxy/KYPureProxy";
import NotificationMap from "../Map/NotificationMap";


export default class MainSceneProxy extends KYPrueProxy {

    public static NAME = 'MainSceneProxy';


    labelCount = 1


    public constructor() {
        super(MainSceneProxy.NAME, null);

    }

    onTestButtonClick() {

        this.labelCount++
        console.log('labelCount: ' + this.labelCount);

        // this.sendNotification(NotificationMap.ADD_LABEL)
        
    }
}