# Basic Inventory Mangament System

<h1>Readme for Backend Endpoints</h1>
<p>This readme provides an overview of the backend endpoints defined in the code. The endpoints are defined using the Express.js framework for Node.js.</p>

<h2>Endpoints</h2>
<p>Here are the endpoints defined in the code, along with a brief description of their functionality:</p>

<ul>
  <li>
    <strong>GET /getOrders</strong><br>
    This endpoint returns a list of all orders in the system.
  </li>
  <li>
    <strong>GET /inventory</strong><br>
    This endpoint returns a list of all items in the inventory.
  </li>
  <li>
    <strong>GET /customerDetails</strong><br>
    This endpoint returns a list of all customers in the system.
  </li>
  <li>
    <strong>GET /inventory/:inventoryType</strong><br>
    This endpoint returns a list of all items of a specific type in the inventory. The type is specified as a path parameter in the URL.
  </li>
  <li>
    <strong>POST /createOrders</strong><br>
    This endpoint creates a new order in the system. The order details are passed in the request body in JSON format.
  </li>
  <li>
    <strong>POST /createCustomer</strong><br>
    This endpoint creates a new customer in the system. The customer details are passed in the request body in JSON format.
  </li>
  <li>
    <strong>POST /createInventory</strong><br>
    This endpoint creates a new item in the inventory. The item details are passed in the request body in JSON format.
  </li>
  <li>
    <strong>PUT /:itemName</strong><br>
    This endpoint updates the available quantity of an item in the inventory. The item name is specified as a path parameter in the URL, and the updated quantity is passed in the request body in JSON format.
  </li>
</ul>

<h2>Conclusion</h2>
<p>These endpoints provide the core functionality of the backend system, allowing you to manage orders, customers, and inventory. Use the endpoint descriptions and URLs to interact with the system and build your frontend.</p>
