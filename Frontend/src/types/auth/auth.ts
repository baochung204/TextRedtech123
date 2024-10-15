export interface registerType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

export interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

export interface signInType {
  title?: string;
}

export interface registrationV2 {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  platform: string;
}
