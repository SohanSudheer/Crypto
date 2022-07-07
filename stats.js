const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b83a90ad87mshff1454049569fd3p18ffafjsn6c5a1bea1e58',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
	.then(response => response.json())
	.then(response =>{
        
        for(let i=0;i<50;i++){
            console.log(response.data.coins[i].name);
				var div = document.getElementById("content"+i);

            	div.innerHTML +=(i+1)+") "+ response.data.coins[i].name +"<br>";
                
                var div2=document.getElementById("text"+i);
                div2.innerHTML+="Symbol:"+response.data.coins[i].symbol+"<br>";
                div2.innerHTML+="Price:  $"+response.data.coins[i].price+"<br>";
                div2.innerHTML+="Market Cap:  $"+response.data.coins[i].marketCap+"<br>";
                
                
			}
     })
	.catch(err => console.error(err));