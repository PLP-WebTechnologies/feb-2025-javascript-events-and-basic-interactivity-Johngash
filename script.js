/*Selecting the urls to photos*/ 
const photoForm = document.querySelector('#photo-url'),
        url1 = document.querySelector('#photo1'),
        url2 = document.querySelector('#photo2'),
        url3 = document.querySelector('#photo3'),
        url4 = document.querySelector('#photo4'),
        url5 = document.querySelector('#photo5');

/*Slecting photo display gallary and photo frames*/
const photoGallary = document.querySelector('#photo-gallary'),
        photoOne = document.querySelector('.one'),
        photoTwo = document.querySelector('.two'),
        photoThree = document.querySelector('.three'),
        photoFour = document.querySelector('.four'),
        photoFive = document.querySelector('.five');

/*A function to hide the url and show the photo gallary form after url submition*/

photoForm.addEventListener('submit',function(event){
    event.preventDefault();
    window.alert('Form submitted');
    photoForm.style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    photoGallary.style.display = 'grid';
    photoOne.innerHTML = `<img src="${url1.value}" alt="photo1">`
    photoTwo.innerHTML = `<img src="${url2.value}" alt="photo2">`
    photoThree.innerHTML = `<img src="${url3.value}" alt="photo3">`
    photoFour.innerHTML = `<img src="${url4.value}" alt="photo4">`
    photoFive.innerHTML = `<img src="${url5.value}" alt="photo5">`
});

