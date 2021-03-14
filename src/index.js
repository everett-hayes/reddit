const myPostService = new postService();
    
myPostService.getPosts().then((res) => {

    for (let item of res) {
        console.log(JSON.stringify(item, null, 2));
        forPostHtml(item);
    }

})

function forPostHtml(post) {
    let html = `<div id="post-${post.id}" class="post">
                    <div id="post-voting" class="postVote">
                        <button class="btn"><i class="fa fa-arrow-up"></i></button>
                        <p class="voteCount">${post.vote}</p>
                        <button class="btn"><i class="fa fa-arrow-down"></i></button>
                    </div>
                    <div>
                        ${post.content}
                    </div>
                </div>`;

    $('#postContainer').append(html);
}

{/* <div id="post-1" class="post">
<div id="post-voting" class="postVote">
<button class="btn"><i class="fa fa-arrow-up"></i></button>
<p class="voteCount">4</p>
<button class="btn"><i class="fa fa-arrow-down"></i></button>
</div>
<div>
This is the content of the post
</div>
</div> */}