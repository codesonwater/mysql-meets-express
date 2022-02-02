// follow MYSQL Steps outliined https://www.npmjs.com/package/mysql2
// Darie's sample data and steps https://github.com/dariedorlus/mysql-js-practice/blob/main/README.md

// ################### IMPORT FRAMEWORK ###################
const mysql = require("mysql2");

// ################### CONNECT TO DB ###################
//create credentials file   const connection = mysql.createConnection({})

// ################### CREATE A QUERY ###################
// const query = "SELECT * FROM Products";

// ################### EXECUTE THE QUERY ###################
// connection.query(query, (err, results, fields) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(results);
// });

// ################### TURN STEPS 1 & 2 INTO A FUNCTION ###################
const getAllProducts = async () => {
  const query = "SELECT * FROM Products";
  const [results, fields] = await connection.promise().query(query);
  
  console.log(results);
  return results;
};

// ################### INSERT DATA INTO THE TABLE ###################
const createProduct = async (product) => {
   const insertQuery =  `INSERT INTO Products(Description, SKU, UserId)
   VALUES ('${product.description}', '${product.sku}', ${product.userId})`
   const [results, fields] = await connection.promise().query(insertQuery)

   console.log(results);
   return results;
};

//getAllProducts()
// ################### CREATE AN OBJECT ###################
createProduct({
    description: "Jeremiahs new Product",
    sku: "Jeremiah1234",
    userId: 1
});



// ################### CLOSE THE CONNECTION ###################
connection.end();

