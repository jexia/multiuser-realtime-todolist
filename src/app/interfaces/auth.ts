// tslint:disable-next-line
export interface Auth {}

export interface SignUpRequestObject {
  email: string;
  password: string;
}

export interface SignUpResponseObject {
  id: string;
  email: string;
  active: string;
  created_at: string;
  updated_at: string;
}

export interface AuthenticateUMSRequestObject {
  method: string;
  email: string;
  password: string;
}

export interface AuthenticateUMSResponseObject {
  access_token: string;
  refresh_token: string;
}

export interface UserProfileRequestObject {
  user_id: string;
  first_name: string;
  last_name: string;
}

export interface UserResponseObject {
  id: string;
  email: string;
  active: string;
  created_at: string;
  updated_at: string;
}
export interface UserProfileResponseObject {
  id: string;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
  user_id: string;
}
