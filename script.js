(function(){
    'use strict';
    const subMenu= document.querySelectorAll('ul li ul');
    function hideSubMenu(){
		subMenu.forEach(function(subMenu){
		subMenu.className='hide-menu';
		});	
		}
		hideSubMenu();
		
		const topMenu=document.querySelectorAll('.menulink');
		topMenu.forEach(function(topMenu){
			topMenu.addEventListener('click', function(e){
			e.preventDefault();
			const parentVar=this.parentNode.querySelector('ul');
			if(parentVar.classList.contains('hide-menu')){
				hideSubMenu();
				parentVar.className='show-menu';

			}
			else{
				parentVar.className='hide-menu';
			}
		});

		});
})();