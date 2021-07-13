import { NavLink } from "react-router-dom";

const Favorites = () => {
  return (
    <div className="container ms-1 me-2">
      <div className="row justify-content-start">
        <div className="col-2">
          <NavLink
            className="nav-link active activeLink"
            aria-current="page"
            exact
            to="/SearchResults"
          >
            Back to Search Results
          </NavLink>
          Favorites List
        </div>
        <div className="col-10">
          Tweets{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            molestiae et aperiam sit. Quos error explicabo blanditiis labore
            laborum at porro architecto quisquam! Quia perspiciatis omnis iste
            natus nemo porro!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ullam fuga praesentium eligendi dolorum accusantium
            vitae recusandae, unde blanditiis consequuntur non earum, dolore
            libero veritatis quae ratione! Rem, mollitia esse.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            ratione repellendus eum molestiae placeat magni numquam, libero,
            perferendis totam expedita rerum nihil quaerat reiciendis tempore,
            facere in esse minus dolorem?
          </p>
        </div>
      </div>
    </div>
  );
};
export default Favorites;
