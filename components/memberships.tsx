import Button from './button';

function Memberships() {
  return (
    <div className="grid gap-3 grid-cols-1 grid-rows-3 font-montserrat text-base dark:text-black">
      <div className="dark:bg-violet-500 pt-3  rounded mr-2 ml-2 shadow-2xl dark:text-white">
        <div className="flex pr-2 pl-2 justify-center">
          <ul>
            <li className="flex pt-1 font-bold text-lg justify-center">
              <a>Zhao</a>
            </li>
            <li className="flex pt-3 justify-center">
              <a>Price: free</a>
            </li>
            <li className="flex pt-2 italic font-thin justify-center">
              <a>Level 1 </a>
            </li>
            <li className="flex pt-2 pb-3 justify-center">
              <ul className="text-xs pt-2">
                <li className="pt-1 flex justify-center">
                  <a className="p-1">
                    - Fundamentals of Blockchain course content -
                  </a>
                </li>
                <li className="pt-1 flex justify-center">
                  <a className="p-1">- Private discord channel -</a>
                </li>
                <li className="pt-1 flex justify-center">
                  <a className="p-1">- Tech stream project source code -</a>
                </li>
              </ul>
            </li>
            <li className="flex justify-center pb-2">
              <Button />
            </li>
          </ul>
        </div>
      </div>
      <div className=" dark:bg-violet-700 pt-3  rounded mr-2 ml-2 shadow-2xl dark:text-white">
        <div className="flex pr-2 pl-2 justify-center">
          <ul>
            <li className="flex pt-1 font-bold text-lg justify-center">
              <a>Satoshi</a>
            </li>
            <li className="flex pt-3 justify-center">
              <a>Price: ££</a>
            </li>
            <li className="flex pt-2 italic font-thin justify-center">
              <a>Level 2 </a>
            </li>
            <li className="flex pt-2 pb-3 justify-center">
              <ul className="text-xs pt-2">
                <li className="pt-1 flex justify-center">
                  <a className="p-1">- Discounts to paid events -</a>
                </li>
                <li className="pt-1 flex justify-center">
                  <a className="p-1">- VIP access to events -</a>
                </li>
                <li className="pt-1 flex justify-center">
                  <a className="p-1">- Discounts on merchandise -</a>
                </li>
              </ul>
            </li>
            <li className="flex justify-center pb-2">
              <Button />
            </li>
          </ul>
        </div>
      </div>
      <div className=" dark:bg-violet-900 pt-3  rounded mr-2 ml-2 shadow-2xl dark:text-white">
        <div className="flex pr-2 pl-2 justify-center">
          <ul>
            <li className="flex pt-1 font-bold text-lg justify-center">
              <a>Bodi</a>
            </li>
            <li className="flex pt-3 justify-center">
              <a>Price: £££</a>
            </li>
            <li className="flex pt-2 italic font-thin justify-center">
              <a>Level 3 </a>
            </li>
            <li className="flex pt-2 pb-3 justify-center">
              <ul className="text-xs pt-2">
                <li className="pt-1 flex justify-center">
                  <a className="p-1">- Customisable merchandise -</a>
                </li>
                <li className="pt-1 flex justify-center">
                  <a className="p-1">- Access to committee calls -</a>
                </li>
              </ul>
            </li>
            <li className="flex justify-center pb-2">
              <Button />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Memberships;

// - Customisable merchandise
// - Access to committee calls

// - Discounts to paid events
// - VIP access to events
// - Discounts on merchandise
