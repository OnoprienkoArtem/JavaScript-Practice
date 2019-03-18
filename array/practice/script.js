const arr1 = [
    {
        icon: "http://bd-dev.com/uploads/payment/ae7c237b8427ca79bffd01e4c47651a7.png",
        id: 2,
        name: "yandex"
    },
    {
        icon: "http://bd-dev.com/uploads/payment/226c76305cdb0450f4bd79cb71a9afa9.png",
        id: 3,
        name: "Web Money"
    },
    {
        icon: "http://bd-dev.com/uploads/payment/2211262bdbb2a76cc3b06f6c0ee05d39.png",
        id: 1,
        name: "visa"
    }
];


const arr2 = [
    {
        name: { id: 1, name: "visa" },
        status: "ACCEPTED" 
    },
    {
        name: { id: 2, name: "yandex" },
        status: "ACCEPTED"
    },
    {
        name: { id: 1, name: "visa" },
        status: "UNDER_REVIEW"
    },
    {
        name: { id: 2, name: "yandex" },
        status: "UNDER_REVIEW"
    },
    {
        name: { id: 3, name: "Web Money" },
        status: "UNDER_REVIEW"
    }
];


			



const arr3 = [
    {
        icon: "ae7c237b8427ca79bffd01e4c47651a7.png",
        id: 2,
        name: "yandex",
        status: ["ACCEPTED", "UNDER_REVIEW"]
    },
    {
        icon: "226c76305cdb0450f4bd79cb71a9afa9.png",
        id: 3,
        name: "Web Money",
        status: ["UNDER_REVIEW"]
    },
    {
        icon: "2211262bdbb2a76cc3b06f6c0ee05d39.png",
        id: 1,
        name: "visa",
        status: ["UNDER_REVIEW", "ACCEPTED"]
    }
];


