const myPostService = new postService();

// This is part of the HW7 commit
function submitForm() {
    let content = $('#content_input').val();
    console.log(content);

    myPostService.createPost(content).then((res) => {
        console.log(JSON.stringify(res, null, 2));
    })  

    $('#content_input').val("");
}




