import * as React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = React.useState("");
  console.log(value);

  return (
    <div
      className="add"
      style={{ marginTop: "20px", display: "flex", gap: "20px" }}
    >
      <div
        className="content"
        style={{
          flex: 5,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div
        className="menu"
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          className="menu-item"
          style={{
            border: "1px solid lightgray",
            padding: "10px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" name="file" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div
          className="menu-item"
          style={{
            border: "1px solid lightgray",
            padding: "10px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "#555",
          }}
        >
          <h1>Category</h1>
          <div
            className="cat"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              color: "teal",
            }}
          >
            <input type="radio" name="cat" value="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div
            className="cat"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              color: "teal",
            }}
          >
            <input type="radio" name="cat" value="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div
            className="technology"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              color: "teal",
            }}
          >
            <input type="radio" name="cat" value="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div
            className="food"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              color: "teal",
            }}
          >
            <input type="radio" name="cat" value="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
