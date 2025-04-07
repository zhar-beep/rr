
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })

  window.onload = () => {
    let audio = document.getElementById("myAudio");
    let fakeButton = document.createElement("button");  
    fakeButton.style.display = "none"; // Tombolnya invisible
    document.body.appendChild(fakeButton);

    fakeButton.click(); // Pura-pura user ngeklik
    audio.play().catch(() => console.log("Autoplay gagal, butuh klik manual"));
};

document.getElementById('playNowBtn').onclick = function() {
  document.getElementById('popup').style.display = 'flex';
}

document.getElementsByClassName('close-btn')[0].onclick = function() {
  document.getElementById('popup').style.display = 'none';
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
  let popup = document.getElementById('popup');
  if (event.target == popup) {
      popup.style.display = 'none';
  }
}
document.getElementById('openPopup').addEventListener('click', function() {

  document.getElementById('popup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

// Close the popup when clicking outside of the popup content
window.onclick = function(event) {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
      popup.style.display = 'none';
  }
function position(id){
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}