import "./dropdownMenu.scss";

interface IMenuItem {
  name: string;
  url: string;
}

export default function DropdownMenu({
  menuItems,
}: {
  menuItems: IMenuItem[];
}) {
  return (
    <div className="dropbox-menu">
      <ul className="dropbox-list">
        {menuItems.map((item) => (
          <li key={item.url} className="dropbox-item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
