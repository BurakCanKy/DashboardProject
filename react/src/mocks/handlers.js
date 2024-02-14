import { http, HttpResponse } from 'msw'

var products = [
  {
    id: 1,
    name: "Arden Spencer",
    email: "Evangeline62@yahoo.com",
    phone: "(023) 708-6818 x4267",
    age: "28",
    post: "UX Researcher",
    joiningDate: "June 20, 2015",
    Salary: "$26253"
  },
  {
    id: 2,
    name: "Favian Maggio DDS",
    email: "Electa_Conroy@hotmail.com",
    phone: "1-076-628-3095 x7154",
    age: "28",
    post: "UX Researcher",
    joiningDate: "October 11, 2019",
    Salary: "$26253"
  },
  {
    id: 3,
    name: "Jacey Considine",
    email: "Garry23@yahoo.com",
    phone: "1-016-234-2482",
    age: "28",
    post: "UX Researcher",
    joiningDate: "January 2, 2016",
    Salary: "$6162"
  },
  {
    id: 4,
    name: "Kolby Torphy II",
    email: "Phyllis75@hotmail.com",
    phone: "1-345-656-4163 x373",
    age: "28",
    post: "UX Researcher",
    joiningDate: "August 9, 2017",
    Salary: "$4022"
  },
  {
    id: 5,
    name: "Mattie Daugherty",
    email: "Jessika.Conroy@yahoo.com",
    phone: "721-969-9795 x09197",
    age: "28",
    post: "UX Researcher",
    joiningDate: "December 24, 2016",
    Salary: "$11588"
  },
  {
    id: 6,
    name: "Timothy Littel",
    email: "Nannie_Kling49@hotmail.com",
    phone: "1-251-141-2444 x275",
    age: "28",
    post: "UX Researcher",
    joiningDate: "February 8, 2019",
    Salary: "$14283"
  },
  {
    id: 7,
    name: "Karli Braun",
    email: "Ruthe_Gleichner@gmail.com",
    phone: "697.704.7326",
    age: "28",
    post: "UX Researcher",
    joiningDate: "October 25, 2016",
    Salary: "$13329"
  }
];

export const handlers = [

  http.get('/products', () => {
    return HttpResponse.json(products)

  }),

  http.post('/addUser', async (req, res) => {
    try {
      const userData = req.body;
      console.log(userData);
      if (!userData) {
        throw new Error('Invalid request: no user data provided');
      }

      const newUserId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
      userData.id = newUserId;

      products.push(userData);
      console.log(`Added new user: ${JSON.stringify(userData)}`);

      return HttpResponse.json(userData, { status: 201 });
    } catch (error) {
      console.error(`Error adding new user: ${error.message}`);
      return HttpResponse.error('Error while adding customer', 500);
    }
  }),

  http.get('/delete/:id', async (req, res, ctx) => {
    const { id } = req.params;

    try {
      const deletedIndex = products.findIndex(product => product.id === parseInt(id));
      if (deletedIndex === -1) {
        return res(ctx.status(404), ctx.json({ error: 'Product not found' }));
      }

      const deletedProduct = products.splice(deletedIndex, 1)[0];

      console.log(`Deleted product: ${JSON.stringify(deletedProduct)}`);

      return res(ctx.json(products));
    } catch (error) {
      console.error(`Error deleting product: ${error}`);
      return res(ctx.status(500), ctx.json({ error: 'Internal server error' }));
    }
  })
]