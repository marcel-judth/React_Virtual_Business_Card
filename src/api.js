import axios from "axios";

const user = {
  _id: { $oid: "60fad57e59babbe5f22e9f5a" },
  firstname: "Marcel",
  lastname: "Judth",
  jobtitle: "Software Engineer",
  description: "I love to create web-applications",
  mobileNr: "+4367682595032",
  email: "marjudth@gmail.com",
  facebookURL: "https://www.facebook.com/profile.php?id=100004874208428",
  instagramURL: "https://www.instagram.com/judthmar",
  linkedInURL: "",
  companies: [
    {
      name: "Infineon Technologies IT-Service GmbH",
      position: "Senior Specialist System Engineer",
      branch: "",
      logoURL: "",
      website: "www.infineon.com",
      email: "marcel.judth@infineon.com",
      phoneNr: "",
      mobileNr: "",
      location: "Klagenfurt",
      address: "Lakesidepark 5b",
      postcode: "9020",
      country: "AT",
    },
    {
      name: "DevCode-Solutions",
      position: "Self Employed",
      branch: "Software-Entwicklung",
      logoURL: "",
      website: "www.infineon.com",
      email: "marcel.judth@infineon.com",
      phoneNr: "",
      mobileNr: "",
      location: "Klagenfurt",
      address: "Lakesidepark 5b",
      postcode: "9020",
      country: "AT",
      linkedInURL: "aslkdf",
      facebookURL: "aölsdkf",
      instagramURL: "alkdsf",
    },
  ],
  skills: [
    "Designing and Developing User Interfaces",
    "Full Stack Software Developer",
    "Technologies like: React, React-Native, JavaScript, C#, Xamarin, ASP.net core, NodeJS",
  ],
};

function getUserByID(id) {
  // fetch(
  //   "https://whispering-island-34730.herokuapp.com/api/users/marjudth@gmail.com"
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch(console.log);

  axios
    .get("localhost:3000/api/users/marjudth@gmail.com")
    .then((response) => console.log("ehlö"));
  console.log("hellou");
  return user;
}

export default getUserByID;
