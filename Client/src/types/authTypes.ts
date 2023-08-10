export interface authSliceState {
  user: object | null;
  error: boolean;
  success: boolean;
  loading: boolean;
  message: string | null;
}
