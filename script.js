
document.querySelector('.play').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.image').style.top = '187px';
    document.querySelector('.image').style.right = '-59vw';
    
    document.querySelector('.ecriture').style.opacity = '1';
    
   document.querySelector('.ecriture').style.visibility = 'visible';
    document.querySelector('.ecriture').style.top = '135px';
    document.querySelector('.ecriture').style.right = '0px';
    
    document.querySelector('.pen').style.top = '-25px';
    document.querySelector('.pen').style.right = '-20px';
    document.querySelector('.pen').style.opacity = '0.3';
    document.querySelector('.play').style.opacity = '0';
    return false;
    
});


function remplace (){
 
    let recouvre = document.querySelector('p');
    recouvre.innerHTML = 'Je suis disponible immediatement !';
    recouvre.classList.add('active');
    
    
    
    
    
}

document.querySelector(".play").addEventListener("click",remplace);