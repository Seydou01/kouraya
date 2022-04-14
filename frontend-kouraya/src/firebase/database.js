import { database } from ".";

// just a test
database.collection("villages").doc("bamako").get().then((doc) => {
    console.log(doc.data())
  });

// TODO: Create functions
// createProduct
// readProduct
// updateProduct
// deleteProduct
