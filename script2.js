 const triggers = document.querySelectorAll('.cool > li');
        console.log(triggers);
        const background = document.querySelector('.dropdownBackground');
        const tops = document.querySelector('.main');


        function handleEnter()
        {
           this.classList.add('trigger-enter');
           setTimeout( () => this.classList.add('trigger-enter-active'),150);

           background.classList.add('open');


           const dropdown = this.querySelector('.dropdown');
           const dropdownCoords = dropdown.getBoundingClientRect();
           console.log("dropdown");
           console.log(dropdownCoords);

           const topCoords = tops.getBoundingClientRect();

           const coords = {
            height: dropdownCoords.height,
            width: dropdownCoords.width,
            top:dropdownCoords.top-topCoords.top,
            left:dropdownCoords.left-topCoords.left
           };

           background.style.setProperty('width',`${coords.width}px`);
           background.style.setProperty('height',`${coords.height}px`);
            background.style.setProperty('left',`${coords.left}px`);
           background.style.setProperty('top',`${coords.top}px`);

           const backCoords = background.getBoundingClientRect();
           console.log(backCoords);
        }
        
        function handleLeave()
        {
           this.classList.remove('trigger-enter','trigger-enter-active');
           background.classList.remove('open');
        }

       triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
       triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));