const products = [
    {
        name: "Nike vapor",
        price: "#45,000",
        image: "bootvapor.jpg",
        discount:"5%"
    },

    {
        name: "Crazy fast",
        price: "#43,000",
        image: "crazyfast.jpg",
        discount: "2%"
    },

    {
        name: "Nike mecurial",
        price: "#53,000",
        image: "lemonboot.webp",
        discount: "6%"
    },

    {
        name: "Nike phantom",
        price: "#45,000",
        image: "phantom.jpg",
        discount: "3%"
    },

    {
        name: "Trainig canvas",
        price: "#28,000",
        image: "canvass.jpg",
        discount: "4%"
    },

    {
        name: "Jogging canvas",
        price: "#25,000",
        image: "canvas.jpg",
        discount: "7%"
    },

    {
        name: "Gym canvas",
        price: "#20,000",
        image: "canva.jpg",
        discount: "5%"
    },

    {
        name: "Canvas",
        price: "#27,000",
        image: "canvasss.jpg",
        discount: "2%"
    },

     {
        name: "Armless jersey",
        price: "#5,000",
        image: "jersey.jpg",
        discount: "10%"
    },

    {
        name: "Long track jersey",
        price: "#18,000",
        image: "jerseynow.jpg",
        discount: "12%"
    },

    {
        name: "Short jersey",
        price: "#12,000",
        image: "jerseydd.jpg",
        discount: "4%"
    },

    {
        name: "Short and armless",
        price: "#14,000",
        image: "jerseyme.jpg",
        discount: "5%"
    },

     {
        name: "Big shin pad",
        price: "#4,500",
        image: "guards.jpg",
        discount: "9%"
    },

    {
        name: "Normal shin pad",
        price: "#5,000",
        image: "guard.jpg",
        discount: "7%"
    },

    {
        name: "small shin pad",
        price: "#6,000",
        image: "guardss.jpg",
        discount: "3%"
    },

    {
        name: "mini shin pad",
        price: "#8,000",
        image: "guarded.jpg",
        discount: "2%"
    },
];

let displayProduct = products.map(function(value,index,array) {
    return `
        <div class="text-2xl font-bold shadow-lg max-w-70 text-center relative p-4 rounded-2xl">
            <img class="pt-10 w-100" src="images/${value.image}">
            <p class="">Name: ${value.name}</p>
            <p>Price: ${value.price}</p>
            <div class="absolute top-2 right-1 "><p class=" text-orange-500"> -${value.discount}</p></div>
            <div class="pb- pt-3"><button class="bg-blue-400 px-3 py-3 rounded-md text-2xl hover:bg-blue-500 text-white">Add to cart</button></div>
        </div>

    `;
});

document.querySelector("#product").innerHTML = displayProduct.join("");
