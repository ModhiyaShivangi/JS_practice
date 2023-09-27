let SliderData = document.getElementsByClassName("slider-items");
        let counter = 0;
        function slider() {

            for (let index = 0; index < SliderData.length; index++) {
                SliderData[index].style.display = "none";
                SliderData[index].classList.remove("slider-effect");

            }
            if (counter >= SliderData.length) {
                counter = 0;
            }
            SliderData[counter].style.display = "block";
            SliderData[counter].classList.add("slider-effect");

            console.log("called" , counter);
            counter++;
            setTimeout(slider, 1000);
        }

        slider();