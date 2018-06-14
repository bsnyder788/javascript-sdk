import { VappStartupSectionItemJson } from './__json__';

/* istanbul ignore next: autogenerated */
export class VappStartupSectionItem {

  constructor(private _json: VappStartupSectionItemJson) {
  }

  /**
   * Get vm name.
   * @returns {string}
   */
  get vmName(): string {
    return this._json.vm_name;
  }

  /**
   * Get order.
   * @returns {number}
   */
  get order(): number {
    return this._json.order;
  }

  /**
   * Get startup action.
   * @returns {string}
   */
  get startupAction(): string {
    return this._json.startup_action;
  }

  /**
   * Get stop action.
   * @returns {string}
   */
  get stopAction(): string {
    return this._json.stop_action;
  }

  /**
   * Get start delay.
   * @returns {number}
   */
  get startDelay(): number {
    return this._json.start_delay;
  }

  /**
   * Get stop delay.
   * @returns {number}
   */
  get stopDelay(): number {
    return this._json.stop_delay;
  }

  /**
   * Get the json representation of this class.
   * @returns {VappStartupSectionItemJson}
   */
  get json(): VappStartupSectionItemJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
