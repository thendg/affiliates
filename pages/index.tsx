import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  //logic for theme changer
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const dropdown = document.querySelector('#dropdown');

  useEffect(() => {
    setMounted(true);
  }, []);
  //theme changer
  function renderThemeChanger() {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <div
          title="Light mode"
          className="flex cursor-pointer items-center "
          onClick={() => setTheme('light')}
        >
          {/* sun icon using path tags made of many circles */}
          <svg className="w-10 h-10" viewBox="0 0 110 110">
            <path
              d=" 
            m 35, 70
            a 20,20 0 1,1 40,0
            a 20,20 0 1,1 -40,0"
              fill="#FFFFFF"
            />
            <path
              d=" 
            m 35, 40
            a 3,3 0 1,1 6,0
            a 3,3 0 1,1 -6,0"
              fill="#FFFFFF"
            />
            <path
              d=" 
            m 65, 40
            a 3,3 0 1,1 6,0
            a 3,3 0 1,1 -6,0"
              fill="#FFFFFF"
            />
            <path
              d=" 
          m 85, 60
          a 3,3 0 1,1 6,0
          a 3,3 0 1,1 -6,0"
              fill="#FFFFFF"
            />
            <path
              d=" 
          m 80, 90
          a 3,3 0 1,1 6,0
          a 3,3 0 1,1 -6,0"
              fill="#FFFFFF"
            />
            <path
              d=" 
          m 50, 100
          a 3,3 0 1,1 6,0
          a 3,3 0 1,1 -6,0"
              fill="#FFFFFF"
            />
            <path
              d=" 
          m 25, 95
          a 3,3 0 1,1 6,0
          a 3,3 0 1,1 -6,0"
              fill="#FFFFFF"
            />
            <path
              d=" 
          m 20, 65
          a 3,3 0 1,1 6,0
          a 3,3 0 1,1 -6,0"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      );
    } else {
      return (
        <div
          title="Dark mode"
          className="group cursor-pointer"
          onClick={() => setTheme('dark')}
        >
          {/* moon icon using path tags made of 2 circles */}
          <svg className="w-10 h-10" viewBox="0 0 110 110">
            <path
              d=" 
            m 35, 70
            a 30,30 0 1,1 60,0
            a 30,30 0 1,1 -60,0"
              fill="#000000"
            />
            <path
              d=" 
            m 50, 60
            a 10,10 0 1,1 60,0
            a 10,10 0 1,1 -60,0"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      );
    }
  }

  return (
    <div className="flex items-center justify-center h-fit pt-5">
      <div>
        <div className="flex items-center justify-center">
          {renderThemeChanger()}
        </div>
        <div>
          <div className="flex text-3xl font-montserrat pt-5">
            <div>
              <div className="font-bold">KCL Blockchain</div>
              <div className="flex justify-center font-normal ">Affiliates</div>
              <div className="flex justify-center font-thin text-lg italic">
                We are the best society!
              </div>
              <div className="flex justify-center pt-5">
                <div>
                  <button
                    className="bg-transparent hover:bg-neutral-900 text-bg-neutral-900 text-base font-semibold hover:text-white py-2 px-4 border-2 border-neutral-900 hover:border-transparent rounded"
                    id="menu-btn"
                    onClick={() => {
                      if (dropdown?.classList.contains('hidden')) {
                        dropdown?.classList.remove('hidden');
                        dropdown?.classList.add('flex');
                      } else {
                        dropdown?.classList.remove('flex');
                        dropdown?.classList.add('hidden');
                      }
                    }}
                  >
                    Memberships \/
                  </button>
                  <div
                    className="flex-col text-base items-center bg-neutral-300 rounded shadow-2xl hidden"
                    id="dropdown"
                  >
                    <a className="hover:bg-neutral-600 hover:text-white rounded p-0.5">
                      Members
                    </a>
                    <a className="hover:bg-neutral-600 hover:text-white rounded p-0.5">
                      Leaderboard
                    </a>
                    <a className="hover:bg-neutral-600 hover:text-white rounded p-0.5">
                      My Memberships
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
