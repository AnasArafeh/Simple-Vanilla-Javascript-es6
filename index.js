document.addEventListener(
  "DOMContentLoaded",

  function (event) {
    // check if the function is connected with the html
    console.log("connected");

    // we used the div ID here to get the data however we can use the form ID and it will work as well
    let ingredientForm = document.getElementById("recipe-form");

    // event listener to get the data from the form upon pressing submit
    ingredientForm.addEventListener("submit", addIngredientWithState);

    //define an array
    const myPantry = [];

    function addIngredientWithState(e) {
      e.preventDefault();

      //Define an object and its entries
      let myIngredient = {};

      let Name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let mobile = document.getElementById("mobile").value;
      let address = document.getElementById("address").value;

      const regex = new RegExp("[a-zA-z]");
      const regex2 = new RegExp("[0-9]");

      //validation for the inputs
      if (
        address == "" ||
        !regex.test(address) ||
        mobile == "" ||
        !regex2.test(mobile) ||
        email == "" ||
        !regex.test(email) ||
        Name == "" ||
        !regex.test(Name)
      ) {
        if (Name == "" || !regex.test(Name)) {
          document.getElementById("first").style.backgroundColor = "red";
        }

        if (email == "" || !regex.test(email)) {
          document.getElementById("second").style.backgroundColor = "red";
        }

        if (mobile == "" || !regex2.test(mobile)) {
          document.getElementById("third").style.backgroundColor = "red";
        }

        if (address == "" || !regex.test(address)) {
          document.getElementById("fourth").style.backgroundColor = "red";
        }

        alert("please enter data in all of the fields");
      } else {
        //restore the original style after entering data

        document.getElementById("first").style.backgroundColor = "white";
        document.getElementById("second").style.backgroundColor = "white";
        document.getElementById("third").style.backgroundColor = "white";
        document.getElementById("fourth").style.backgroundColor = "white";

        //object fields name
        myIngredient.name = `${Name}`;
        myIngredient.email = `${email}`;
        myIngredient.mobile = `${mobile}`;
        myIngredient.address = `${address}`;

        // show the object data
        console.log(myIngredient);

        //Add data to the array
        myPantry.push(myIngredient);

        // show array of object data
        console.log(myPantry);

        // to empty the input after entering the data
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("address").value = "";

        //fetch data from the array of object and insert them into new rows and cells
        let myLi = myPantry
          .map(
            (ingredient) =>
              `<tr><td>${ingredient.name}</td><td>${ingredient.email}</td><td>${ingredient.mobile}</td><td>${ingredient.address}</td></tr>`
          )
          .join("");

        //choose the html id tag to add the data into
        const myUL = document.getElementById("pantry");
        myUL.innerHTML = myLi;

        // shows how the html creation is passed into the html tag
        // console.log(myLi);
      }
    }
  }
);
