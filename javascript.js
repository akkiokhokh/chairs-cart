let products = [
  {
    name: "Magnet Black Chair",
    bio: "Sophisticated Seating ",
    img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "15,000",
  },
  {
    name: "Luxury Chair",
    bio: "Timeless Elegance",
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "25,000",
  },
  {
    name: "Royal Stool",
    bio: "American wooden",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "8,000",
  },

  {
    name: "Traditional",
    bio: "Seating Elevated",
    img: "https://images.unsplash.com/photo-1640938776314-4d303f8a1380?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "12,000",
  },
];
let PopularProducts = [
  {
    name: "Red Blood Fiber",
    img: "https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "36,0000",
    bio: "Seating Elegance",
  },
  {
    name: "Vouge Finish",
    img: "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "45,0000",
    bio: "Elite Collection",
  },
  {
    name: "Delux Comfort",
    img: "https://images.unsplash.com/photo-1589361558560-58fd95e47b3b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "18,0000",
    bio: "Ease with peace",
  },
  {
    name: "Humler Rest ",
    img: "https://images.unsplash.com/photo-1612731397462-d6c4f17cbb3e?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "20,0000",
    bio: "Deluxe Comfort",
  },
];

function addChair() {
  let cultter = "";
  products.forEach((curElem) => {
    cultter += ` <div class="product w-fit rounded-xl p-2 bg-white">
<div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden"> <img class="w-full h-full object-cover"
src="${curElem.img}"
alt=""
/></div>

<div class="data w-full px-2 py-5">
  <h1 class="font-semibold text-xl leading-none tracking-tight">
   ${curElem.name}
  </h1>
  <div class="flex justify-between w-full items-center mt-2">
    <div class="w-1/2">
      <h3 class="font-semibold opacity-20">${curElem.bio}</h3>
      <h4 class="font-semibold mt-2">&#8377 ${curElem.price}</h4>
    </div>
    <button class="w-10 h-10 rounded-full shader text-yellow-400">
      <i class="ri-add-line"></i>
    </button>
  </div>
</div>
</div>`;
  });
  document.querySelector(".products").innerHTML = cultter;
}

function addPopularChairs() {
  let clutter = "";

  PopularProducts.forEach((curElem) => {
    clutter += `<div
    class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
  >
    <div
      class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
    >
      <img
        class="w-full h-full object-cover"
        src="${curElem.img}"
        alt=""
      />
    </div>
    <div class="data py-2 w-full">
      <h1 class="leading-none font-semibold"> ${curElem.name}</h1>
      <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
      ${curElem.bio}
      </h4>
      <h4 class="mt-3 font-semibold text-zinc-500">&#8377 ${curElem.price}</h4>
    </div>
  </div>`;
  });
  document.querySelector(".populars").innerHTML = clutter;
}
addPopularChairs();
addChair();
