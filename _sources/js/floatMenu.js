// Принимает объект с настройками для меню
export default class FloatMenu{

  init(params){
    params.active_class = params.first_class;

    if(window.pageYOffset > params.height){
      params.elem.classList.add(params.first_class);
      params.elem.classList.add(params.second_class);
    }else{
      params.elem.classList.add(params.first_class);
    }

    window.addEventListener('scroll', () => {
      if(window.pageYOffset > params.height &&  params.active_class === params.first_class){
        params.elem.classList.add(params.second_class);
        params.active_class = params.second_class;
      }else if(window.pageYOffset < params.height && params.active_class === params.second_class ){
        params.elem.classList.remove(params.second_class);
        params.active_class = params.first_class;
      }
	   });

     document.querySelector('nav ul .closer').addEventListener('click', function () {
       this.parentNode.classList.remove('open');
     });

     document.querySelector('nav .burger').addEventListener('click', function () {
       this.previousElementSibling.classList.add('open');
     });
  }
}
