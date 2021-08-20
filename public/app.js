document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
})

function logInGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      document.write(`Hello <b>${user.displayName}</b>` + '<br>' + 'Refresh to sign out.');
      console.log(user);
    })
    .catch(console.log)
}