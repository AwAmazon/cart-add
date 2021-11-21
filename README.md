# **Stimulating a MART**
# Easyecom Assignment


## Note
1. Clone the repository
    ```
    git clone https://github.com/shivam101gaur/easyecom-assignment.git
    ```
2. Do not install any third party packages
3. install npm packages


   ```
   npm i
   ```
4. Start the Data base server at [Port : 3000](http://localhost:3000/)
    ```
    npm run dbserver
    ```
5. DB server will start at [Port : 3000](http://localhost:3000/)
    ```
    http://localhost:3000/
    ```
## TODO 

6. Consume the [items](http://localhost:3000/items) API in  your code for CRUD operations
    ```
    http://localhost:3000/items
    ```

***NOTE :*** Keep the components' relation strucutre same.

**Parent Component** :  APP Component |
**Child Components** : Mart Component , Cart Component

## Functionalites Required 

7. View Mart Items
    - Display all the items in Mart Component using Items API.
   - Show name and price of item in the card.
8. Move items to cart 
   - remove item from mart component
   - add it to cart component
   - add items to bill list and calculate the total bill 
9. Remove items from cart 
   - remove item from cart component
   - put it back in mart component
10. Buy/Checkout items 
    - If sufficient amount in wallet,only then allow checkout.
    - clear the cart
    - Delete the bought item from items API/Database
    - Deduct total bill amount from wallet
    


