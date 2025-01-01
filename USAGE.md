# DesignLayout Component Usage

The `DesignLayout` component provides a layout with a fixed header, collapsible sidebar, and main content area. This guide explains how to use the component in your project.

## Importing the Component

First, import the `DesignLayout` component and the necessary types.

```tsx
import { DesignLayout, iMenuItems } from "./path/to/designlayout";
```

## Defining Menu Items

Define the menu items that you want to display in the sidebar. Each menu item should have a `name`, `link`, and `icon`.

```tsx
import { Home, Settings } from "lucide-react";

const menuItems: iMenuItems[] = [
  {
    name: "Home",
    link: "/home",
    icon: Home,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: Settings,
  },
];
```

## Using the Component

Wrap your main content with the `DesignLayout` component and pass the `menuItems` as a prop.

```tsx
const App = () => {
  return (
    <DesignLayout MenuItems={menuItems}>
      <div>
        <h2>Welcome to the App</h2>
        <p>This is the main content area.</p>
      </div>
    </DesignLayout>
  );
};

export default App;
```

## Props

### `ILayoutProps`

- `children` (optional): The children nodes to be rendered within the layout.
- `MenuItems`: Array of menu items to be displayed in the sidebar.

### `iMenuItems`

- `name`: The name of the menu item.
- `link`: The link URL for the menu item.
- `icon`: The icon component for the menu item.

## Example

Here is a complete example of how to use the `DesignLayout` component:

```tsx
import React from "react";
import { DesignLayout, iMenuItems } from "./path/to/designlayout";
import { Home, Settings } from "lucide-react";

const menuItems: iMenuItems[] = [
  {
    name: "Home",
    link: "/home",
    icon: Home,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: Settings,
  },
];

const App = () => {
  return (
    <DesignLayout MenuItems={menuItems}>
      <div>
        <h2>Welcome to the App</h2>
        <p>This is the main content area.</p>
      </div>
    </DesignLayout>
  );
};

export default App;
```
