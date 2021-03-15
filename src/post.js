const myPostService = new postService();

function submitForm() {

    let content  = $('#content_input').val();

    if (content == '') {
        console.log('empty text is not allowed');
        return;
    }
    
    let post = {
        content: content,
        vote: 0
    }

    myPostService.createPost(post).then((res) => {
        console.log(JSON.stringify(res, null, 2));
    })  

    $('#content_input').val("");
}




