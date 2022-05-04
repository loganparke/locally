async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.body.addEventListener( 'click', function ( event ) {
  if( event.target.id == 'logout' ) {
    logout();
  };
} );

//document.querySelector("#logout").addEventListener("click", logout);
