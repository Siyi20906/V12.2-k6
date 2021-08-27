import { group, check, sleep } from 'k6';
import http from 'k6/http';
import {Trend} from 'k6/metrics';
import encoding from 'k6/encoding';
import {printerror} from './printerror.js';
// Version: 1.2
// Creator: WebInspector


const Phase8 = function(host1, ID_ORDER1, ID_OPER1,domain1 , username1, password1, cookie1) {
	
	let res, redirectUrl, json;
	let host = host1;	
	let ID_ORDER = ID_ORDER1;
	let ID_OPER = ID_OPER1;
	let domain = domain1;
	let username = username1;
	let password = password1;
	let cookie = cookie1;

	let action_delay = 2;
	let basic_delay = 5;
	let timeout = 120000;


	 //click start , start execute
	 var url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%2FLos_Angeles&ws_id=3&order_id=' + ID_ORDER + '&oper_id=' + ID_OPER + '&oper_name=MIXING_SAMPLING&action=1';
	 //console.log(url)
	 let data = {};
	 res = http.post(url, JSON.stringify(data),
	 {
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		 "headers": {
	     "Host": `${host}`,
	     "Connection": "keep-alive",
	     "Accept": "application/json, text/plain, */*",
	     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	     "Origin": `http://${host}`,
		  "Referer": `http://${host}/ApemMobile/`,
	     "Accept-Encoding": "gzip, deflate",
	     "Accept-Language": "en-US,en;q=0.9"
		}
	});	

	var test 
	try{
		test = res.json()
	}
	catch(err){
		console.log("##########Phase8", cookie)

		console.log("@@@@@@@@@@@@@@Phase8", JSON.stringify(res))
	}
	if(res.json().result !=null){
		if(res.json().result == 1){
			//request success continue
			console.log(" Phase8 Ready!");
		}
		else{
			//request fail, return
			console.log("Phase8 Ready!");
			console.log("#########Phase3",res.body);
			return 0;
			
		}
	}
	else{
		console.log("#########Phase8-2",res.body)
		return 0;
	}
	check(res, {"status is 200": (r) => r.status === 200 }); 
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	var vmname = res.json().mobileScreen.vmName;
	//console.log("phase8 URL",res.request.url,"ERROR",res.error_code,"STATUS",res.status_text,"BODY",res.body)
	sleep(action_delay);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Act1 start
	

	//select a sample
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=OVERVIEW.tblOverView&targetCompValue=MRSamplePoint1%7C0_3&sourceComp=&sourceCompValue=';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//click confirm sample
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=OVERVIEW.btnViewData&targetCompValue=yes&sourceComp=OVERVIEW.tblOverView&sourceCompValue=MRSamplePoint1%7C0_3';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//click ok
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=SAMPLING.cmpFooter.txtUserId&targetCompValue=&sourceComp=&sourceCompValue=';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//click enter comment
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=SAMPLING.cmpFooter.btnEnterComment&targetCompValue=yes&sourceComp=SAMPLING.cmpFooter.txtUserId&sourceCompValue=';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//submit comment
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=mobileMessageInputDialog&targetCompValue=16&targetCompExtraValue=test001';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//click OK
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=SAMPLING.cmpFooter.txtUserId&targetCompValue=&sourceComp=SAMPLING.cmpFooter.btnEnterComment&sourceCompValue=';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//submit username
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=SAMPLING.cmpFooter.pwdSignature&targetCompValue=undefined&sourceComp=SAMPLING.cmpFooter.txtUserId&sourceCompValue=' + domain + '%5C' + username;
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//submit password
	let encodepassword = encoding.b64encode(password);
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=6&sourceComp=SAMPLING.cmpFooter.pwdSignature&sourceCompValue=' + encodepassword + '&sourceCompExtraValue=null';
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Act1 end
	
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Act2 start
	//click adhoc sample
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=OVERVIEW.btnEnterData&targetCompValue=yes&sourceComp=OVERVIEW.tblOverView&sourceCompValue=Middle%20of%20Batch%7C1_2';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//select Retention
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=ADHOC.cmbSampleType&targetCompValue=Retention&sourceComp=ADHOC.cmbSampleType&sourceCompValue=Retention';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
	//enter des
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=ADHOC.txaDescription&targetCompValue=&sourceComp=ADHOC.cmbSampleType&sourceCompValue=Retention';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
	//submit des
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=ADHOC.txtSampleUnits&targetCompValue=&sourceComp=ADHOC.txaDescription&sourceCompValue=test';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
	//enter unit
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=ADHOC.cmbSampleUom&targetCompValue=&sourceComp=ADHOC.txtSampleUnits&sourceCompValue=100';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
	//enter measure
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=ADHOC.cmbSampleUom&targetCompValue=mg&sourceComp=ADHOC.cmbSampleUom&sourceCompValue=';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
	//enter sample point
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=ADHOC.cmbSamplePoint&targetCompValue=MRSamplePoint1&sourceComp=ADHOC.cmbSamplePoint&sourceCompValue=MRSamplePoint1';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
	//enter sample time
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=ADHOC.cmbSampleTime&targetCompValue=Middle%20of%20Batch&sourceComp=ADHOC.cmbSampleTime&sourceCompValue=';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);



	//click OK
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=ADHOC.cmpFooter.txtUserId&targetCompValue=&sourceComp=ADHOC.cmbSampleTime&sourceCompValue=Middle%20of%20Batch';
	//console.log(url)

	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
	

	//submit username
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=ADHOC.cmpFooter.pwdSignature&targetCompValue=undefined&sourceComp=ADHOC.cmpFooter.txtUserId&sourceCompValue=' + domain + '%5C' + username;
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//submit password
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=6&sourceComp=ADHOC.cmpFooter.pwdSignature&sourceCompValue=' + encodepassword + '&sourceCompExtraValue=null';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Act2 end

	//click OK submit username
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=OVERVIEW.cmpFooter.pwdSignature&targetCompValue=undefined&sourceComp=OVERVIEW.cmpFooter.txtUserId&sourceCompValue=' + domain + '%5C' + username;
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
	//submit password
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=6&sourceComp=OVERVIEW.cmpFooter.pwdSignature&sourceCompValue=' + encodepassword + '&sourceCompExtraValue=null';
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);


	//click YES
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=mobileMessageDialog&targetCompValue=1&targetCompExtraValue=null';
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
	//select production yes
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=DEVIATION.cmbProductionStopped&targetCompValue=&sourceComp=&sourceCompValue=';
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
	//select yes
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=DEVIATION.cmbProductionStopped&targetCompValue=Yes&sourceComp=DEVIATION.cmbProductionStopped&sourceCompValue=';
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
	//enter reponse
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=DEVIATION.txaProductionResponse&targetCompValue=&sourceComp=DEVIATION.cmbProductionStopped&sourceCompValue=Yes';
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

//@@@@@@@@@Enter comment
	//click ok
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=DEVIATION.cmpFooter.txtUserId&targetCompValue=&sourceComp=DEVIATION.txaProductionResponse&sourceCompValue=test';
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//click enter comment
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=DEVIATION.cmpFooter.btnEnterComment&targetCompValue=yes&sourceComp=DEVIATION.cmpFooter.txtUserId&sourceCompValue=';
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//submit comment
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=3&targetComp=mobileMessageInputDialog&targetCompValue=16&targetCompExtraValue=test';
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);
//@@@@@@@@@Enter comment end

	//click ok
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=DEVIATION.cmpFooter.txtUserId&targetCompValue=&sourceComp=DEVIATION.cmpFooter.btnEnterComment&sourceCompValue=';
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//submit username
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=4&targetComp=DEVIATION.cmpFooter.pwdSignature&targetCompValue=undefined&sourceComp=DEVIATION.cmpFooter.txtUserId&sourceCompValue=' + domain + '%5C' + username;
	//console.log(url)
	
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);

	//submit password
	url = 'http://' + host + '/ApemMobile/servlet/mobileExecutionServlet?tz=America%252FLos_Angeles&vmName=' + vmname + '&action=6&sourceComp=DEVIATION.cmpFooter.pwdSignature&sourceCompValue=' + encodepassword + '&sourceCompExtraValue=null';
	//console.log(url)
	data = {};
	res = http.post(url, JSON.stringify(data),
	{
		timeout: `${timeout}`,
		"cookies": {
			"JSESSIONID": `${cookie}`
		},	
		"headers": {
	    "Host": `${host}`,
	    "Connection": "keep-alive",
	    "Accept": "application/json, text/plain, */*",
	    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64",
	    "Origin": `http://${host}`,
		"Referer": `http://${host}/ApemMobile/`,
	    "Accept-Encoding": "gzip, deflate",
	    "Accept-Language": "en-US,en;q=0.9"
	}
    });	
	check(res, {"status is 200": (r) => r.status === 200 });
	check(res, {"Result is 1": (r) => r.json().result === 1 }); 
	sleep(action_delay);



};
export {Phase8}


