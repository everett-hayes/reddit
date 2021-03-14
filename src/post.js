const myPostService = new postService();

function submitForm() {
    
    let post = {
        content: $('#content_input').val(),
        vote: 0
    }

    myPostService.createPost(post).then((res) => {
        console.log(JSON.stringify(res, null, 2));
    })  

    $('#content_input').val("");
}




