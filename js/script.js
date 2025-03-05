document.addEventListener('scroll', function() {
  // Get all sections
  var sections = document.querySelectorAll('section');

  sections.forEach(function(section) {
    // Calculate the top and bottom positions of each section
    var top = section.offsetTop -50;
    var bottom = top + section.clientHeight;
    var middle = (top+bottom)/2;
    // Check if the current scroll position is within the bounds of a section
    if (window.scrollY < middle && window.scrollY + window.innerHeight > middle) {
      // Remove 'active' class from all navigation links
      document.querySelectorAll('nav a div').forEach(function(link) {
        link.classList.remove('active');
      });

      if((section.id.toString()!="S1")&&(!isElementVisible(document.getElementById("banner")))) {
          document.querySelector('nav a[href="#' + section.id + '"]').children[0].classList.add('active');
      }
    }
  });
});

function isElementVisible(element) {
  var computedStyle = window.getComputedStyle(element);
  return computedStyle.visibility !== 'hidden';
}






  let words = [" Developer", "Business Intelligence Student", "Fast Learner"];
  let tm = 100;
  let index = 0;
  
  function typeAndDelete() {
    let content = document.getElementById("typing").children[0];
    let word = words[index];
    let charIndex = 0;
  
    function typeCharacter() {
      content.innerHTML += word[charIndex];
      charIndex++;
  
      if (charIndex < word.length) {
        setTimeout(typeCharacter, 100);
      } else {
        setTimeout(deleteCharacters, 500);
      }
    }
  
    function deleteCharacters() {
      if (content.innerHTML.length > 0) {
        content.innerHTML = content.innerHTML.slice(0, -1);
        setTimeout(deleteCharacters, 50);
      } else {
        // Move to the next word
        setTimeout(() => {
          index = (index + 1) % words.length;
          typeAndDelete();
        }, 200);
      }
    }
  
    typeCharacter();
  }
  
  typeAndDelete();
  
  
  function afficherDescription(projet) {
    projet.children[2].style.visibility="visible"
    projet.children[2].classList.remove("hidden");
    projet.children[2].classList.add("visible");
  }

  function masquerDescription(description) {
    description.classList.remove("visible");
    description.classList.add("hidden");
  }






  function changeBackgroundWithFade(id) {
    const imagesp1 = [
      // ['images/project1-1.png',2500],
      // ['images/project1-2.png',2500],
      // ['images/project1-3.png',2500],
      // ['images/project1-4.png',2500],
      ['images/project1-5.gif',19000]
    ];

    const imagesp2 = [
      ['images/project2-1.gif',7000],
      // ['images/project2-2.png',2500],
      ['images/project2-3.gif',6000],
      ['images/project2-4.gif',4000]
    ];
    
    const imagesp3 = [
      ['images/project3-1.gif',89000]
    ];

    const imagesp4 = [
      ['images/project4-1.gif',85000]
    ];

    const imagesp5 = [
      ['images/project5-1.gif',23000]
    ];

    var images="";

    if(id=="p1images") images=imagesp1
    else if(id=="p2images") images=imagesp2
    else if(id=="p3images") images=imagesp3
    else if(id=="p4images") images=imagesp4
    else if(id=="p5images") images=imagesp5
  
    const imageContainer = document.getElementById(id);
    let currentIndex = 0;
    function transitionToNextImage() {
      const nextIndex = (currentIndex + 1) % images.length;


      // Set the opacity of the current image to 0
  
      // Change the background image
      imageContainer.style.backgroundImage = "url("+images[currentIndex][0]+")";
  
      // Wait for a short time for the opacity transition to take effect
      setTimeout(() => {
        // Set the opacity of the current image to 1
        currentIndex = nextIndex;

        // Call the function recursively to create an infinite loop
        transitionToNextImage();
      }, images[currentIndex][1]);
    }
  
    // Call the initial transition to start the loop
    transitionToNextImage();
  }
  
  // Call the function to start the infinite loop with fade effect
  changeBackgroundWithFade("p1images");
  changeBackgroundWithFade("p2images");
  changeBackgroundWithFade("p3images");
  changeBackgroundWithFade("p4images");
  changeBackgroundWithFade("p5images");



  // function hidelink(elt) {
  //   elt.classList.remove(".displaylink")
  //   elt.classList.add(".hidelink")
  //   // setTimeout(() => {
  //   //   elt.style.visibility="hidden"
  //   // },400);
  // }

  // function displaylink(elt) {
  //   elt.style.visibility="visible"
  //   elt.classList.remove(".hidelink")
  //   elt.classList.add(".displaylink")
  // }


  function displaynavigation() {
    document.getElementById("mobilenavigation").classList.remove("hiddennavigation")
    document.getElementById("mobilenavigation").classList.add("displayednavigation")
  }

  function hidenavigation() {
    document.getElementById("mobilenavigation").classList.remove("displayednavigation")
    document.getElementById("mobilenavigation").classList.add("hiddennavigation")
  }

  function displayCertif (elt) {
    elt.style.transform = "translate(-50%, -50%) scale(1)"
  }

  function hideCertif(elt) {
    elt.style.transform="";
  }
