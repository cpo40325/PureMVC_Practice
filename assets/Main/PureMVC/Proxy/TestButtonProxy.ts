import KYPrueProxy from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Proxy/KYPureProxy";
import NotificationMap from "../Map/NotificationMap";


export default class TestButtonProxy extends KYPrueProxy {

    public static NAME = 'TestButtonProxy';


    public constructor() {
        super(TestButtonProxy.NAME, null);

    }

    onTestButtonClick() {

    }
}