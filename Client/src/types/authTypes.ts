import { UserType } from "./userType";

export interface authSliceState {
  user: UserType | null;
  error: boolean;
  success: boolean;
  loading: boolean;
  message: string | null;
}
