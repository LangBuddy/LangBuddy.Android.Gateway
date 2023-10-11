import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HttpService {
  public async get(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data;
  }

  public async post(url: string, data: any): Promise<any> {
    const response = await axios.post(url, data);
    return response.data;
  }

  public async put(url: string, data: any): Promise<any> {
    const response = await axios.put(url, data);
    return response.data;
  }

  public async delete(url: string): Promise<any> {
    const response = await axios.delete(url);
    return response.data;
  }
}
