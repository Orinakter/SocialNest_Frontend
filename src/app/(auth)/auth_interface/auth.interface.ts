export interface LoginState {
     success: boolean;
     message: string;
    statusCode: number;
    data?: {
        accessToken: string;
        refreshToken: string;
}

}