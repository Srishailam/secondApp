function sendUserInfo(e){
  e.preventDefault();
  console.log("sendUserInfo is called");
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var userInfo = {
    username: username,
    password: password
  };
  console.log('object is: ', userInfo);

  // send the user info to the server

  // fetch('/login', userInfo).then(function(response){
  //   console.log(response);
  //   router.navigate('/home');
  // }).catch(function(error){
  //   console.log('User info was not correct');
  // });
}

function openModal(){
  console.log('openModal is called');
  document.getElementById('modalwrapper').style.display = 'block';
}

function closeModal(){
  console.log('closeModal is called');
  document.getElementById('modalwrapper').style.display = 'none';
}