function goodreadsService() {
    function getBookId() {
        return new Promise((resolve, reject)=>{
            resolve({description: 'our description'});
        })
     }

    return { getBookId };
}

module.exports=goodreadsService;