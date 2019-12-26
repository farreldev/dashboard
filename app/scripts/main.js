$(function() {
   console.log('alo/alo');

   var elem = document.getElementsByTagName("body")[0];

   function openFullscreen() {
      if (elem.requestFullscreen) {
         elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
         elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
         elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
         elem.msRequestFullscreen();
      }
   }

   function closeFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    }

   //  Kondisi ? function1() : false

   $('ul.toolbar li').on('click', 'a.fs', function(e) {
      e.preventDefault();
      $(this).hasClass('restore') 
      ?
         ($(this).removeClass('restore').addClass('maximize'), openFullscreen())
      : 
         ($(this).removeClass('maximize').addClass('restore'), closeFullscreen())
   })
})
