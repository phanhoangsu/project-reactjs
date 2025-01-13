import { useState } from "react";

const AddNew = () => {
  // const [] = useState();
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  // console.log("item", items);

  const handleAddItem = () => {
    //có trống hay không
    if (inputText.trim() !== "") {
      setItems([...items, { text: inputText, checked: false }]);
      setInputText("");
    }
  };

  const LisItem = ({ text, checked, onToggle, onDelete }) => (
    <div>
      <input type="checkbox" checked={checked} onChange={onToggle} />
      <span>{checked ? <s>{text}</s> : text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );

  const handleToggle = (index) => {
    // console.log("handleToggle", handleToggle);

    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ margin: "30px" }}>THINGS TO DO</h1>

      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button onClick={handleAddItem}>Add text</button>

      <p>
        {items.map((item, index) => (
          <LisItem
            key={index}
            text={item.text}
            checked={item.checked}
            onToggle={() => handleToggle(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
        hiển thị danh sách
      </p>
    </div>
  );
};

export default AddNew;
