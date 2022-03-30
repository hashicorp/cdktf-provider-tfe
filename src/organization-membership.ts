// https://www.terraform.io/docs/providers/tfe/r/organization_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_membership#email OrganizationMembership#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_membership#organization OrganizationMembership#organization}
  */
  readonly organization: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/organization_membership tfe_organization_membership}
*/
export class OrganizationMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_organization_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/organization_membership tfe_organization_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_organization_membership',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.26.1',
        providerVersionConstraint: '~> 0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._email = config.email;
    this._organization = config.organization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      organization: cdktf.stringToTerraform(this._organization),
    };
  }
}
