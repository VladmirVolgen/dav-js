import BaseMessageParams from '../MessageParams';
/**
 * @class The Class vessel-charging/ChargingArrivalMessageParams represent the parameters of vessel-charging arrival message.
 */
export default class MessageParams extends BaseMessageParams {
  public static _messageType = 'charging_arrival_message';

  constructor(values?: Partial<MessageParams>) {
    super(MessageParams._messageType, values);
  }

  public serialize() {
    const formattedParams = super.serialize();
    return formattedParams;
  }

  public deserialize(json: any): void {
    super.deserialize(json);
  }
}
