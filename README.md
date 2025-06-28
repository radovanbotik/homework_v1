## Disclaimer

> This README has been revised with the help of AI to improve clarity, structure, and tone.
> If you're interested in the original unedited version, you can find it in the file `SRC_README.md`.

---

## Routing

All route definitions are in `src/routes/main`. I’ve loosely followed a Next.js-inspired structure that groups routes under shared layouts. This isn’t a technical requirement for the app, but I find it useful for keeping things organized and easier to scale.

### Shared Layout

The shared layout includes global UI elements like the `html <Navbar />`, which is rendered on all routes. I’ve also added `ErrorPage` and `LoadingPage` components to provide fallback and loading states, improving overall user experience.

---

## Pages

### Home Page

This is a basic welcome screen and serves as the entry point for users to explore the app. Its main goal is to help users quickly find and navigate to the core features.

---

### Listing Page

This page renders a list of products using mock data, which is structured in a normalized way. Even though it doesn't match the product images exactly, the structure reflects how a real backend might deliver data.

#### Rendering flow:

1. Product data is passed to `html <ProductList />`.
2. `html <ProductList />` renders multiple `html <ProductCard />` components.

Each `ProductCard` includes:

- An image
- A title
- A formatted price
- A tooltip button (`html <TooltipButton />`) that displays `html <TooltipCard />` when hovered

#### Tooltip behavior:

Tooltip visibility is handled using:

```js
const [showTooltip, setShowTooltip] = useState(false);
```

Tooltips are positioned next to the card by default, but on smaller screens they may overflow off the right edge. To fix this, I track proximity to the right edge using:

```js
const [isLeft, setIsLeft] = useState(false);
```

If the card is too close to the right edge (less than the tooltip width of 320px), the tooltip gets rendered on the left instead.

> _Note to self: still need to add handling explanation for `mousedown` and `mouseleave`._

#### Price formatting:

There’s a utility function to format prices consistently across the app:

```js
function formatPrice({ locale = "en-GB", style = "currency", currency = "GBP", decimals = 0, price }) {}
```

It supports international formats and includes the currency symbol, which will be useful in a multi-region setup.

#### Add to cart:

Each `ProductCard` has a button that adds the item to the cart via:

```js
function addToCart(item) {}
```

This function checks if the item is already in the cart and either increments the count or adds it with `count: 1`.

---

### Checkout Page

This page is a simple summary of the user's selected items and is meant to be the final step before completing the order.

---

### Shopping Cart

To keep the user experience smooth, the cart is built as a modal. It uses a **React Portal** so that it’s rendered outside the main DOM structure, which allows it to overlay everything else cleanly.

#### Components involved:

- `html <CartToggle />` — opens the cart
- `html <MiniCart />` — displays cart contents
- `html <Backdrop />` — dims the background and allows for outside-click detection

#### Handling outside clicks:

Cart visibility is controlled using:

```js
const [showCart, setIsShowCart] = useState(false);
```

A `useEffect` listener on `window` watches for clicks. If the user clicks on anything **except** the cart, the backdrop, or the button, the cart closes.

- Components like `<MiniCart />` and `<CartToggle />` have IDs to help detect valid clicks.
- `pointer-events: none` and `stopPropagation()` are used to help control event flow and prevent unwanted closing.

---

## Global State

Global cart state is managed in `src/store/CartContext.jsx` using React’s Context API. This helps avoid prop drilling and keeps shared logic centralized and reusable.

### Key state variables:

1. **Cart Items**

   ```js
   const [cartItems, setCartItems] = useState([]);
   ```

   - Items are added with `addToCart(item)`
   - If the item already exists, its count is incremented
   - Otherwise, a new item is added with `count: 1`
   - Uses immutable state updates with spread syntax

2. **Cart Visibility**

   ```js
   const [showCart, setIsShowCart] = useState(false);
   ```

   - Controls whether the cart modal is open

3. **Anchor Coordinates**

   ```js
   const [anchorCoordinates, setAnchorCoordinates] = useState({});
   ```

   - Tracks the position of the cart open button
   - Needed because the cart modal is rendered via portal, so we manually anchor it using coordinates
   - Uses `getAnchorCoordinates()` to read the button’s DOM bounding box

#### Layout handling:

I used `useLayoutEffect` to run `getAnchorCoordinates()` when the window resizes. It ensures the cart is always positioned correctly, even as paddings or layouts shift across screen sizes. I could have used `useEffect`, but `useLayoutEffect` runs earlier and ensures layout calculations happen after DOM painting.

#### Extra helpers:

- A custom `useCart()` hook is included to make it easy to consume context throughout the app.
- Toast messages are shown when items are added to the cart for better UX feedback.

---

## Components

All components live under `src/components`.

### UI Components

Reusable, app-wide components (like buttons, tooltips, etc.) are stored in:

```
src/components/ui
```

These are built to be flexible and used anywhere.

### Feature-Specific Components

Components that only relate to a specific route or feature are colocated with that feature. This keeps the structure modular and maintainable as the project grows.

---

## Utility Functions

Helper functions live in:

```
src/util
```

These functions keep things modular and reduce clutter in components.

### Noteworthy Utility: `cn.js`

This is a simple helper that merges Tailwind class names and resolves any conditional conflicts. It’s super helpful when dealing with dynamic styling and helps keep class lists clean and reliable.

---

## Colors

Here’s the full list of colors used across the application:

- **Navbar Background Color:** `#233239`

- **Navbar Text Color:** `#FFFFFF`

- **Button Background Color:** `#E60000`

- **Button Text Color:** `#FFFFFF`

- **Card Background Color:** `#FCFCFC`

- **Text Primary:** `#1D1D39`

- **Text Secondary:** `#FFFFFF`

- **Tooltip Background Color:** `#FDF1D7`

- **Tooltip Muted Text Color:** `#756C67`
