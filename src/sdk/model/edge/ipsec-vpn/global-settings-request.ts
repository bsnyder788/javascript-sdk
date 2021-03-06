import { GlobalSettingsRequestJson } from './__json__/global-settings-request-json';

/**
 * Global Settings Request.
 */
/* istanbul ignore next: autogenerated */
export class GlobalSettingsRequest {

  private readonly _json: GlobalSettingsRequestJson;

  constructor(globalSettingsRequest: GlobalSettingsRequest);
  constructor(globalSettingsRequestJson: GlobalSettingsRequestJson);
  constructor(psk: string, serviceCertificate: string, caCertificates: Array<string>, crlCertificates: Array<string>);
  constructor(firstParam: string | GlobalSettingsRequest | GlobalSettingsRequestJson,
              serviceCertificate?: string, caCertificates?: Array<string>, crlCertificates?: Array<string>) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        psk: firstParam,
        service_certificate: serviceCertificate,
        ca_certificates: caCertificates,
        crl_certificates: crlCertificates
      } as GlobalSettingsRequestJson;
    } else if (firstParam instanceof GlobalSettingsRequest) {
      // Copy constructor
      this._json = (firstParam as GlobalSettingsRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as GlobalSettingsRequestJson;
    }
  }

  /**
   * Get psk.
   * @returns {string}
   */
  get psk(): string {
    return this._json.psk;
  }

  /**
   * Get service certificate.
   * @returns {string}
   */
  get serviceCertificate(): string {
    return this._json.service_certificate;
  }

  /**
   * Get ca certificates.
   * @returns {Array<string>}
   */
  get caCertificates(): Array<string> {
    return this._json.ca_certificates;
  }

  /**
   * Get crl certificates.
   * @returns {Array<string>}
   */
  get crlCertificates(): Array<string> {
    return this._json.crl_certificates;
  }

  /**
   * Get the json representation of this class.
   * @returns {GlobalSettingsRequestJson}
   */
  get json(): GlobalSettingsRequestJson {
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
