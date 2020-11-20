import { ILoginDTO } from '../ILoginDTO'
import Axios from 'axios'

interface LoginResponse {
    token: string;
    status: string;
}

export abstract class Account {
  private static axios = Axios.create({
    baseURL: 'https://localhost:5100/login',
    headers: {
      common: {
        'Content-Type': 'application/json'
      }
    }
  });

  static async getJwt (loginDTO: ILoginDTO): Promise<string | null> {
    const url = '/login'
    try {
      const response = await this.axios.post<LoginResponse>(
        url,
        loginDTO
      )
      console.log('getJwt response', response)
      if (response.status === 200) {
        return response.data.token
      }
      return null
    } catch (error) {
      console.log('error: ', (error as Error).message)
      return null
    }
  }
}
