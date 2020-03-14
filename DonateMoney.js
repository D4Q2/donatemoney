   // A function to take us to the help out page
   function helpOutPage()
   {
     // Code to take us to the donate page
     location.href = "https://d4q2.github.io/helpout";
   }
  
   function homePage()
   {
     // Code to take us to the home page
     location.href = "https://d4q2.github.io/home";
   }


   let menuBool = false;

   function openMenu()
   {
     menuBool = menuBool ? false : true;


     if (menuBool == true)
     {
       var menu = document.getElementById("menu");

       // Create a button (in this case it will be the donate button)
       var helpOutButton = document.createElement("BUTTON");

        // Change the innerHTML to a sensible set of text (in this case donate)
        helpOutButton.innerHTML = "Help Out";

        // Change the class to the class for menu buttons and the id to donateButton so we can access it 
        // easier and it can assume previously defined css values
        helpOutButton.setAttribute("class", "menuButton");
        helpOutButton.setAttribute("id", "helpOutButton");

        // Change the onclick value to what we want (in this case a function to take us  to the donate page)
        helpOutButton.onclick = helpOutPage;

        // Append donateButton to the menu <div>
        menu.appendChild(helpOutButton);

        // Move it into the perfect position
        helpOutButton.style.transform = "translateX(-10px)";

      
        // And also the same process for the home button
        var homeButton = document.createElement("BUTTON");
        homeButton.innerHTML = "Home";
        homeButton.setAttribute("class", "menuButton");
        homeButton.setAttribute("id", "homeButton");
        menu.appendChild(homeButton);
        homeButton.style.transform = "translateX(-20px)";
        homeButton.onclick = homePage;
     }

     else
     {
       // Clear our menu div
       document.getElementById("menu").innerHTML = "";

       // Get variable for menu div and make variable for our new openMenu button
       var menu = document.getElementById("menu");
       var menuOpener = document.createElement("BUTTON");
 
       // Specify qualities for our openMenu button
       menuOpener.innerHTML = "Menu";
       menuOpener.setAttribute("class", "openMenu");
       menuOpener.setAttribute("id", "menuOpener");
       menuOpener.onclick = openMenu;

       // Append it to the menu div
       menu.appendChild(menuOpener);
     }
   }
