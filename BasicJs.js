
window.addEventListener('load',()=>{
	document.querySelector('.preloader')
	.classList.add('hidePreloader')
})

const CreateBook = (()=>{
    const cars = [];

    class Car{
        constructor(make,country,img,special,price,type,trans,gas){
            this.make = make;
            this.country = country;
            this.img = img;
            this.special = special;
            this.price = price;
            this.type = type;
            this.trans = trans; 
            this.gas = gas;
        }
    }

    const inTo = (make,country,img = 'image/7.jpg',special=true,
    price=50000,type='sedan',trans='automatic',gas=50) =>{
        const car = new Car(make,country,img,special,price,type,trans,gas);

        cars.push(car);
    }
   const call = () =>{
      inTo('Comilla','Banglabesh');
      inTo('Comilla','Banglabesh','image/8.jpg',true);
      inTo('Comilla','Banglabesh','image/9.jpg',false);
      inTo('Comilla','Banglabesh','image/13.jpg',false,55000);
      inTo('Comilla','Banglabesh','image/10.jpg',undefined,55000,'kiut');
      inTo('Comilla','Banglabesh','image/11.jpg',false);

      inTo('Dhaka','Banglabesh','image/11.jpg',false);
      inTo('Dkaka','Banglabesh','image/11.jpg',true);
      inTo('Kushtia','Banglabesh','image/11.jpg',true);
      inTo('Dhaka','Banglabesh','image/11.jpg',false);
      inTo('Dhaka','Banglabesh','image/11.jpg',false);
   }
   call();
   //console.log(cars);
    
   const specialCar = cars.filter((car)=>{
       return car.special === true
    })


   return{
       cars,
       specialCar
   }

})();


const DisplaySpecial = ((CreateBook) =>{
    const specialCar = CreateBook.specialCar;
    // console.log(specialCar);
    const info = document.querySelector('.freture-info');

    document.addEventListener('DOMContentLoaded',()=>{
        info.innerHTML = '';

        let data = '';
        specialCar.forEach((element)=>{
            data+= `<div class="freture-iteam my-3 d-flex p-2 align-items-baseline flex-wrap">
                    <span data-image = "${element.image}" class="freture-icon mr-3">
                        <i class="fas fa-motorcycle"></i>
                    </span>
                    <h5 class="font-weight-bold mx-1">
                        ${element.make}
                    </h5>
                    <h5 class="mx-1">
                        ${element.country}
                    </h5>
                </div>`
        })

        info.innerHTML = data;

    })

    info.addEventListener('click',(event)=>{
        if(event.target.parentElement.classList.contains('freture-icon')){
            const image = event.target.parentElement.dataset.image;
            document.querySelector('.freture-photo').src = image;
        }
    })
    
})(CreateBook);



const 