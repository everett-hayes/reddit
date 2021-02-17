const myPostService = new postService();
    
myPostService.getPosts().then((res) => {

    for (let item of res) {
        $('#postTableBody').append(`<tr><td>${item.id} - ${item.content}</td></tr>`);
    }

})  