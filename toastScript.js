const   button = document.querySelector('button'),
        toast = document.querySelector('.toast'),
        closeIcon = document.querySelector('.close'),
        progessBar = document.querySelector('.progress');


        button.addEventListener("click", () => {
            toast.classList.add("active");
            progessBar.classList.add("active");

            setTimeout(() => {
                toast.classList.remove("active");
            }, 5000)

            setTimeout(() => {
                progessBar.classList.remove("active");
            }, 5300)
        });

        closeIcon.addEventListener("click", () => {
            toast.classList.remove("active");

            setTimeout(() => {
                progessBar.classList.remove("active");
            }, 300)

        })

