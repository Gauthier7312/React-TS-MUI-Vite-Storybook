export type loginTypeProps = {
  isLoading: boolean;
  error: any | null;
  infoOtp: { status: string; phoneNumber: string };
  dataToken: { refresh_token: string; token: string };
  lastUrl: string | any;
};
