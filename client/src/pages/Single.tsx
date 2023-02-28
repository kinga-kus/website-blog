import * as React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single" style={{ display: "flex", gap: "50px" }}>
      <div
        className="content"
        style={{
          flex: 5,
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1677095042813-678fb5a3e7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="img"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
        <div
          className="user"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1677278369661-2c3d44e1c95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="img"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div className="info">
            <span style={{ fontWeight: "bold" }}>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit" style={{ display: "flex", gap: "5px" }}>
            <Link to={`/write?edit=2`}>
              <img
                src="https://github.com/safak/youtube2022/blob/blog-app/client/src/img/edit.png?raw=true"
                alt="edit"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
              />
            </Link>
            <img
              src="https://github.com/safak/youtube2022/blob/blog-app/client/src/img/delete.png?raw=true"
              alt="delete"
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </div>
        </div>
        <h1 style={{ fontSize: "42px", color: "#333" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          auctor molestie purus, vitae vestibulum erat fermentum tincidunt.
        </h1>
        <p style={{ textAlign: "justify", lineHeight: "30px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          auctor molestie purus, vitae vestibulum erat fermentum tincidunt. Ut
          luctus magna orci, sit amet congue neque placerat et. In pellentesque
          felis sem. Mauris mollis sem nec justo vehicula ultricies. Morbi
          tortor dolor, lacinia non massa ut, placerat gravida ipsum. Nulla
          porttitor nulla blandit cursus egestas. Cras finibus lobortis nisl et
          gravida. Ut magna sem, vulputate eu erat ut, euismod scelerisque nibh.
          <br />
          <br />
          Morbi egestas magna odio, et luctus ante egestas eu. Quisque aliquet
          rutrum consequat. Phasellus vestibulum orci eu mi suscipit viverra.
          Donec ut fermentum eros. Fusce vel tempus sem. Nunc vel ultrices urna.
          <br />
          <br />
          Mauris accumsan convallis lacus, at suscipit dui semper vitae.
          Praesent dui dui, aliquam in cursus vitae, dignissim et nisl.
          Pellentesque id est eu est vestibulum faucibus. Cras pretium augue eu
          urna rhoncus, eu porttitor tortor aliquam. Donec eu neque tortor.
          Nullam rutrum dolor ut dui egestas aliquam. Fusce volutpat lectus
          vitae rhoncus suscipit. Pellentesque sed sapien sed purus aliquet
          fermentum. Integer quis mi at lectus suscipit hendrerit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Aenean quam augue,
          suscipit id ligula a, commodo efficitur quam. Proin commodo elit a
          nulla placerat tincidunt. Suspendisse consequat sapien non ullamcorper
          bibendum.
          <br />
          <br />
          Curabitur dignissim, magna quis lacinia hendrerit, massa ligula
          finibus massa, id fermentum lacus orci ut felis. Fusce et ligula
          purus. Curabitur ut arcu in arcu porta euismod. Fusce sit amet felis
          non eros commodo ornare id at dolor. Morbi sagittis mi at hendrerit
          dignissim. Phasellus dapibus eleifend nibh. Donec mi felis, posuere at
          nibh eget, elementum bibendum est. Donec enim ante, elementum eu est
          sed, placerat tincidunt tellus. Ut nec risus scelerisque, molestie
          libero ac, semper nibh. Etiam pellentesque interdum faucibus. Integer
          bibendum magna quis augue suscipit, vel sollicitudin nunc gravida.
          Nullam vehicula ante et laoreet dictum. Duis id sem in eros faucibus
          imperdiet. Praesent lorem libero, vehicula ultricies elementum quis,
          scelerisque vel sapien.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
