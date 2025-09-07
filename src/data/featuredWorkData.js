// This grabs all images in the folder that end in .jpeg, .jpg, .png
// { eager: true } means they are imported immediately (no async)
const imageImports = import.meta.glob(
    "../assets/images/featured/*.{jpeg,jpg,png}",
    { eager: true }
);

// Convert the object from global into an array of URLs
const imagePaths = Object.values(imageImports).map((img) => img.default);

const featuredWork = [
    { id: 1, img: imagePaths[0], name: "m2 winery" },
    { id: 2, img: imagePaths[1], name: "oak farm vineyards" },
    { id: 3, img: imagePaths[2], name: "redding community center" },
    { id: 4, img: imagePaths[3], name: "doors plus" },
    { id: 5, img: imagePaths[4], name: "road and highway" },
    { id: 6, img: imagePaths[5], name: "7th streeth village" },
    { id: 7, img: imagePaths[6], name: "ozara resort hotel" },
    { id: 8, img: imagePaths[7], name: "wow museum" },
    { id: 9, img: imagePaths[8], name: "lodi bowling" },
];

export default featuredWork;
