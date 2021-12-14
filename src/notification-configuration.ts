// https://www.terraform.io/docs/providers/tfe/r/notification_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration.html#destination_type NotificationConfiguration#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration.html#email_addresses NotificationConfiguration#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration.html#email_user_ids NotificationConfiguration#email_user_ids}
  */
  readonly emailUserIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration.html#enabled NotificationConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration.html#name NotificationConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration.html#token NotificationConfiguration#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration.html#triggers NotificationConfiguration#triggers}
  */
  readonly triggers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration.html#url NotificationConfiguration#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration.html#workspace_id NotificationConfiguration#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration.html tfe_notification_configuration}
*/
export class NotificationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tfe_notification_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration.html tfe_notification_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_notification_configuration',
      terraformGeneratorMetadata: {
        providerName: 'tfe'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationType = config.destinationType;
    this._emailAddresses = config.emailAddresses;
    this._emailUserIds = config.emailUserIds;
    this._enabled = config.enabled;
    this._name = config.name;
    this._token = config.token;
    this._triggers = config.triggers;
    this._url = config.url;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_type - computed: false, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // email_addresses - computed: true, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // email_user_ids - computed: true, optional: true, required: false
  private _emailUserIds?: string[]; 
  public get emailUserIds() {
    return this.getListAttribute('email_user_ids');
  }
  public set emailUserIds(value: string[]) {
    this._emailUserIds = value;
  }
  public resetEmailUserIds() {
    this._emailUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailUserIdsInput() {
    return this._emailUserIds;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: string[]; 
  public get triggers() {
    return this.getListAttribute('triggers');
  }
  public set triggers(value: string[]) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_type: cdktf.stringToTerraform(this._destinationType),
      email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._emailAddresses),
      email_user_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._emailUserIds),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      token: cdktf.stringToTerraform(this._token),
      triggers: cdktf.listMapper(cdktf.stringToTerraform)(this._triggers),
      url: cdktf.stringToTerraform(this._url),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }
}
