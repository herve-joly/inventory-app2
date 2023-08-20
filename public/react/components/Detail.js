import React, { useState } from "react";
import { UpdateForm } from "./UpdateForm";

export function Detail(props) {
  const { item, setDetail, deleteItem } = props;
  const [updateForm, setupdateForm] = useState();

  const handleDelete = async () => {
    await deleteItem(item.id);
    setDetail(undefined);
  };

  return (
    // Single Item View
    <article>
      <>
        <UpdateForm setupdateForm={setupdateForm} itemId={item.id} />
        <h3>{item.title}</h3>
        <img class="singleItemIMG" src={item.image} alt={item.title} />
        <h4>
          <span class="desSpan">Price:</span> £{item.price}
        </h4>
        <h4>
          <span class="desSpan">Description:</span> {item.description}
        </h4>
        <h4>
          <span class="desSpan">Category:</span> {item.category}
        </h4>

        <div class="buttonDiv">
          <button onClick={() => setDetail()}>Back to Items Store</button>
          <button onClick={handleDelete}>Delete Item</button>
        </div>
      </>
    </article>
  );
}
