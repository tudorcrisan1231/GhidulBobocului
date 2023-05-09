function camine(){
    const camine_content = document.querySelectorAll('.camine_content');
    const camine_btns_btn = document.querySelectorAll('.camine_btns_btn');
    


    for(let i = 0; i < camine_content.length; i++){
        camine_btns_btn[i].addEventListener('click', function(){

            for(let j = 0; j < camine_content.length; j++){
                camine_content[j].classList.add('camin_hidden');
                camine_btns_btn[j].classList.remove('camine_btns_btn_active');
            }

            camine_content[i].classList.toggle('camin_hidden');
            camine_btns_btn[i].classList.toggle('camine_btns_btn_active');
        })
    }
}
camine();