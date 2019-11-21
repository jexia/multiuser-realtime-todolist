import { Injectable } from '@angular/core';
import { Client, jexiaClient } from 'jexia-sdk-js/browser'; 
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JexiaService {
  client: Client;
  readonly projectID = environment.jexia.projectID; // Your Project ID at Jexia
  readonly key = environment.jexia.key; // Your API key at Jexia
  readonly secret = environment.jexia.secret; // Your API secret at JEXIA

  todosDataSet = 'todos'; // DataSet name on Jexia Platform    
  base = `https://${this.projectID}.app.jexia.com`;
  ws = `wss://${this.projectID}.app.jexia.com`;

  dataSetEndpoint = `https://${this.projectID}.app.jexia.com/ds/${this.todosDataSet}`;

  constructor(
    private http: HttpClient
  ) {
    this.setupJexia();
  }

  async setupJexia() {
    try {
      this.client = await jexiaClient().init({
        projectID: this.projectID,
        key: this.key,
        secret: this.secret
      });
      // console.log('cliente', this.client)
    } catch (error) {
      // console.log('error', error)
    }
  }

  setAccessToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  removeAccessToken() {
    localStorage.removeItem('access_token');
  }

  getRTC() {
    const token = this.getAccessToken();

    if (!token) {
      throw new Error('No token');
    }
    return `${this.ws}/rtc?access_token=${token}`;
  }
}
