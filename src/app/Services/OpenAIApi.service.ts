import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { OpenAI } from 'openai'

@Injectable({
    providedIn: 'root'
})
export class OpenAIApiService{

    private apiKey = environment.ApiKey_OpenAI2;
    private apiUrl = environment.ENDPOINT_OpenAI;

    constructor(private http: HttpClient) { }

    generateChatCompletion(userMessage: string): Observable<any> {
        const headers = new HttpHeaders({
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        });
    
        const data = {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Tú eres un asistente médico virtual.' },
            { role: 'user', content: userMessage }
          ]
        };
    
        return this.http.post(this.apiUrl, data, { headers });
      }
}