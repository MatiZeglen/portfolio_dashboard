const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
sideLinks.forEach(item=>
    {
        const li=item.parentElement;
        item.addEventListener('click', () =>
        {
            sideLinks.forEach(i =>
                {
                    i.parentElement.classList.remove('active');
                })
                li.classList.add('active');
        })
    });

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');
menuBar.addEventListener('click', () =>
{
     sideBar.classList.toggle('close');
})