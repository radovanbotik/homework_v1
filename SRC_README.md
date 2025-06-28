## Routing

The page routes are located in src/routes/main this structure is adopted from NextJS routing where routes can be grouped to share common layout, it has no functional reason in this application however i like to strcture my routes this way
Shared Layout renders the `html <Navbar/> ` which is shared between all routes

### Home Page

Is supposed to welcome user includes and allow user to navigate further through the app

### Listing Page

Is supposed to render the products. I created product dummy data which I normalized (it is different from the pictures but I feel like in fully fleshed project data would be structured in similiar way). Product data is fetched and passed to `html <ProductList/>`. `html <ProductList/>` renders `html <ProductCard/>`.
Each `html <ProductCard/>` has a tooltip button `html <TooltipButton/>` which when is hovered renders `html <TooltipCard/>`
`html const [showTooltip, setShowTooltip] = useState(false) ` was set up to track whether tooltip is open or closed.
The tooltip is by default always rendered next to the card that renders it, however this becomes problem on smaller screens where the far-right tooltip will overflow the window.
`html const [isLeft, setIsLeft] = useState(false);` was set up to track distance between the right edge of the screen and the card. If this distance becomes less than the width of my tooltip card (320px), we set a flag (setIsLeft).
Then we use conditional rendering to swap how is the tooltip rendered from right left;

//note to self: add MOUSEDOWN and MOUSELEAVE explanation

`html <ProductCard/>` also renderes image, title and price of the product. to render the price I created `html function formatPrice ({ locale = "en-GB", style = "currency", currency = "GBP", decimals = 0, price }) {}`
which accepts ad object that can be configured. the function will render the price in specific locale format and importantly will also render the currency symbol. then in fully fleshed application we could just pass it users locale along with other attributes to programatically display correct currency for given country

Lastly `html <ProductCard/>` renders a button which when clicked will add the selected item to the cart via `html function addToCart(item){} `

### Checkout page

Is supposed to rendered the overall order made by user.

### Shopping Cart

I decided that best UX would be to make `html ShoppingCart ` a modal.
This is achieved via React Portal. This allows to render a `html <ShoppingButton/>` which can be placed in navigation while it also renders the `html <ShoppingCard />` and `html  <Backdrop />`

Modal allows for better UX in such way that when user clicks outside the cart showCart state is updated closing the cart.
to allow for this I had to add `html  <Backdrop />` and add `html <style>pointer-events-none</style>`
this allow to track what element is currently being clicked on. it leaves us with only 3 choices:

1.  `html <ShoppingButton/>` here I added id to make sure I dont close the modal when clicking
2.  `html <Backdrop/>`
3.  `html <ShoppingCard/>` here I added id to make sure I dont close the modal when clicking and stopped events from propagating

I used useEffect to listen for clicks on the window and perform a simple check. if the clicked element has id of cart or shopping button I ignore the click (user is interacting with cart) else it means that user is clicking outside the cart and therefore I close the cart

### Global State

Global state is placed within src/store/CartContext.jsx file
I decided to introduce a global state via react context API as multiple components require information regarding the cart.
This way I can avoid prop drilling and lifting the state up, it also helps to decluter my components.

In this file I set up 3 different states:

1.  `html const [cartItems, setCartItems] = useState([]) `
    Tracks the items in the cart. Items are added to the cart via `html function addToCart(item){} `.
    This function contains the setter `html setCartItems` to which we pass the item to be added to cart.
    In the setter function we first check if the passed item already exists in the cart(cartItems).
    If the item exists in cartItems, cartItems are looped over and for each cartItem we check if it's id is matching the id of the item we are adding. - If id of currentl looped item is matching the id of the item we are adding we spread the object to preserve the data and just increase the count by 1 - If it's currently looped item is not matching the id of the item it means it is just another item in the cart and we simply return it as it is.
    If the item doesn't exist in the cartItem, we simply spread the cartItems to preserve items we already have in cart and then add the new item with count 1

Cart itself is opened via `html  function toggleCart(e)` function which contains the setter function which simply updates the state and sets opposite value to the previous value

    ** I implemented this strategy to keep the state immutable **
    **BONUS: I added toast to improve UX experience**

2.  `html const [showCart, setIsShowCart] = useState(false);`
    Tracks whether the cart is open or not. This is imporatnt for the `html <ShoppingCart/>` component which works as modal which renders the cart

3.  `html const [anchorCoordinates, setAnchorCoordinates] = useState({});`
    Tracks the coordinates of `html <ShoppingButton>` component. This is important because I used React portal to render `html <ShoppingCard>`. Since the portal is rendered out of my root DOM, I need to anchor it to the button that opens it.
    Coordinates are retrieved using `html getAnchorCoordinates(){}` function which gets the position of the anchoring button and updates the state

The file also contains useLayoutEffect (I think regular useEffect would do just fine, however I want to be sure that everything is rendered before I start calculating data) which is there to run `html getAnchorCoordinates(){}` function when the window resizes.
The layout is responsive and paddings change on different screens which if untreated would cause shifts on how is `html <ShoppingCart>` positioned.

Lastly file contains `html useCart` hook to simplify the usage on the context.

### Components

The components are placed in src/components folder.
The general components that I tend to reuse across the application are place within src/components/ui folder
The components which are specific to the route they are placed in our feature where they are used

### Utility functions

The utility functions are placed in src/util folder.
These are general helping functions placed in their own files to make everything more modular and less cluttered.

I would like to mention cn.js function which simply helps to resolve specificity and merging conflicts of my Tailwind classes

## COLORS

- Navbar Background Color: #233239
- Navbar Text Color: #FFFFFF

- Button Background Color: #E60000
- Button Text Color: #FFFFFF

- Card Background Color: #FCFCFC

- Text Primary: #1D1D39
- Text Secondary: #FFFFFF

- Tooltip Background Color: #FDF1D7
- Tooltip Muted Text Color: #756C67
