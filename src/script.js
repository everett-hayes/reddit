const myPostService = new postService();
    
myPostService.getPosts().then((res) => {
    console.log(JSON.stringify(res, null, 2));
    $('#content').append(JSON.stringify(res, null, 2));
})    

// myPostService.deletePostById(2).then((res) => {
//     $('#content').append(JSON.stringify(res, null, 2));
// })    