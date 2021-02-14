const myPostService = new postService();
    
myPostService.getPosts().then((res) => {
    $('#content').append(JSON.stringify(res, null, 2));
})    