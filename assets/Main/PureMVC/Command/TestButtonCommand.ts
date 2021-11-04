import SimpleCommand from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Command/SimpleCommand";
import KYPureNotification from "../../../KYCreatorSDK/DesignPatterns/KYPrueMVC/Observer/KYPureNotification";
import LabelExp from "../../View/LabelExp/LabelExp";
import CommandMap from "../Map/CommandMap";
import NotificationMap from "../Map/NotificationMap";
import LabelExpMediator from "../Mediator/LabelExpMediator";
import LabelExpProxy from "../Proxy/LabelExpProxy";
import TestButtonProxy from "../Proxy/TestButtonProxy";
import TestLabelProxy from "../Proxy/TestLabelProxy";

export default class TestButtonCommand extends SimpleCommand {

    public static NAME = 'SubViewCommand ';

    public constructor(key: string) {
        super();
    }

    // 执行的方法
    public execute(notification: KYPureNotification): void {

        const testButtonProxy = <TestButtonProxy>this.getFacade().retrieveProxy(TestButtonProxy.NAME);
        const testLabelProxy = <TestLabelProxy>this.getFacade().retrieveProxy(TestLabelProxy.NAME);
        const labelExpProxy = <LabelExpProxy>this.getFacade().retrieveProxy(LabelExpProxy.NAME);
        switch (notification.getName()) {
            case CommandMap.TEST_BUTTON_CLICK:
                // testButtonProxy.onTestButtonClick();
                testLabelProxy.onTestButtonClick()
                break;
            case CommandMap.UPDATE_EXP:

                labelExpProxy.updateExp();
                
                break;
            case CommandMap.TEST_LABEL_CLICK:


            break;
            default:
                break;
        }
    }


}
