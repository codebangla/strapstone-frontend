export interface UserForRegister {
    userName: string;
    password: string;
    email?: string;
}

export interface UserForLogin {
    userName: string;
    password: string;
    token: string;
}