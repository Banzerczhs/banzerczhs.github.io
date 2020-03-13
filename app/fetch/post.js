import 'whatwg-fetch'
import 'es6-promise'
import config from "../config/config";

function objparams(obj){
	var result = '';
	var item;

	for(item in obj){
		result += '&' + item + '=' + encodeURIComponent(obj[item]);
	}

	if(result){
		result = result.slice(1);
	}

	return result;
}

export function post(url,paramsObj){
	var result = fetch(config.baseUrl+url,{
		method:"POST",
		credentials:'include',
		headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-Type':'application/x-www-form-urlencoded'
		},
		body:objparams(paramsObj)
	})

	return result;
}