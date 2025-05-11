export interface IForm {

}

export interface ILoginForm {
    username: string
    password: string
    email?: string
}

export interface ILoginData {
    message: string
    token: string
}