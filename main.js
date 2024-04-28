const myModal = document.getElementById("exampleModal");
let data = [
  { name: "Cadilak", price: "$50000", image: "./image1.jpg" },
  { name: "Alfa 4c", price: "$6600", image: "./image2.jpg" },
  { name: "Volvu", price: "$1800", image: "./image8.jpg" },
  { name: "Fordfox", price: "$9000", image: "./image17.jpg" },
  { name: "Marcides ", price: "$17000", image: "./image4.jpg" },
  { name: "Bm3", price: "$13700", image: "./image10.jpg" },
  { name: "Pitel", price: "$2990", image: "./image5.jpg" },
  { name: "Audi6", price: "$20000", image: "./image16.jpg" },
  { name: "Tecla model", price: "$39000", image: "./image9.jpg" },
  { name: "Toyota", price: "$40850", image: "./image11.jpg" },
  { name: "Shefureh", price: "$28000", image: "./image14.jpg" },
  { name: "Nesan audi", price: "$15000", image: "./image15.jpg" },
  { name: "Boursh", price: "$12000", image: "./image6.jpg" },
  { name: "Landrovar", price: "$11000", image: "./image12.jpg" },
  { name: "Seat", price: "$31000", image: "./image13.jpg" },
  { name: "Bugatti", price: "$22000", image: "./image7.jpg" },
  { name: "Smart", price: "$27000", image: "./image3.jpg" },
  { name: "Subaru", price: "$21000", image: "./image18.jpg" },
  { name: "Kiario", price: "$17000", image: "./image19.jpg" },
  { name: "Volkswagen", prwagenice: "$19900", image: "./image20.jpg" },
];
const image = document.getElementById("galleryImage");

data.forEach((images, index) => {
  const card = document.createElement("div");
  card.className = "col-md-4";
  card.innerHTML = `<div class="card mb-4 me-5 " style="width: 15rem;">
                <img onclick="fun('${images.image}')" src="${images.image}" class="card-img-top" data-toggle="modal" data-target="#exampleModal" data-index="${index}">
                <div class="card-body">
                    <h5 class="card-title fw-medium text-danger">${images.name}</h5>
                    <p class="card-text fw-medium text-success">Price: ${images.price}</p>
                </div>
            </div>`;
  image.appendChild(card);
});
const myModalAlternative = new bootstrap.Modal("#exampleModal", {
  //   backdrop: false,
});

function fun(src) {
  myModalAlternative.show();
  myModal.addEventListener("shown.bs.modal", () => {
    console.log(src);
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = ` <img width="100%" src="${src}" />`;
    
  });
}
