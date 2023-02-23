function signup() {
  var account = document.getElementById("account").value;
  var password = document.getElementById("password").value;
  

  if (account == "") {
    alert("Vui lòng nhập tên đăng nhập");
  } else if (password == "") {
    alert("Vui lòng nhập mật khẩu");
  } else 
  {
  
  alert("Đăng kí thành công");
  }
  


  var user = {
    account: account,
    password: password,
   
  };

  var json = JSON.stringify(user);
  localStorage.setItem(account, json);
}

function Login() {
  var account = document.getElementById("account").value;
  var password = document.getElementById("password").value;
  var user = {
    account: account,
    password: password,
  };
  var user = localStorage.getItem(account);
  var data = JSON.parse(user);
 
  if (account=="") {
    alert("Vui lòng nhập đầy đủ thông tin");
    
  }
  else if(password=="")
  {
    alert("Vui lòng nhập mật khẩu");
  }
  else if(account==data.account && password==data.password)
  {
    alert("Đăng nhập thành công");
    window.location.href="./trang chủ.html";
    
    
  }
  else
  {
    alert("Tài khoản hoặc mật khẩu không đúng")
  }
 
}

var x=true;
function show(){
  if(x){
    document.getElementById("password").setAttribute("type", "text");
    x=false;
  }
  else {
    document.getElementById("password").setAttribute("type", "password");
    x = true;
  }
}

