function Post()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
}

function displayPost(data){
    console.log(data);
   const postcontainer = document.getElementById('posts-container');
    for (const post of data) {

       const  div = document.createElement('div');
       div.innerHTML = 
        `
            <h4>${post.userId}-</h4> 
            <h5> ${post.title} </h5> 
            <p> ${post.body} </p> 
        `
        postcontainer.appendChild(div);

    }
}