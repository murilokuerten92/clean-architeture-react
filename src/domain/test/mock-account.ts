import { AuthenticationParams } from '@/domain/usecases';
import faker, { fake } from 'faker';
import { AccountModel } from '../model';

export const mockAuthentication = (): AuthenticationParams => ({
    email: faker.internet.email(),
    password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
    accessToken: faker.datatype.uuid()
})