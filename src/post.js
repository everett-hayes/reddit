const myPostService = new postService();

function submitForm() {
    let content = $('#content_input').val();
    console.log(content);

    myPostService.createPost(content).then((res) => {
        console.log(JSON.stringify(res, null, 2));
    })  

    $('#content_input').val("");
}




