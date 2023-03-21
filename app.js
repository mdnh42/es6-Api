document.getElementById('appy-bg').addEventListener('click', function()
{
    const friends = document.getElementsByClassName('friend');
    console.log(friends);

    for(const friend of friends)
    {
        friend.style.backgroundColor = 'lightblue';
    }
})

document.getElementById('third').addEventListener('click', function(){
    const third = document.getElementById('third-friend');
    third.style.backgroundColor = 'lightblue';
})

document.getElementById('add-frined').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends'); 
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
        <h3 class = "friend-name"> New Frined </h3> 
        <p> Something new added </p> 
    `
    friendContainer.appendChild(friend);
})