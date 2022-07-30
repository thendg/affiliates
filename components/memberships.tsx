function Memberships() {
  return (
    <div className="grid gap-3 grid-cols-1 grid-rows-3 font-montserrat text-sm dark:text-black">
      <div className="bg-neutral-300 pt-3 justify-center items-center hover:border-solid border-2 border-neutral-900">
        <div className="grid gap-0 grid-cols-2 grid-rows-1">
          <div className="flex">image</div>
          <div>
            <ul>
              <li className="pt-1">
                <a>Price: free</a>
              </li>
              <li className="pt-5">
                <a>Level: 1 </a>
              </li>
              <li className="pt-5 pb-5">
                <a>Features: </a>
                <ul>
                  <li>
                    <a>- feature1</a>
                  </li>
                  <li>
                    <a>- feature2</a>
                  </li>
                  <li>
                    <a>- feature3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-neutral-500 pt-3">
        <div className="grid gap-0 grid-cols-2 grid-rows-1">
          <div className="flex">image</div>
          <div>
            <ul>
              <li className="pt-1">
                <a>Price: ££</a>
              </li>
              <li className="pt-5">
                <a>Level: 2 </a>
              </li>
              <li className="pt-5 pb-5">
                <a>Features: </a>
                <ul>
                  <li>
                    <a>- feature1</a>
                  </li>
                  <li>
                    <a>- feature2</a>
                  </li>
                  <li>
                    <a>- feature3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-neutral-700 pt-3">
        <div className="grid gap-0 grid-cols-2 grid-rows-1">
          <div className="flex">image</div>
          <div>
            <ul>
              <li className="pt-1">
                <a>Price: £££</a>
              </li>
              <li className="pt-5">
                <a>Level: 3</a>
              </li>
              <li className="pt-5 pb-5">
                <a>Features: </a>
                <ul>
                  <li>
                    <a>- feature1</a>
                  </li>
                  <li>
                    <a>- feature2</a>
                  </li>
                  <li>
                    <a>- feature3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memberships;
