const firebaseConfig = {
  apiKey: "AIzaSyBXZO9fQT4mZnVCcRReLH7S02poIaiBodI",
  authDomain: "formulario-1-492e5.firebaseapp.com",
  databaseURL: "https://formulario-1-492e5-default-rtdb.firebaseio.com",
  projectId: "formulario-1-492e5",
  storageBucket: "formulario-1-492e5.appspot.com",
  messagingSenderId: "277558300568",
  appId: "1:277558300568:web:54b86b60182bfe4e0fa5ed"};
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
alert("Loading ...")
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };