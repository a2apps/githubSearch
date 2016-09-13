import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id='';
    private client_secrect='';
    constructor(private _http:Http){
        console.log('Github Service ready...');
        this.username='brownmetal';
        this.client_id='1026395a55962cabb499';
        this.client_secrect='4a266f96abcb105fb6c30cea13ef1ef18e37a70e';
    }
    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secrect)
                .map(res => res.json())
    }
    getRepo(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secrect)
                .map(res => res.json())
    }
    updateUser(username:string){
        this.username=username;
    }
}