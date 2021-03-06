import { GatewayNatRule } from '../gateway-nat-rule/gateway-nat-rule';
import { NatServiceJson } from './__json__/nat-service-json';
import { GatewayNatRuleJson } from '../gateway-nat-rule/__json__/gateway-nat-rule-json';

/**
 * NatService class
 */
export class NatService {

  constructor(private _json: NatServiceJson) {
  }

  /**
   * Get external ip
   * @returns {string | null}
   */
  get externalIp(): string | null {
    return this._json.external_ip;
  }

  /**
   * Get type
   * @returns {string | null}
   */
  get type(): string | null {
    return this._json.type;
  }

  /**
   * Get policy
   * @returns {string | null}
   */
  get policy(): string | null {
    return this._json.policy;
  }

  /**
   * Check weather nat service is enabled or not
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Get a list of gateway nat rules.
   * @returns {Array<GatewayNatRule>}
   */
  get rules(): Array<GatewayNatRule> {
    const rules = (this._json.rules || []) as Array<GatewayNatRuleJson>;
    return rules.map(rule => new GatewayNatRule(rule));
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {NatServiceJson}
   */
  get json(): NatServiceJson {
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
