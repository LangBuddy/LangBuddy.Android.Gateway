import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HttpService {
  public async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return response.data;
  }

  public async post<T>(url: string, data: any): Promise<T> {
    const response = await axios.post<T>(url, data);
    return response.data;
  }

  public async put<T>(url: string, data: any): Promise<T> {
    const response = await axios.put<T>(url, data);
    return response.data;
  }

  public async patch<T>(url: string, data: any): Promise<T> {
    const response = await axios.patch<T>(url, data);
    return response.data;
  }

  public async delete<T>(url: string): Promise<T> {
    const response = await axios.delete<T>(url);
    return response.data;
  }
}
