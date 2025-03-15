document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");
  
    if (username === "admin" && password === "1234") {
      alert("تم تسجيل الدخول بنجاح!");
      // يمكنك إضافة إجراءات إضافية هنا، مثل التوجيه إلى صفحة أخرى
    } else {
      errorMessage.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
    }
  });
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let errorMessage = document.getElementById("error-message");

  if (username === "admin" && password === "1234") {
    alert("تم تسجيل الدخول بنجاح!");
    // يمكنك إضافة إجراءات إضافية هنا، مثل التوجيه إلى صفحة أخرى
  } else {
    errorMessage.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
  }
});
  