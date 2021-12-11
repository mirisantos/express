const express = require("express");

const rutas = require("./api/routes");
const path = require("path");

const app = express();

const pathFolderPublic = path.resolve(__dirname,"public")

console.log(pathFolderPublic);
console.log("Datos");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(pathFolderPublic));
//app.use("/api/product", product);
app.use("/api", rutas);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
