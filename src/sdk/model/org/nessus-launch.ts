import { NessusLaunchJson } from './__json__/nessus-launch-json';

/**
 *  Nessus Launch result.
 */
/* istanbul ignore next: autogenerated */
export class NessusLaunch {

  constructor(private _json: NessusLaunchJson) {
  }

  /**
   * Get scan uuid.
   * @returns {string}
   */
  get scanUuid(): string {
    return this._json.scan_uuid;
  }

  /**
   * Get error.
   * @returns {string}
   */
  get error(): string {
    return this._json.error;
  }

  /**
   * Get the json representation of this class.
   * @returns {NessusLaunchJson}
   */
  get json(): NessusLaunchJson {
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
