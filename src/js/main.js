
$(function () {
  $(".slide-man.owl-carousel").owlCarousel({
    items: 1,
    margin: 20,
    nav: true,
    dots: true,
    navText: [`<i style = "color: #0063d1; font-size: 30px;" class="fas fa-arrow-left"></i>`, `<i style = "color: #0063d1; font-size: 30px;" class="fas fa-arrow-right"></i>`]
  });
});

$(function () {
  $(window).scroll(function () {
    let currentPos = $("html").scrollTop();
    if (currentPos > 20) {
      //hien cai nut onTop
      $(".content-1").css('position', 'fixed');
      $(".content-1").css('top', '0');
    }
    else {
      $(".content-1").css('position', 'unset');
    }
  });
});
$(function () {
  $(".part-bottom.owl-carousel").owlCarousel({
    items: 6,
    margin: 20,
    dots: true,
    autoplay: true,
  });
});
$(function () {
  $(".part-end.owl-carousel").owlCarousel({
    items: 3,
    margin: 20,
    dots: true,
    autoplay: true,
  });
});
$(function () {
  $(".content-9 .owl-carousel").owlCarousel({
    items: 1,
    margin: 20,
    dots: false,
    nav: true,
    animateOut: 'fadeOut',
    navText: [`<i style = "color: #1e7ee9; font-size: 30px;" class="fas fa-arrow-left"></i>`, `<i style = "color: #1e7ee9; font-size: 30px;" class="fas fa-arrow-right"></i>`]

  });
});

$(function () {
  const list = [
    {
      "id": 1,
      "name": "Portable Speaker",
      "name_detail": [],
      "price": 15,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Wireless-Speaker-Portable-bluetooth-185x170.jpg",
      "sale": 20,
      "class": ["Featured Product", "Recently Add"],
      "option": ["On Sell", "R-Trend"],
      "row": [],
      "categories": ["Bluetooth", "Portable", "Speaker"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Wireless-Speaker-Portable-bluetooth-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/LEICKE-Bluetooth-Portable-Speaker-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Bluedio-TS-5-mini-speaker-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/HTB1olbtmlDH8KJj-100x100.jpg"
      ]
    },
    {
      "id": 2,
      "name": "LED Projector",
      "name_detail": [],
      "price": 20,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Bluetooth-Smart-Projector-185x170.jpg",
      "sale": 0,
      "class": ["Featured Product"],
      "option": ["On Sell"],
      "row": [],
      "categories": ["Camera", "Mobile", "Projector"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Bluetooth-Smart-Projector-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Lumens-LED-Projector-GP80-UP-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/NOYAZU-New-BL80-Smart-Android-6-0-WIFI-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Crenova-Mini-Portable-LED-Projector-100x100.jpg"
      ]
    },
    {
      "id": 3,
      "name": "LED Television",
      "name_detail": [],
      "price": 670,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/26-185x170.png",
      "sale": 15,
      "class": ["Featured Product", "Recently"],
      "option": ["On Sell", "R-Trend"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/26-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/25-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/28-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/LED-32-LG-32LJ500U-1-100x100.jpg"
      ]
    },
    {
      "id": 4,
      "name": "3D Glass",
      "name_detail": [],
      "price": 640,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-Virtual-Reality-185x170.jpg",
      "sale": 19,
      "class": ["Featured Product"],
      "option": ["On Sell"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-Virtual-Reality-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Glasses-3D-Movies-Games-for-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Google-Cardboard-Game-Movie-100x100.jpg"
      ]
    },
    {
      "id": 5,
      "name": "Gaming Headphones",
      "name_detail": [],
      "price": 69,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-2-185x170.jpg",
      "sale": 16,
      "class": ["Featured Product"],
      "option": ["On Sell"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-2-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-3-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-1-100x100.jpg"
      ]
    },
    {
      "id": 6,
      "name": "Touchscreen Laptop",
      "name_detail": [],
      "price": 640,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/laptop2-scaled-e1594811938278.jpg",
      "sale": 19,
      "class": ["Featured Product"],
      "option": ["On Sell"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/laptop2-scaled-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/8GB-Ram-120GB-SSD-500GB-HDD-Ultrathin-Quad-Core-Fast-Running-Windows10-system-Laptop-Notebook-Computer-1-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/11-6-Inch-IPS-Touchscreen-Tablet-PC-VOYO-VBOOK-A1-Intel-APOLLO-LAKE-N3450-8GB-DDR3L-100x100.jpg"
      ]
    },
    {
      "id": 7,
      "name": "Mini 3D Glass",
      "name_detail": "3d Glass Gamepad Google Glass",
      "price": 220,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/40-185x170.png",
      "sale": 0,
      "class": ["Featured Product", "Best Deal", "Recently Add", "New Arrivals"],
      "option": ["A-On Sell", "A-Hot Sell", "Hot Sell", "D-On Sell", "D-Hot Sell", "D-Trend", "D-Best Sell", "R-On Sell", "R-Hot Sell"],
      "row": ["1"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/40-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/41-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/39-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/38-100x100.png"
      ]
    },
    {
      "id": 8,
      "name": "Bluetooth Gamepad",
      "name_detail": [],
      "price": 199,
      "name_detail": "Drone Gamepad Laptop Mobile",
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/45-185x170.png",
      "sale": 0,
      "class": ["New Arrivals", "Featured Product", "Best Deal", "Recently Add"],
      "option": ["A-Hot Sell", "A-On Sell", "Hot Sell", "D-On Sell", "D-Hot Sell", "D-Trend", "D-Best Sell", "R-On Sell", "R-Hot Sell"],
      "row": ["1"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/45-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/39-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/48-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/39-100x100.png"

      ]
    },
    {
      "id": 9,
      "name": "Apple iPhone 6s",
      "name_detail": "Mobile",
      "price": 299,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/21-185x170.png",
      "sale": 0,
      "class": ["New Arrivals", "Featured Product", "Best Deal", "Recently Add"],
      "option": ["A-Hot Sell", "A-On Sell", "Hot Sell", "D-On Sell", "D-Hot Sell", "D-Trend", "D-Best Sell", "R-On Sell", "R-Hot Sell"],
      "row": ["1"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/21-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/22-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/23-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/24-100x100.png"
      ]
    },
    {
      "id": 10,
      "name": "Kotion Headset",
      "name_detail": "Headphone Laptop Mobile",
      "price": 29,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/49-185x170.png",
      "sale": 0,
      "class": ["New Arrivals", "Featured Product", "Best Deal", "Recently Add"],
      "option": ["A-On Sell", "A-Hot Sell", "Hot Sell", "D-On Sell", "D-Hot Sell", "D-Trend", "D-Best Sell", "R-On Sell", "R-Hot Sell"],
      "row": ["2"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/49-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/51-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/50-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Bluetooth-Headsets-100x100.jpg"
      ]
    },
    {
      "id": 11,
      "name": "Waterproof Camera",
      "name_detail": [],
      "price": 560,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/06-185x170.png",
      "sale": 7,
      "class": ["Featured Product", "Best Deal", "Recently Add"],
      "option": ["Hot Sell", "Best Sell", "D-On Sell", "D-Hot Sell", "D-Trend", "D-Best Sell", "R-On Sell", "R-Hot Sell"],
      "row": ["2"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/06-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/08-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/07-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/05-100x100.png"
      ]
    },
    {
      "id": 12,
      "name": "Moving Camera",
      "name_detail": [],
      "price": 230,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/07-185x170.png",
      "sale": 0,
      "class": ["Featured Product", "Best Deal", "Recently Add"],
      "option": ["Hot Sell", "D-On Sell", "D-Hot Sell", "D-Trend", "D-Best Sell", "R-On Sell", "R-Hot Sell"],
      "row": ["2"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/07-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/06-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/05-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Original-Fujifilm-Instax-Mini-8-Camera-Film-Camera-100x100.jpg"
      ]
    },
    {
      "id": 13,
      "name": "Xpeed Laptop",
      "name_detail": "Featured Product Laptop",
      "price": 640,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/laptop_features_1-185x170.jpg",
      "sale": 16,
      "class": ["Featured Product", "New Arrivals"],
      "option": ["Trend", "Best Sell", "A-Best Sell"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/laptop_features_1-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/11-6-Inch-IPS-Touchscreen-Tablet-PC-VOYO-VBOOK-A1-Intel-APOLLO-LAKE-N3450-8GB-DDR3L-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/13-3-VBOOK-V3-Tablet-PC-with-Fingerprint-Recognition-IPS-Touchscreen-Core-i7-6500U-laptop-2-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/16G-RAM-1TB-SSD-VOYO-15-6-2G-Dedicated-Card-Laptop-i7-6500U-with-Backlit-keyboard-1-100x100.jpg"
      ]
    },
    {
      "id": 14,
      "name": "Xpeed Laptop V2",
      "name_detail": [],
      "price": 699,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/laptop-185x170.jpg",
      "sale": 0,
      "class": ["Featured Product"],
      "option": ["Trend"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/laptop-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/13-3-VBOOK-V3-Tablet-PC-with-Fingerprint-Recognition-IPS-Touchscreen-Core-i7-6500U-laptop-2-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/11-6-Inch-IPS-Touchscreen-Tablet-PC-VOYO-VBOOK-A1-Intel-APOLLO-LAKE-N3450-8GB-DDR3L-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/16G-RAM-1TB-SSD-VOYO-15-6-2G-Dedicated-Card-Laptop-i7-6500U-with-Backlit-keyboard-1-100x100.jpg"
      ]
    },
    {
      "id": 15,
      "name": "Apple iPhone 7s",
      "name_detail": "Mobile",
      "price": 690,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/24-185x170.png",
      "sale": 4,
      "class": ["Featured Product", "New Arrivals"],
      "option": ["Trend", "Best Sell", "A-Best Sell"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/24-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/Zhndu-Mobile-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/23-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/22-100x100.png"
      ]
    },
    {
      "id": 16,
      "name": "Smart TV",
      "name_detail": [],
      "price": [30 + ".00" + " - " + "$" + 280],
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/LED-32-LG-32LJ500U-1-185x170.jpg",
      "sale": 0,
      "class": ["Featured Product", "Recently Add"],
      "option": ["Trend", "R-Trend"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/LED-32-LG-32LJ500U-1-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/81I5OPEswbL-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/912-WOxyL5L-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/91e95PIpzzL-100x100.jpg"
      ]
    },
    {
      "id": 17,
      "name": "Zhndu Mobile",
      "name_detail": [],
      "price": 230,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Zhndu-Mobile-1-185x170.png",
      "sale": 30,
      "class": ["Featured Product"],
      "option": ["Trend"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": []
    },
    {
      "id": 18,
      "name": "7th Generation",
      "name_detail": [],
      "price": 560,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/13-185x170.png",
      "sale": 7,
      "class": ["Featured Product"],
      "option": ["Trend", "D-On Sell"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": []
    },
    {
      "id": 19,
      "name": "Xpeed Projector",
      "name_detail": "Mobile Projector",
      "price": 520,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/36-185x170.png",
      "sale": 4,
      "class": ["Featured Product", "New Arrivals"],
      "option": ["Best Sell", "A-Best Sell"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/36-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/35-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/34-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/37-100x100.png"
      ]
    },
    {
      "id": 20,
      "name": "Xpeed Mobile",
      "name_detail": "Future Product",
      "price": 230,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Zhndu-Mobile-1-185x170.png",
      "sale": 30,
      "class": ["Featured Product", "New Arrivals"],
      "option": ["Best Sell", "A-Best Sell"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Zhndu-Mobile-1-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/China-Mobile-A3S-M653-2G-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Oukitel-Mobile-Phone-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/iphone7-100x100.png"
      ]
    },
    {
      "id": 21,
      "name": "Fuers Outdoor",
      "name_detail": [],
      "price": 520,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/05-185x170.png",
      "sale": 4,
      "class": ["Featured Product"],
      "option": ["Best Sell"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/05-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/08-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/07-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Original-Fujifilm-Instax-Mini-8-Camera-Film-Camera-100x100.jpg"
      ]
    },
    {
      "id": 22,
      "name": "Core i7 Laptop",
      "name_detail": [],
      "price": 125,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/01-185x170.png",
      "sale": 0,
      "class": ["Best Deal", "Recently Add"],
      "option": ["D-On Sell", "D-Hot Sell", "D-Trend", "D-Best Sell", "R-On Sell", "R-Hot Sell"],
      "row": ["3"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/01-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/phone_slider_4_406x628-1-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Oukitel-Mobile-Phone-100x100.jpg"
      ]
    },
    {
      "id": 23,
      "name": "Stereo Headset",
      "name_detail": "Headphone",
      "price": 16,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Bluetooth-Headphones-Wireless-Stereo-Headset-185x170.jpg",
      "sale": 0,
      "class": ["Best Deal", "Recently Add", "New Arrivals"],
      "option": ["A-Trend", "Best Sell", "D-On Sell", "D-Hot Sell", "D-Trend", "D-Best Sell", "R-On Sell", "R-Hot Sell"],
      "row": ["3"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Bluetooth-Headphones-Wireless-Stereo-Headset-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Bluetooth-Headsets-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Bluetooth-Headphones-Wireless-Stereo-Headset-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-1-100x100.jpg"
      ]
    },
    {
      "id": 24,
      "name": "Golden Bluetooth",
      "name_detail": [],
      "price": 23,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Headphones-Wireless-Stereo-Headsets-earbuds-with-Mic-185x170.jpg",
      "sale": 48,
      "class": ["Best Deal", "Recently Add"],
      "option": ["Best Sell", "D-On Sell", "D-Hot Sell", "D-Trend", "D-Best Sell", "R-On Sell", "R-Hot Sell"],
      "row": ["3"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Headphones-Wireless-Stereo-Headsets-earbuds-with-Mic-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Bluetooth-Headsets-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Bluetooth-Headphones-Wireless-Stereo-Headset-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-1-100x100.jpg"
      ]
    },
    {
      "id": 25,
      "name": "Camera Drone",
      "name_detail": "Drone Headphone Mobile Speaker",
      "price": 720,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/camera-drone-125x125.png",
      "sale": 25,
      "class": ["Best Deal", "Recently Add", "New Arrivals"],
      "option": ["A-Trend", "Best Sell", "D-On Sell", "D-Hot Sell", "D-Trend", "D-Best Sell", "R-On Sell", "R-Hot Sell"],
      "row": ["4"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/camera-drone-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Arasdm-APP-RC-Drones-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/WIFI-FPV-With-720P-Camera-High-Hold-Foldable-Drones-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Drone-jjrc-X3-hax-WI-FI-FPV-100x100.jpg"
      ]
    },
    {
      "id": 26,
      "name": "Mic for Phone",
      "name_detail": [],
      "price": 70,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/Speaker-Cannon-2-Mini-Smart-Bluetooth-125x125.png",
      "sale": 0,
      "class": ["Best Deal", "Recently Add"],
      "option": ["Best Sell", "D-On Sell", "D-Hot Sell", "D-Trend", "D-Best Sell", "R-On Sell", "R-Hot Sell"],
      "row": ["4"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/Speaker-Cannon-2-Mini-Smart-Bluetooth-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Portable-Wireless-Subwoofer-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/REMAX-Portable-Wireless-Bluetooth-Speaker-100x100.jpg"
      ]
    },
    {
      "id": 27,
      "name": "Wireless Speaker",
      "name_detail": [],
      "price": 65,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/REMAX-Portable-Wireless-Bluetooth-Speaker-125x125.jpg",
      "sale": 0,
      "class": ["Best Deal", "Recently Add"],
      "option": ["Best Sell", "D-On Sell", "D-Hot Sell", "D-Trend", "D-Best Sell", "R-On Sell", "R-Hot Sell"],
      "row": ["4"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/REMAX-Portable-Wireless-Bluetooth-Speaker-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Portable-Wireless-Subwoofer-100x100.jpg"
      ]
    },
    {
      "id": 28,
      "name": "3D VR Glass",
      "name_detail": [],
      "price": 245,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-158x158.jpg",
      "sale": 0,
      "class": ["Recently Add"],
      "option": ["R-Trend"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-Virtual-Reality-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Google-Cardboard-Game-Movie-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Glasses-3D-Movies-Games-for-100x100.jpg"
      ]
    },
    {
      "id": 29,
      "name": "Men Watches",
      "name_detail": [],
      "price": 240,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Mens-Watches-158x158.jpg",
      "sale": 0,
      "class": ["Recently Add"],
      "option": ["R-Trend"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Mens-Watches-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Screen-Smart-Sensor-Adapt-Mi-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Xiaomi-Mijia-PM2-5-Detector-Xiaomi-OLED-Screen-Smart-Sensor-Adapt-Mi-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Luxury-Digital-Male-Sport-Watch-Waterproof-100x100.jpg"
      ]
    },
    {
      "id": 30,
      "name": "Wireless Speaker",
      "name_detail": [],
      "price": 60,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/New-2nd-generation-Smart-Air-158x158.png",
      "sale": 0,
      "class": ["Recently Add"],
      "option": ["R-Trend"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/New-2nd-generation-Smart-Air-100x100.png",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/HTB1olbtmlDH8KJj-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Wireless-Speaker-Portable-bluetooth-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Bluedio-TS-5-mini-speaker-100x100.jpg"
      ]
    },
    {
      "id": 31,
      "name": "HD LED TV",
      "name_detail": [],
      "price": 310,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/28-158x158.png",
      "sale": 32,
      "class": ["Recently Add"],
      "option": ["R-Trend"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": []
    },
    {
      "id": 32,
      "name": "Intel Laptop",
      "name_detail": [],
      "price": 640,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/15-6-Core-i7-3517U-Netbook-with-bluetooth-wifi-HDMI-VGA-Laptop-Computer-4M-Cache-Intel-158x158.jpg",
      "sale": 16,
      "class": ["Recently Add"],
      "option": ["R-Trend"],
      "row": [],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": []
    },
    {
      "id": 33,
      "name": "Bluetooth Speaker",
      "name_detail": "Camera Headphone Speaker",
      "price": 70,
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/HTB1olbtmlDH8KJj-253x200.jpg",
      "sale": 0,
      "class": ["New Arrivals"],
      "option": ["A-Trend"],
      "row": ["1"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/HTB1olbtmlDH8KJj-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/LEICKE-Bluetooth-Portable-Speaker-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Wireless-Speaker-Portable-bluetooth-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/New-2nd-generation-Smart-Air-100x100.png"
      ]
    },
    {
      "id": 34,
      "name": "Sony Gamepad",
      "name_detail": "Gamepad",
      "price": [110 + ".00" + " - " + "$" + 120],
      "image": "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Gamepad-for-Sony-Playstation-3-253x200.jpg",
      "sale": 0,
      "class": ["New Arrivals"],
      "option": ["A-Trend"],
      "row": ["1"],
      "categories": ["LED Television", "Samsung TV"],
      "description": ["Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."],
      "galeries": [
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Gamepad-for-Sony-Playstation-3-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Gen-Game-Gamepad-for-Sony-Playstation-3-100x100.jpg",
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Gamepad-for-Sony-Playstation-3-100x100.jpg"
      ]
    },
  ];

  let cart = [];

  // Các thao tác khác nè
  $('.list-sell a').click(function (e) {
    e.preventDefault();
    $(this).parent().find('a.active').removeClass('active');
    $(this).addClass('active');

  });

  $('.list-sell a').click(function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $(anchor).addClass('active').siblings().removeClass('active');

  });

  $(".select-style").click(function (e) {
    e.preventDefault();
    // e.stopPropagations();
    $("ul.select-options").slideToggle();
    for (const option of document.querySelectorAll("li.select-option")) {
      $(option).click(function (e) {
        e.preventDefault();
        $(this).parent().find('li.selected').removeClass('selected');
        $(this).addClass('selected');
        this.closest('.select-2').querySelector('.select-style span').textContent = this.textContent;
        $("ul.select-options").slideUp();
      });
    }


  });

  var removeClass = true;
  $('.select-category').click(function (e) {
    e.preventDefault();
    $('ul.select-option-1').toggleClass('active');
    $('.select-1 span').toggleClass('new-bg');
    $('.select-1 i').toggleClass('fa-chevron-up');
    removeClass = false;
  });

  $("html").click(function () {
    if (removeClass) {
      $("ul.select-option-1").removeClass('active');
      $(".select-1 span").removeClass('new-bg');
      $('.select-1 i').removeClass('fa-chevron-up');
    }
    removeClass = true;
  });

  $(".on-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 200);
  });

  //Search nè
  $(".search-item").keyup(function (e) {
    e.preventDefault();
    const searchInput = $(".search-item").val();
    if (!searchInput.length) {
      $(".products").css('display', 'none')
    }
    else {
      $(".products").css('display', 'flex')
    }
    const filterProducts = list.filter(val => {
      return val.name.toLowerCase().includes(searchInput.toLowerCase());
    }).map(val => {
      return {
        ...val,
        name: val.name.split(searchInput).join(`<span style="color:red">${searchInput}</span>`)
      }
    })
    renderProducts(filterProducts);
  });

  function renderProducts(list) {
    //xoa het item con
    $(".products .col").empty();
    //load cac san pham
    if (list.length) {
      list.map(val => {
        if (val.sale) {
          $(`
                <div data-id=${val.id} class="item flex a-center">
                    <img src=${val.image} alt="">
                        <div class="info">
                        <a id="view-item" href="http://localhost:3000/viewproduct.html"> ${val.name}</a>
                            <br>
                                <div class="price">
                                    <span class="price-default">$${val.price}.00</span>
                                    <span class="price-discount">$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                                </div>
                                </div>
                        </div>
            `).appendTo(".products .col");
        }
        else {
          $(`
                <div data-id=${val.id} class="item flex a-center">
                                <img src=${val.image} alt="">
                                <div class="info">
                                <a id="view-item" href="http://localhost:3000/viewproduct.html"> ${val.name}</a>
                                <br>
                                    <div class="price">
                                        <span class="price-discount">$${val.price}.00</span>
                                    </div>
                                </div>
                        </div>
            `).appendTo(".products .col");
        }
      });
    } else {
      $(`<p>Sorry, but nothing matched your search criteria. Please try again with some different keywords.</p>`).appendTo(".products .col")
    }

  }

  //Các thao tác render mặt hàng nè
  const onsell = list.filter((val) =>
    val.option.includes("On Sell")
    && val.class.includes("Featured Product")
  );
  const hotsell = list.filter(val => val.option.includes("Hot Sell")
    && val.class.includes("Featured Product")
  );
  const trend = list.filter(val => val.option.includes("Trend")
    && val.class.includes("Featured Product"));
  const bestsell = list.filter(val => val.option.includes("Best Sell")
    && val.class.includes("Featured Product"));

  renderOnsell(onsell);
  renderHotsell(hotsell);
  renderTrend(trend);
  renderBestsell(bestsell);

  function renderOnsell(data) {
    data.map(val => {
      if (val.sale) {
        $(`<div data-id=${val.id} class="col-md-4 view-new item">
            <div  class="part-bottom-1">
              <div class="star flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="far fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <a href=""><img
                  src=${val.image}
                  alt=""></a>
              <div class="text">
                <a class = "show" href="http://localhost:3000/viewproduct.html">
                  <span>${val.name}</span>
                </a>
                <div class="price flex a-center">
                  <p>$${val.price}.00</p>
                  <span >$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>`).appendTo("#bottom-1 .row");
      }
      else {
        $(`<div data-id=${val.id} class="col-md-4 view-new item">
            <div class="part-bottom-1">
              <div class="star flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="far fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <a href=""><img
                  src=${val.image}
                  alt=""></a>
              <div class="text">
                <a class = "show" href="http://localhost:3000/viewproduct.html">
                  <span>${val.name}</span>
                </a>
                <div class="price flex a-center">
                <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>`).appendTo("#bottom-1 .row");
      }
    })
  };

  function renderHotsell(data) {
    data.map(val => {
      if (val.sale) {
        $(`<div data-id=${val.id} class="col-md-4 view-new item">
            <div class="part-bottom-1">
              <div class="star flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="far fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <a class = "show" href=""><img
                  src=${val.image}
                  alt=""></a>
              <div class="text">
                <a href="http://localhost:3000/viewproduct.html">
                  <span>${val.name}</span>
                </a>
                <div class="price flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>`).appendTo("#bottom-2 .row");
      }
      else {
        $(`<div data-id=${val.id} class="col-md-4 view-new item">
            <div class="part-bottom-1">
              <div class="star flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="far fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <a href=""><img
                  src=${val.image}
                  alt=""></a>
              <div class="text">
                <a class = "show" href="http://localhost:3000/viewproduct.html">
                  <span>${val.name}</span>
                </a>
                <div class="price flex a-center">
                <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>`).appendTo("#bottom-2 .row");
      }
    })
  };

  function renderTrend(data) {
    data.map(val => {
      if (val.sale) {
        $(`<div data-id=${val.id} class="col-md-4 view-new item">
            <div class="part-bottom-1">
              <div class="star flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="far fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <a href=""><img
                  src=${val.image}
                  alt=""></a>
              <div class="text">
                <a class = "show" href="http://localhost:3000/viewproduct.html">
                  <span>${val.name}</span>
                </a>
                <div class="price flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>`).appendTo("#bottom-3 .row");
      }
      else {
        $(`<div data-id=${val.id} class="col-md-4 view-new item">
        <div class="part-bottom-1">
              <div class="star flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="far fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <a href=""><img
                  src=${val.image}
                  alt=""></a>
              <div class="text">
                <a class = "show" href="http://localhost:3000/viewproduct.html">
                  <span>${val.name}</span>
                </a>
                <div class="price flex a-center">
                <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>`).appendTo("#bottom-3 .row");
      }
    })
  };

  function renderBestsell(data) {
    data.map(val => {
      if (val.sale) {
        $(`<div data-id=${val.id} class="col-md-4 view-new item">
        <div class="part-bottom-1">
              <div class="star flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="far fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <a href=""><img
                  src=${val.image}
                  alt=""></a>
              <div class="text">
                <a class = "show" href="http://localhost:3000/viewproduct.html">
                  <span>${val.name}</span>
                </a>
                <div class="price flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>`).appendTo("#bottom-4 .row");
      }
      else {
        $(`<div data-id=${val.id} class="col-md-4 view-new item">
        <div class="part-bottom-1">
              <div class="star flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="far fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <a href=""><img
                  src=${val.image}
                  alt=""></a>
              <div class="text">
                <a class = "show" href="http://localhost:3000/viewproduct.html">
                  <span>${val.name}</span>
                </a>
                <div class="price flex a-center">
                <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>`).appendTo("#bottom-4 .row");
      }
    })
  };

  //Best Deal

  const onsell_deal_1 = list.filter((val) =>
    val.option.includes("D-On Sell")
    && val.class.includes("Best Deal")
    && val.row.includes("1")
  );
  const onsell_deal_2 = list.filter((val) =>
    val.option.includes("D-On Sell")
    && val.class.includes("Best Deal")
    && val.row.includes("2")
  );
  const onsell_deal_3 = list.filter((val) =>
    val.option.includes("D-On Sell")
    && val.class.includes("Best Deal")
    && val.row.includes("3")
  );
  const onsell_deal_4 = list.filter((val) =>
    val.option.includes("D-On Sell")
    && val.class.includes("Best Deal")
    && val.row.includes("4")
  );

  //---------------------------------------------//
  const hotsell_deal_1 = list.filter((val) =>
    val.option.includes("D-Hot Sell")
    && val.class.includes("Best Deal")
    && val.row.includes("1")
  );
  const hotsell_deal_2 = list.filter((val) =>
    val.option.includes("D-Hot Sell")
    && val.class.includes("Best Deal")
    && val.row.includes("2")
  );
  const hotsell_deal_3 = list.filter((val) =>
    val.option.includes("D-Hot Sell")
    && val.class.includes("Best Deal")
    && val.row.includes("3")
  );
  const hotsell_deal_4 = list.filter((val) =>
    val.option.includes("D-Hot Sell")
    && val.class.includes("Best Deal")
    && val.row.includes("4")
  );
  //----------------------------------------------//
  const trend_deal_1 = list.filter((val) =>
    val.option.includes("D-Trend")
    && val.class.includes("Best Deal")
    && val.row.includes("1")
  );
  const trend_deal_2 = list.filter((val) =>
    val.option.includes("D-Trend")
    && val.class.includes("Best Deal")
    && val.row.includes("2")
  );
  const trend_deal_3 = list.filter((val) =>
    val.option.includes("D-Trend")
    && val.class.includes("Best Deal")
    && val.row.includes("3")
  );
  const trend_deal_4 = list.filter((val) =>
    val.option.includes("D-Trend")
    && val.class.includes("Best Deal")
    && val.row.includes("4")
  );

  //-----------------------------------------------//
  const bestsell_deal_1 = list.filter((val) =>
    val.option.includes("D-Best Sell")
    && val.class.includes("Best Deal")
    && val.row.includes("1")
  );
  const bestsell_deal_2 = list.filter((val) =>
    val.option.includes("D-Best Sell")
    && val.class.includes("Best Deal")
    && val.row.includes("2")
  );
  const bestsell_deal_3 = list.filter((val) =>
    val.option.includes("D-Best Sell")
    && val.class.includes("Best Deal")
    && val.row.includes("3")
  );
  const bestsell_deal_4 = list.filter((val) =>
    val.option.includes("D-Best Sell")
    && val.class.includes("Best Deal")
    && val.row.includes("4")
  );
  //+ OnSell
  renderDeal_Onsell_1(onsell_deal_1);
  renderDeal_Onsell_2(onsell_deal_2);
  renderDeal_Onsell_3(onsell_deal_3);
  renderDeal_Onsell_4(onsell_deal_4);

  //+Hot Sell
  renderDeal_Hotsell_1(hotsell_deal_1);
  renderDeal_Hotsell_2(hotsell_deal_2);
  renderDeal_Hotsell_3(hotsell_deal_3);
  renderDeal_Hotsell_4(hotsell_deal_4);

  //+Trend
  renderDeal_Trend_1(trend_deal_1);
  renderDeal_Trend_2(trend_deal_2);
  renderDeal_Trend_3(trend_deal_3);
  renderDeal_Trend_4(trend_deal_4);

  //+BestSell
  renderDeal_Bestsell_1(bestsell_deal_1);
  renderDeal_Bestsell_2(bestsell_deal_2);
  renderDeal_Bestsell_3(bestsell_deal_3);
  renderDeal_Bestsell_4(bestsell_deal_4);



  //-------------------------------------//
  function renderDeal_Onsell_1(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
          <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
                <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-1 .row-1");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
                <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-1 .row-1");
      }
    })
  };

  function renderDeal_Onsell_2(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-1 .row-2");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-1 .row-2");
      }
    })
  };

  function renderDeal_Onsell_3(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-1 .row-3");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-1 .row-3");
      }
    })
  };

  function renderDeal_Onsell_4(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 item">
        <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-1 .row-4");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-1 .row-4");
      }
    })
  };

  //------------------------------------//
  function renderDeal_Hotsell_1(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-2 .row-1");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-2 .row-1");
      }
    })
  };

  function renderDeal_Hotsell_2(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-2 .row-2");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-2 .row-2");
      }
    })
  };

  function renderDeal_Hotsell_3(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-2 .row-3");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-2 .row-3");
      }
    })
  };

  function renderDeal_Hotsell_4(data) {
    data.map(val => {
      if (val.sale) {
        $(`<div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-2 .row-4");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-2 .row-4");
      }
    })
  };

  //--------------------------------------//

  //--------------------------------------//
  function renderDeal_Trend_1(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
          <a href=""><img
              src=${val.image}
              alt=""></a>
          <div class="deal-left">
            <div class="deal-out flex a-center j-between">
              <ul class="flex a-center">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
              </ul>
              <i class="far fa-heart"></i>
            </div>
            <div class="deal-in">
            <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
              <div class="flex a-center">
                <p>$${val.price}.00</p>
                <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>`).appendTo("#end-3 .row-1");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
          <a href=""><img
              src=${val.image}
              alt=""></a>
          <div class="deal-left">
            <div class="deal-out flex a-center j-between">
              <ul class="flex a-center">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
              </ul>
              <i class="far fa-heart"></i>
            </div>
            <div class="deal-in">
            <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
              <div class="flex a-center">
                <span>$${val.price}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>`).appendTo("#end-3 .row-1");
      }
    })
  };

  function renderDeal_Trend_2(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
          <a href=""><img
              src=${val.image}
              alt=""></a>
          <div class="deal-left">
            <div class="deal-out flex a-center j-between">
              <ul class="flex a-center">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
              </ul>
              <i class="far fa-heart"></i>
            </div>
            <div class="deal-in">
            <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
              <div class="flex a-center">
                <p>$${val.price}.00</p>
                <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>`).appendTo("#end-3 .row-2");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
          <a href=""><img
              src=${val.image}
              alt=""></a>
          <div class="deal-left">
            <div class="deal-out flex a-center j-between">
              <ul class="flex a-center">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
              </ul>
              <i class="far fa-heart"></i>
            </div>
            <div class="deal-in">
            <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
              <div class="flex a-center">
                <span>$${val.price}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>`).appendTo("#end-3 .row-2");
      }
    })
  };

  function renderDeal_Trend_3(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
          <a href=""><img
              src=${val.image}
              alt=""></a>
          <div class="deal-left">
            <div class="deal-out flex a-center j-between">
              <ul class="flex a-center">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
              </ul>
              <i class="far fa-heart"></i>
            </div>
            <div class="deal-in">
            <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
              <div class="flex a-center">
                <p>$${val.price}.00</p>
                <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>`).appendTo("#end-3 .row-3");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
          <a href=""><img
              src=${val.image}
              alt=""></a>
          <div class="deal-left">
            <div class="deal-out flex a-center j-between">
              <ul class="flex a-center">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
              </ul>
              <i class="far fa-heart"></i>
            </div>
            <div class="deal-in">
            <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
              <div class="flex a-center">
                <span>$${val.price}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>`).appendTo("#end-3 .row-3");
      }
    })
  };

  function renderDeal_Trend_4(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
          <a href=""><img
              src=${val.image}
              alt=""></a>
          <div class="deal-left">
            <div class="deal-out flex a-center j-between">
              <ul class="flex a-center">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
              </ul>
              <i class="far fa-heart"></i>
            </div>
            <div class="deal-in">
            <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
              <div class="flex a-center">
                <p>$${val.price}.00</p>
                <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>`).appendTo("#end-3 .row-4");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
          <a href=""><img
              src=${val.image}
              alt=""></a>
          <div class="deal-left">
            <div class="deal-out flex a-center j-between">
              <ul class="flex a-center">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
              </ul>
              <i class="far fa-heart"></i>
            </div>
            <div class="deal-in">
            <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
              <div class="flex a-center">
                <span>$${val.price}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>`).appendTo("#end-3 .row-4");
      }
    })
  };

  //--------------------------------------//
  function renderDeal_Bestsell_1(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-4 .row-1");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-4 .row-1");
      }
    })
  };

  function renderDeal_Bestsell_2(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-4 .row-2");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-4 .row-2");
      }
    })
  };

  function renderDeal_Bestsell_3(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-4 .row-3");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new  item">
        <div  class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-4 .row-3");
      }
    })
  };

  function renderDeal_Bestsell_4(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id=${val.id} class="col-md-3 view-new  item">
        <div  class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <p>$${val.price}.00</p>
                  <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-4 .row-4");
      }
      else {
        $(` <div data-id=${val.id} class="col-md-3 view-new item">
        <div  class="deal-first flex">
            <a href=""><img
                src=${val.image}
                alt=""></a>
            <div class="deal-left">
              <div class="deal-out flex a-center j-between">
                <ul class="flex a-center">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <i class="far fa-heart"></i>
              </div>
              <div class="deal-in">
              <a class = "show" href= "http://localhost:3000/viewproduct.html"><h3>${val.name}</h3></a>
                <div class="flex a-center">
                  <span>$${val.price}.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).appendTo("#end-4 .row-4");
      }
    })
  };

  //Recently Add
  const productsOwl1 = $("#id-1").owlCarousel();
  const productsOwl2 = $("#id-2").owlCarousel();
  const productsOwl3 = $("#id-3").owlCarousel();

  const onsell_recently = list.filter((val) =>
    val.option.includes("R-On Sell")
    && val.class.includes("Recently Add")
  );
  const trend_recently = list.filter((val) =>
    val.option.includes("R-Trend")
    && val.class.includes("Recently Add")
  );
  const hotsell_recently = list.filter((val) =>
    val.option.includes("R-Hot Sell")
    && val.class.includes("Recently Add")
  );

  //--------------------------------------------//

  renderOwl("#id-1", productsOwl1, onsell_recently);
  renderOwl("#id-2", productsOwl2, trend_recently);
  renderOwl("#id-3", productsOwl3, hotsell_recently);

  //---------------------------------------------//
  function renderOwl(selector, owl, data) {
    const len = $(selector).find(".recently-1").length;
    // remove all items
    for (let i = 0; i < len; i++) {
      owl.trigger("remove.owl.carousel", [i]).trigger("refresh.owl.carousel");
    }
    // add new owl
    for (let i = 0; i < data.length; i++) {
      if (data[i].sale) {
        owl.owlCarousel(
          "add",
          ` <div data-id=${data[i].id} class="recently-1 item">
          <a href=""><img
              src=${data[i].image}
              alt=""></a>
              <a class = "show" href= " http://localhost:3000/viewproduct.html"><h3>${data[i].name}</h3></a>
          <div class="price">
          <p>$${data[i].price}.00</p>
          <span>$${Math.floor(data[i].price - (data[i].price * data[i].sale) / 100)}.00</span>
          </div>
        </div>`
        );
      }
      else {
        owl.owlCarousel(
          "add",
          ` <div data-id=${data[i].id} class="recently-1 item">
          <a href=""><img
              src=${data[i].image}
              alt=""></a>
          <a class = "show" href= " http://localhost:3000/viewproduct.html"><h3>${data[i].name}</h3></a>
          <div class="price">
          <span>$${data[i].price}.00</span>
          </div>
        </div>`
        );
      }
    }
    owl.trigger("refresh.owl.carousel");
  }

  const onsell_arrivals = list.filter((val) =>
    val.option.includes("A-On Sell")
    && val.class.includes("New Arrivals")
  );
  const trend_arrivals = list.filter((val) =>
    val.option.includes("A-Trend")
    && val.class.includes("New Arrivals")
  );
  const hotsell_arrivals = list.filter((val) =>
    val.option.includes("A-Hot Sell")
    && val.class.includes("New Arrivals")
  );
  const best_arrivals = list.filter((val) =>
    val.option.includes("A-Best Sell")
    && val.class.includes("New Arrivals")
  );
  renderArrivals_OnSell(onsell_arrivals);
  renderArrivals_HotSell(hotsell_arrivals);
  renderArrivals_Trend(trend_arrivals);
  renderArrivals_BestSell(best_arrivals);
  function renderArrivals_OnSell(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id = ${val.id} class="arrivals item">
        <div class="new-arrivals">
          <div class="star flex a-center j-between">
            <ul class="flex a-center">
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="far fa-star"></i></li>
            </ul>
            <i class="far fa-heart"></i>
          </div>
          <img src=${val.image}
            alt="">
          <div class="title">
            <p>${val.name_detail}</p>
            <a href="http://localhost:3000/viewproduct.html" class = "show"><h4>${val.name}</h4></a>
            <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
          </div>
          <div id="add" class="add-cart">
            <a>
              <i class="fas fa-shopping-basket"></i>
              Add to cart</a>
          </div>
        </div>

      </div>`).appendTo("#arrivals-1");
      }
      else {
        $(` <div data-id = ${val.id} class="arrivals item">
        <div class="new-arrivals">
          <div class="star flex a-center j-between">
            <ul class="flex a-center">
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="far fa-star"></i></li>
            </ul>
            <i class="far fa-heart"></i>
          </div>
          <img src=${val.image}
            alt="">
          <div class="title">
            <p>${val.name_detail}</p>
            <a href="http://localhost:3000/viewproduct.html" class = "show"><h4>${val.name}</h4></a>
            <span>$${val.price}.00</span>
          </div>
          <div id="add" class="add-cart">
            <a>
              <i class="fas fa-shopping-basket"></i>
              Add to cart</a>
          </div>
        </div>

      </div>`).appendTo("#arrivals-1");
      }
    })
  };
  function renderArrivals_HotSell(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id = ${val.id} class="arrivals item">
        <div class="new-arrivals">
          <div class="star flex a-center j-between">
            <ul class="flex a-center">
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="far fa-star"></i></li>
            </ul>
            <i class="far fa-heart"></i>
          </div>
          <img src=${val.image}
            alt="">
          <div class="title">
            <p>${val.name_detail}</p>
            <a href="http://localhost:3000/viewproduct.html" class = "show"><h4>${val.name}</h4></a>
            <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
          </div>
          <div id="add" class="add-cart">
            <a>
              <i class="fas fa-shopping-basket"></i>
              Add to cart</a>
          </div>
        </div>

      </div>`).appendTo("#arrivals-2");
      }
      else {
        $(` <div data-id = ${val.id} class="arrivals">
        <div class="new-arrivals">
          <div class="star flex a-center j-between">
            <ul class="flex a-center">
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="far fa-star"></i></li>
            </ul>
            <i class="far fa-heart"></i>
          </div>
          <img src=${val.image}
            alt="">
          <div class="title">
            <p>${val.name_detail}</p>
            <a href="http://localhost:3000/viewproduct.html" class = "show"><h4>${val.name}</h4></a>
            <span>$${val.price}.00</span>
          </div>
          <div id="add" class="add-cart">
            <a>
              <i class="fas fa-shopping-basket"></i>
              Add to cart</a>
          </div>
        </div>

      </div>`).appendTo("#arrivals-2");
      }
    })
  };
  function renderArrivals_Trend(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id = ${val.id} class="arrivals item">
        <div class="new-arrivals">
          <div class="star flex a-center j-between">
            <ul class="flex a-center">
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="far fa-star"></i></li>
            </ul>
            <i class="far fa-heart"></i>
          </div>
          <img src=${val.image}
            alt="">
          <div class="title">
            <p>${val.name_detail}</p>
            <a href="http://localhost:3000/viewproduct.html" class = "show"><h4>${val.name}</h4></a>
            <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
          </div>
          <div id="add" class="add-cart">
            <a>
              <i class="fas fa-shopping-basket"></i>
              Add to cart</a>
          </div>
        </div>

      </div>`).appendTo("#arrivals-3");
      }
      else {
        $(` <div data-id = ${val.id} class="arrivals item">
        <div class="new-arrivals">
          <div class="star flex a-center j-between">
            <ul class="flex a-center">
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="far fa-star"></i></li>
            </ul>
            <i class="far fa-heart"></i>
          </div>
          <img src=${val.image}
            alt="">
          <div class="title">
            <p>${val.name_detail}</p>
            <a href="http://localhost:3000/viewproduct.html" class = "show"><h4>${val.name}</h4></a>
            <span>$${val.price}.00</span>
          </div>
          <div id="add" class="add-cart">
            <a>
              <i class="fas fa-shopping-basket"></i>
              Add to cart</a>
          </div>
        </div>

      </div>`).appendTo("#arrivals-3");
      }
    })
  };
  function renderArrivals_BestSell(data) {
    data.map(val => {
      if (val.sale) {
        $(` <div data-id = ${val.id} class="arrivals item">
        <div class="new-arrivals">
          <div class="star flex a-center j-between">
            <ul class="flex a-center">
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="far fa-star"></i></li>
            </ul>
            <i class="far fa-heart"></i>
          </div>
          <img src=${val.image}
            alt="">
          <div class="title">
            <p>${val.name_detail}</p>
            <a href="http://localhost:3000/viewproduct.html" class = "show"><h4>${val.name}</h4></a>
            <span>$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
          </div>
          <div id="add" class="add-cart">
            <a>
              <i class="fas fa-shopping-basket"></i>
              Add to cart</a>
          </div>
        </div>

      </div>`).appendTo("#arrivals-4");
      }
      else {
        $(` <div data-id = ${val.id} class="arrivals item">
        <div class="new-arrivals">
          <div class="star flex a-center j-between">
            <ul class="flex a-center">
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="far fa-star"></i></li>
            </ul>
            <i class="far fa-heart"></i>
          </div>
          <img src=${val.image}
            alt="">
          <div class="title">
            <p>${val.name_detail}</p>
            <a href="http://localhost:3000/viewproduct.html" class = "show"><h4>${val.name}</h4></a>
            <span>$${val.price}.00</span>
          </div>
          <div id="add" class="add-cart">
            <a>
              <i class="fas fa-shopping-basket"></i>
              Add to cart</a>
          </div>
        </div>

      </div>`).appendTo("#arrivals-4");
      }
    })
  };


  $("body").on('click', '#add', function () {
    const currentId = $(this).parents('.arrivals').data('id')
    const currentItem = list.find(val => val.id === currentId);
    const id = cart.findIndex(val => val.id === currentId);

    if (id === -1) {
      currentItem.quantity = 1;
      currentItem.total = (Math.floor(currentItem.price - currentItem.price * currentItem.sale / 100)) * currentItem.quantity
      cart.push(currentItem)

    }
    else {
      cart[id].quantity += 1;
      cart[id].total = (Math.floor(cart[id].price - cart[id].price * cart[id].sale / 100)) * cart[id].quantity
    }
    const quantity_cart = cart.reduce((acc, val) => {
      return acc + val.quantity;
    }, 0);
    const total_cart = cart.reduce((acc, val) => {
      return acc + val.total;
    }, 0);
    //console.log(quantity_cart);
    $(".quantity-cart").text(`${quantity_cart}`)
    $(".total-cart-price").text(`$${total_cart}.00`)
    $(".products-on-cart").empty()
    //<span>Subtotal: </span>
    //<span class="total-cart-price"></span>
    if (!cart.length) {
      $(".none-product").css({
        'display': 'block'
      })
      $(".total-cart").css({
        'display': 'none'
      })

    }
    else {
      $(".button-view").css({
        'display': 'flex'
      })
      $(".none-product").css({
        'display': 'none'
      })
      $(".total-cart").css({
        'display': 'block'
      })
    }
    cart.map(val => {
      if (val.sale) {
        $(`<div data-id=${val.id} class="item flex a-center j-between">
      <img src=${val.image} alt="">
      <div class="info">
        <div class="name">
          <a class = "show" href = "http://localhost:3000/viewproduct.html">
          <span>${val.name}</span>
          </a>
        </div>
        <div class="price-content">
          <span class="quantity">${val.quantity} x</span>
          <span class="price">$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
        </div>
      </div>
      <button id="delete">X</button>
    </div>`).appendTo(".products-on-cart")
      }
      else {
        $(`<div data-id=${val.id} class="item flex a-center j-between">
      <img src=${val.image} alt="">
      <div class="info">
        <div class="name">
          <a class = "show" href = "http://localhost:3000/viewproduct.html">
          <span>${val.name}</span>
          </a>
        </div>
        <div class="price-content">
          <span class="quantity">${val.quantity} x</span>
          <span class="price">$${val.price}.00</span>
        </div>
      </div>
      <button id="delete">X</button>
    </div>`).appendTo(".products-on-cart")
      }
    })

    localStorage.setItem("cart", JSON.stringify(cart))

  })
  $("body").on("click", "#delete", function () {
    const removeId = $(this).parents(".item").data("id");
    //const currentItem = products.find((val) => val.id === cartId);
    const index = cart.findIndex(val => val.id === removeId);
    cart.splice(index, 1)
    const totalCart_Remove = cart.reduce((acc, val) => {
      return acc + Math.floor(val.total);
    }, 0);
    const quantity_remove = cart.reduce((acc, val) => {
      return acc + val.quantity;
    }, 0);
    $(".quantity-cart").text(`${quantity_remove}`)
    $(".total-cart-price").text(`${quantity_remove} `);
    $(".products-on-cart").empty();
    if (!cart.length) {
      $(".none-product").css('display', 'block')
      $(".total-cart").css({
        'display': 'none'
      })
      $(".button-view").css({
        'display': 'none'
      })
    }
    else {
      $(".total-cart").css({
        'display': 'block'
      })
      $(".button-view").css({
        'display': 'flex'
      })
      $(".total-cart-price").text(`$${totalCart_Remove} .00`)
      cart.map(val => {
        if (val.sale) {
          $(`<div data-id=${val.id} class="item flex a-center j-between">
            <img src=${val.image} alt="">
            <div class="info">
              <div class="name">
                <a class = "show" href = "http://localhost:3000/viewproduct.html">
                <span>${val.name}</span>
                </a>
              </div>
              <div class="price-content">
                <span class="quantity">${val.quantity} x</span>
                <span class="price">$${Math.floor(val.price - (val.price * val.sale) / 100)}.00</span>
              </div>
            </div>
            <button id="delete">X</button>
          </div>`).appendTo(".products-on-cart")
        }
        else {
          $(`<div data-id=${val.id} class="item flex a-center j-between">
            <img src=${val.image} alt="">
            <div class="info">
              <div class="name">
                <a class = "show" href = "http://localhost:3000/viewproduct.html">
                <span>${val.name}</span>
                </a>
              </div>
              <div class="price-content">
                <span class="quantity">${val.quantity} x</span>
                <span class="price">$${val.price}.00</span>
              </div>
            </div>
            <button id="delete">X</button>
          </div>`).appendTo(".products-on-cart")
        }
      })

    }
    localStorage.setItem("cart", JSON.stringify(cart))
  });
  $("body").on('click', '#cart_view', function () {
    $('.show-view-cart').css({
      'right': 0
    })


    $("#exit").click(function (e) {
      e.preventDefault();
      $('.show-view-cart').css({
        'right': '-30%'
      })
    });
  })

  let cart_show = [];
  $("body").on("click", "a.show", function () {
    const id = $(this).parents(".item").data("id");
    //localStorage.setItem(".idproducts",id);
    const item = list.find((val) => val.id === id);
    cart_show.push(item);
    JSON.stringify(item);
    console.log(cart_show);
    localStorage.setItem("cart_show", JSON.stringify(cart_show));

  });
});


