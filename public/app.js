document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
  // const db = firebase.firestore();

  // const firstTodo = db.collection('todos').doc('BIcXcANRxvkfsW5d0kdb')
  // console.log('first', firstTodo)

  // firstTodo.get().then(doc => {
  //   const data = doc.data;
  //   console.log('doc', data)
  //   document.write(JSON.stringify(data) + '<br>')
  // })
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