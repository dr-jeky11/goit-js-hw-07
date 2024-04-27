const menuItemsByClass = document.querySelectorAll(".item");
const numberOfCategories = console.log(`Number of categories: ${menuItemsByClass.length}`);

const showInfo = menuItemsByClass.forEach(item => {
    const items = item.querySelectorAll("li")
    console.log(item.firstElementChild.textContent);
    console.log(`Elements: ${items.length}`);
})

