const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b83a90ad87mshff1454049569fd3p18ffafjsn6c5a1bea1e58',
		'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
	}
};

fetch('https://crypto-news-live3.p.rapidapi.com/news', options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
        for(let i=0;i<20;i++){
            // console.log(response[i].title);
            var div = document.getElementById("content"+i);

            div.innerHTML +=(i+1)+")  "+ response[i].title +"<br>";

        }
        
    })
    
	.catch(err => console.error(err));