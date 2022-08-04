const send = ()=>{
	xhr = new XMLHttpRequest();

	xhr.open('GET','/');

	xhr.send()

	xhr.onload =(e)=>{
		document.querySelector('#response').textContent = JSON.parse(e.target.response).msg
	}
}


document.querySelector('#send_xhr').addEventListener('click' , send)



