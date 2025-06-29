## Disclaimer

> This README has been revised with the help of AI to improve clarity, structure, and tone.
> If you're interested in the original, unedited version, you can find it in the file `SRC_README.md`.

---

## Routing

All route definitions are in `src/routes/main`. The structure loosely follows a Next.js-inspired layout grouping, where routes are organized under shared layouts. This is not a technical requirement but helps keep the project organized and scalable.

### Shared Layout

The shared layout includes global UI elements such as the `<Navbar />`, which is rendered across all routes. It also includes a fallback error state using the `ErrorPage` component to improve user experience in case of failures.

---

## Pages

### Home Page

The home page acts as a simple welcome screen and the main entry point to the application. Its goal is to help users quickly find and navigate to key features.

---

### Listing Page

This page renders a list of products using mock data, structured in a normalized format. While the product data may not match the images exactly, the structure reflects a realistic API response.

#### Rendering Flow

1. Product data is passed to `<ProductList />`
2. `<ProductList />` renders multiple `<ProductCard />` components

Each `ProductCard` includes:

- An image
- A title
- A formatted price
- A tooltip trigger (`<TooltipTrigger />`) that displays a `<Tooltip />` on hover

#### Tooltip Behavior

Tooltip visibility is managed using:

```js
const [showTooltip, setShowTooltip] = useState(false);
```

Tooltips are positioned to the right of the card by default. On smaller screens, they may overflow. To handle this, we check proximity to the right edge:

```js
const [isLeft, setIsLeft] = useState(false);
```

If the card is too close to the edge (less than 320px available), the tooltip is displayed on the left instead.

> Note: Tooltip behavior for `mousedown` and `mouseleave` events still needs to be documented.

#### Price Formatting

Prices are formatted using a utility function:

```js
function formatPrice({ locale = "en-GB", style = "currency", currency = "GBP", decimals = 0, price }) {}
```

This ensures consistent price formatting and supports internationalization, including currency symbols for a multi-region setup.

#### Add to Cart

Each `ProductCard` includes a button that adds the item to the cart via:

```js
function addToCart(item) {}
```

This function checks if the item already exists in the cart. If so, it increments the count; otherwise, it adds the item with `count: 1`.

---

### Product Page

The Product Page displays detailed information about a single product.

To identify which product to show, the page uses the `useParams()` hook to extract the `productId` from the URL. In this demo, the product data is local, so the page simply loops through that dataset to find the matching product.

In a real-world scenario with a backend, the `productId` would be used to fetch product details from an API.

This dynamic behavior is enabled by defining the route like so:

```js
{ path: ":productId", Component: ProductPage }
```

This allows the router to interpret the `productId` as a route parameter and enables usage of `useParams()` inside the component.

---

### Checkout Page

This page summarizes selected cart items and serves as the final step before completing an order.

Users can:

- Increase quantity using the existing `addToCart(item)` function
- Decrease quantity using a custom `removeFromCart(item)` function
- Remove items completely using the `destroyCartItem(item)` function

#### destroyCartItem

The `destroyCartItem(item)` function removes an item from the cart entirely. It filters the current `cartItems` array and returns a new array excluding the item with a matching ID. This ensures the targeted item is removed cleanly without mutating the original state.

#### removeFromCart

The `removeFromCart(item)` function handles decreasing the quantity of a cart item and removing it if its count drops to zero.

Here's how it works:

1. The function loops through the `cartItems` array.
2. For each item:

   - If its ID **does not match**, it is returned as-is.
   - If its ID **does match**:

     - If `count > 1`, it is returned with `count` reduced by 1.
     - If `count` is 1, it is removed by returning `null`.

3. The final array is filtered to remove `null` values, leaving only valid cart items.

This logic ensures a clean and immutable update of the cart state.

The checkout view displays:

- Current quantity
- Price per unit
- Total order price

The "Checkout" button is disabled, as this marks the end of the flow for the demo.

---

### Shopping Cart

The shopping cart is implemented as a modal and rendered via a React Portal to overlay the main content cleanly.

#### Components Involved

- `<CartToggle />` — toggles cart visibility
- `<MiniCart />` — displays cart contents
- `<Backdrop />` — provides an overlay over clickable surface and allows outside-click detection

#### Outside Click Handling

Once the cart is open, the user has only three meaningful click targets within the document:

- **The cart itself** – clicking inside the cart keeps it open.
- **The cart toggle button** – toggles the cart’s visibility (open or close).
- **The backdrop** – clicking the backdrop closes the cart.

This is implemented using a `useEffect` hook that adds a `window` click listener. The logic identifies which element was clicked and acts accordingly. This modal strategy is commonly used to improve user experience when working with overlays by allowing users to easily dismiss them with a click outside.

---

## Global State

Cart state is managed in `src/store/CartContext.jsx` using React's Context API. This avoids prop drilling and keeps shared logic centralized.

### Key State Variables

1. **Cart Items**

   ```js
   const [cartItems, setCartItems] = useState([]);
   ```

   **Note:** In this demo app, each cart operation function (e.g., `addToCart`, `removeFromCart`, `destroyCartItem`) receives the **entire item object** rather than just the item's ID. This simplifies the logic since no data fetching is involved.
   In a production app with a real backend, you would likely pass only the item's ID and fetch the rest of the necessary data as needed.

2. **Cart Visibility**

   ```js
   const [showCart, setIsShowCart] = useState(false);
   ```

   - Controls visibility of the modal cart

3. **Anchor Coordinates**

   ```js
   const [anchorCoordinates, setAnchorCoordinates] = useState({});
   ```

   - Tracks position of the cart toggle button
   - Used to anchor the modal cart via portal rendering
   - Coordinates are updated using `getAnchorCoordinates()`

#### Layout Handling

`useLayoutEffect` is used to recalculate `getAnchorCoordinates()` on window resize, ensuring accurate positioning even when padding or layout changes. It runs earlier than `useEffect`, making it more suitable for layout-related adjustments.

#### Helpers

- A custom `useCart()` hook provides access to cart context across the app
- Toast messages are shown when items are added to the cart for better feedback

---

## Components

All components are located under `src/components`.

### UI Components

Reusable components like buttons and tooltips live in:

```
src/components/ui
```

These components are generic and designed to be used throughout the app.

### Feature-Specific Components

Components tied to specific features or pages are colocated with their respective feature folders. This improves modularity and maintainability as the app grows.

---

## Utility Functions

Helper functions are stored in:

```
src/util
```

These keep components clean and promote code reuse.

### Noteworthy Utility: `cn.js`

This helper merges Tailwind class names and resolves conditional conflicts. It simplifies dynamic styling and keeps class lists more maintainable.

---

## Colors

List of primary colors used in the application:

- **Navbar Background:** `#233239`
- **Navbar Text:** `#FFFFFF`
- **Button Background:** `#E60000`
- **Button Text:** `#FFFFFF`
- **Card Background:** `#FCFCFC`
- **Primary Text:** `#1D1D39`
- **Secondary Text:** `#FFFFFF`
- **Tooltip Background:** `#FDF1D7`
- **Tooltip Muted Text:** `#756C67`
