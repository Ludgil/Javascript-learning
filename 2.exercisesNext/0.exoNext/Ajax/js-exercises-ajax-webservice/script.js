(() => {

    async function get_quote(){
        const response= await fetch("https://thatsthespir.it/api");
        const quote_from_api = await response.json();
        document.getElementById("quote").textContent=quote_from_api.quote;
        document.getElementById("author").textContent="—"+quote_from_api.author+",";
        document.getElementById("link-src").cite=quote_from_api.permalink;
        document.getElementById("photo").src=quote_from_api.photo;
        console.log(quote_from_api.quote);
    }

        get_quote().catch(error =>{
            console.log("oups");
            console.error(error);
        });
})();
