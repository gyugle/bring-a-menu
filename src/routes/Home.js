import { useEffect, useState } from 'react';
import json from '../data/test.json';
function Home() {
  const [menus, setMenus] = useState();
  const [search, setSearch] = useState('');

  // GET DATA
  useEffect(() => {
    setMenus(json.menus);
  }, []);

  return (
    <div>
      <h2>BRING A MENU</h2>
      <form>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Search..."
        />
        <button>SEARCH</button>
      </form>

      {/* Error about delay, be handle async logic.*/}

      <ul>
        {menus
          .filter((menu) => {
            if (search === '') {
              return menu;
            } else if (menu.name.toLowerCase().includes(search.toLowerCase())) {
              return menu;
            }
          })
          .map((menu, key) => {
            return (
              <div key={key}>
                <li>{menu.name}</li>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
export default Home;
