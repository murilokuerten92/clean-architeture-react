import { AccountModel } from '../model/account-model';

type AuthenticationParams = {
    email: string
    password: string
}

export interface Authentication {
    auth(params: AuthenticationParams): Promise<AccountModel>
}