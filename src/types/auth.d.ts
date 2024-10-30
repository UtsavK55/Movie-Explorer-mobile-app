interface UserLoginContextType {
  loginId: string;
  setLoginId: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
}
