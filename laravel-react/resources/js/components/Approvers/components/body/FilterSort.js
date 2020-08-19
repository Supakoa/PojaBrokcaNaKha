import React from "react";
import { Dropdown } from "react-bootstrap";

const FilterSort = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle
                size="sm"
                variant="outline-info"
                id="dropdown-basic"
            >
                Filter Sort <i className="fas fa-filter"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item as="button" name="all">
                    All
                </Dropdown.Item>
                <Dropdown.Item as="button" name="pendingg">
                    Pending
                </Dropdown.Item>
                <Dropdown.Item as="button" name="edit">
                    Edit
                </Dropdown.Item>
                <Dropdown.Item as="button" name="approve">
                    Approve
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default FilterSort;
