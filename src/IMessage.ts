import './common-definitions';
import { MessageStatus, MessageDomain } from './enums';
//ToDo: import Bid from './Bid';
//ToDo: import Mission from './Mission';

/*ToDo: delete*/class Bid { constructor(params){}}
/*ToDo: delete*/class Mission { constructor(params){}}

export default interface IMessage {
    bid: Bid;
    mission: Mission;
    status: MessageStatus;
    domain: MessageDomain;

    respond:(type: string, payload: any) => void;
}