const apiTempo=axios.create({
    baseURL:'https://api.hgbrasil.com/weather?format=json-cors&key=a4e13105&city_name='
    
});

export default apiTempo;