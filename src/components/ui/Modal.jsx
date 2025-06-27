import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment } from "react";

export function Modal({ Button, Cart }) {
  return (
    <Menu as={"div"} className="ml-auto">
      <div>
        <MenuButton as={Fragment}>{Button}</MenuButton>
        <MenuItems anchor={{ to: "bottom end", gap: "24px" }} className="rounded-md">
          {Cart}
        </MenuItems>
      </div>
    </Menu>
  );
}
