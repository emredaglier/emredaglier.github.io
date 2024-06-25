const menuItemAll = document.getElementById("menu-blog-all");
const menuItemAero = document.getElementById("menu-blog-aero");
const menuItemTech = document.getElementById("menu-blog-tech");
const menuItemCode = document.getElementById("menu-blog-code");
const menuItemArt = document.getElementById("menu-blog-art");
const menuItemTravel = document.getElementById("menu-blog-travel");
const menuItemWork = document.getElementById("menu-blog-work");

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.menuJS');
    const pageItems = document.querySelectorAll('.divJS');

    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Remove the 'selected' class from all items
            navItems.forEach(i => i.classList.remove('text-[#05AFF2]'));
            navItems.forEach(i => i.classList.add('text-white'));

            // Add the 'selected' class to the clicked item
            item.classList.remove('text-white');
            item.classList.add('text-[#05AFF2]');

            pageItems.forEach(i => i.classList.remove('flex'));
            pageItems.forEach(i => i.classList.add('hidden'));
            pageItems[index].classList.add('flex');
            pageItems[index].classList.remove('hidden');
        });
    });
});

const pointerScroll = (elem) => {

    const dragStart = (ev) => elem.setPointerCapture(ev.pointerId);
    const dragEnd = (ev) => elem.releasePointerCapture(ev.pointerId);
    const drag = (ev) => elem.hasPointerCapture(ev.pointerId) && (elem.scrollLeft -= ev.movementX);

    elem.addEventListener("pointerdown", dragStart);
    elem.addEventListener("pointerup", dragEnd);
    elem.addEventListener("pointermove", drag);
};

document.querySelectorAll(".grab-scroll").forEach(pointerScroll);