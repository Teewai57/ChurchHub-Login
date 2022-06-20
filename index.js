let email = document.getElementById('email');
let password = document.getElementById('password');
let loginButton = document.getElementById('button')

loginButton.addEventListener('click',async function(event){  
    event.preventDefault()
    let user = { 
        Email : email.value,
        Password : password.value,
    }
    console.log(user);
 const res = await axios.post('https://teewai-a5679-default-rtdb.firebaseio.com',{
     headers:{ 
         'content-type':"Apllication/json"
     },
     body:JSON.stringify(user)
 })
 console.log(res);
})

// const postDetails = async () => {
//     const response = await post();
//     console.log(response);
// }