import SendFunc from './sendForm.js';
import FloatMenu from './floatMenu.js';
//   $(document).ready(function () {
//     'use strict';
// //Аякс отправка форм
//     $("#application").submit(function () {
//       var data = {
//         name : document.querySelector('input[name="name"]').value,
//         email : document.querySelector('input[name="email"]').value,
//         telephone : document.querySelector('input[name="telephone"]').value
//       };
//       $.ajax({
//         type: "POST",
//         url: "mail.php",
//         data: data
//       }).done(function (value) {
//         $('#mail')[0].innerHTML = value;
//         $('#mail').removeClass('not_visible_mail');
//         setTimeout(function () {
//           $("#form").trigger("reset");
//         }, 1000);
//       });
//     return false;
//     });
// }
//         $("img, a").on("dragstart", function (event) { event.preventDefault(); });
//   });

//Плавающее меню
let paramsMenu = {
  elem : document.getElementById('nav'),
  height : 100,
  first_class : 'menu_fixed_on_top',
  second_class : 'float_menu'
}

new FloatMenu().init(paramsMenu);

$(document).on('click', 'a.anchor', function () {
  $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top - 86 }, 1000 );
  return false;
});

// Отправка формы обратной связи скрипту для отправления по почте
// let data = {
//   name : 'input[name="name"]',
//   email : 'input[name="email"]',
//   telephone : 'input[name="telephone"]'
// };
//
// new SendFunc('application', data, 'mail');
