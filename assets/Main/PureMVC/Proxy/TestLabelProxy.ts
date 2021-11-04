import KYPrueProxy from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Proxy/KYPureProxy";
import NotificationMap from "../Map/NotificationMap";


export default class TestLabelProxy extends KYPrueProxy {

    public static NAME = 'TestLabelProxy';


    labelCount = 1


    public constructor() {
        super(TestLabelProxy.NAME, null);

    }

    onTestButtonClick() {

        this.labelCount++
        console.log('labelCount: ' + this.labelCount);

        this.sendNotification(NotificationMap.ADD_LABEL)
        
    }
}