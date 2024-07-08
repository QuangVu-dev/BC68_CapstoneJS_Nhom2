// Lấy danh sách sản phẩm cho new arrivals
function getInfoProduct() {
  let promise = axios({
    method: "GET",
    url: "https://shop.cyberlearn.vn/api/Product",
  });
  promise
    .then((res) => {
      console.log(res);
      const firstTenProducts = res.data.content.slice(0, 12);
      renderProduct(firstTenProducts);
    })
    .catch((err) => {
      console.log(err);
    });
}

getInfoProduct();

// Chức năng hiển thị thông tin sản phẩm lên giao diện
function renderProduct(arr) {
  let content = "";
  arr.forEach((item, index) => {
    let { image, name, price } = item;
    content += `
    <div class="col-md-3 col-sm-6 mt-4">
      <div class="product_item">
        <img src="${image}" alt="${name}"/>
        <h5 >${name}</h5>
        <p class="mb-0">Types of Shoes</p>
        <p class="mb-2">Quantity Color</p>
        <div class="d-flex align-items-center product-footer text-center">
        <button class="w-50 p-2 border-0">Buy now</button>
        <div class="w-50 p-2">${price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}</div>
        </div>
      </div>
    </div>
    `;
  });
  document.getElementById("product_item").innerHTML = content;
}

// Lấy danh sách sản phẩm cho new collection
function getInfoCollection() {
  let promise = axios({
    method: "GET",
    url: "https://shop.cyberlearn.vn/api/Product",
  });
  promise
    .then((res) => {
      const selectedProducts = res.data.content.slice(6, 18);
      renderCollection(selectedProducts);
    })
    .catch((err) => {
      console.log(err);
    });
}

getInfoCollection();

// Chức năng hiển thị thông tin sản phẩm lên giao diện
function renderCollection(arr) {
  let content = "";
  for (let i = 0; i < arr.length; i += 4) {
    const smallArr = arr.slice(i, i + 4);
    content += `
      <div class="carousel-item ${i === 0 ? "active" : ""}">
        <div class="row">
          ${smallArr
            .map(
              (item) => `
            <div class="col-md-3 col-sm-6 mb-3">
            <div class="collection_item">
            <img src="${item.image}" alt="${item.name}"/>
            <h5 class="my-2" >${item.name}</h5>
            <p class="mb-0">Types of Shoes</p>
            <p class="mb-2">Quantity Color</p>
            <div class="d-flex align-items-center collection-footer text-center">
            <button class="w-50 p-2 border-0">Buy now</button>
            <div class="w-50 p-2">${item.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}</div>
            </div>
          </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }
  document.getElementById("collection_item").innerHTML = content;
}
