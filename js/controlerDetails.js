
    
    // document.getElementsByClassName("h_like").onclick = function() {
    //     let heart = document.getElementsByClassName("fa-heart")
    //     heart.classList.toggle('like_shoe');  
    // }
    
    //      goi API param
    //      https://shop.cyberlearn.vn/api/Product/getbyid?id= ${id}
    //      https://shop.cyberlearn.vn/api/Product
    
    // const urlParams = new URLSearchParams(window.location.search);
    // const idParam = urlParams.get('id');
    // getProductById(idParam);
    
    window.onload = function () {
      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get('id');
      console.log('params',myParam);
    
      //call api load lên giao diện
      getInforProduct(myParam);
      function getInforProduct(id) {
        let promise = axios({
          method: "GET",
          url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        });
        promise 
          .then((res) => {
            console.log(res);
            // const firstTenProducts = res.data.content.slice(0, 16);
            // renderProduct(firstTenProducts);
            // const firstTenProducts = res.data.content;
            // renderProduct(firstTenProducts);
            // getInforProduct(res.data.content);
            // renderImg(res.data.content);
            // renderName(res.data.content);
            // renderNameCol4(res.data.content);
            // renderPrice(res.data.content);
            // renderDescription(res.data.content);
      
          })
          .catch((err) => {
            console.log(err);
          });
      }
      
    }
    
    // function getInforProduct(id) {
    //   let promise = axios({
    //     method: "GET",
    //     url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    //   });
    //   promise 
    //     .then((res) => {
    //       console.log(res);
    //       // const firstTenProducts = res.data.content.slice(0, 16);
    //       // renderProduct(firstTenProducts);
    //       // const firstTenProducts = res.data.content;
    //       // renderProduct(firstTenProducts);
    //       // getInforProduct(res.data.content);
    //       // renderImg(res.data.content);
    //       // renderName(res.data.content);
    //       // renderNameCol4(res.data.content);
    //       // renderPrice(res.data.content);
    //       // renderDescription(res.data.content);
    
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    // getInforProduct();
    // getInforProduct(idParam);
    
    // function getIdProduct() {
    
    // };
    
    
    
    //    hien thi data len giao dien
    function renderImg(arr){
      let content = "";
      arr.forEach((item, index) => {
        let {image, name} = item;
        content += `
          <img src="${image}" alt="${name}"/>
        `;
      });
      document.getElementById("imgItem").innerHTML = content;
    }
    
    function renderName(arr) {
      let content;
      arr.forEach((item, index) => {
        let {name} = item;
        content += 
          name
        ;
      })
      document.querySelector("#nameItem h3").innerHTML = content;
    }   
    
    function renderDescription(arr) {
      let content;
      arr.forEach((item, index) => {
        let {description} = item;
        content += description;
    
      })
      document.querySelector("#nameItem p").innerHTML = content;
    }
    
    function renderNameCol4(arr) {
      let content;
      arr.forEach((item, index) => {
        let {name} = item;
        content += 
          name
        ;
      })
      document.querySelector("#nameItemR h1").innerHTML = content;
    }   
    
    function renderPrice(arr) {
      let content;
      arr.forEach((item, index) => {
        let {price} = item;
        content = price;
      })
      document.querySelector("").innerHTML = content;
    }
    
    //    Size
    function renderProductById(arr) {
      let productSize = '';
      var contentRelatedPro = "";
    
      for (let i = 0; i < arr.size.length; i++) {
          productSize += `<span class='product-card__detail'>${arr.size[i]}</span>`
          // console.log(arr.size[i]);
      }
    }
    
    
    
    
    
      
    
    
    
    
    
    
      