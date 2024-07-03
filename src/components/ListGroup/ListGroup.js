import React from "react";

function ListGroup({ title, listItems }) {
  return (
    <ul class="list-group">
      <li class="list-group-item active" aria-current="true">
        <h5><strong>{title}</strong></h5>
      </li>
      {listItems.map((eachListItem) => {
        const { name, role, designation, empId } = eachListItem;
        return (
          <li class="list-group-item">
            <strong>{`${name} - ${empId}`}</strong>
            <p className="mb-0">{`${role}, ${designation}`}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default ListGroup;
