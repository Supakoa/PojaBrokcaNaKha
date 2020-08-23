import React from "react";
import { Dropdown, Button, DropdownButton } from "react-bootstrap";
import { IconCheck } from "./iconCheck";
import FixItemDefault from "./FixItemDefault";

const FilterSort = ({
    sortBy,
    setSort,
    arrayData,
    filterValid,
    setFilterVaild
}) => {
    const [_defSort, setDefSort] = React.useState("all");

    const defaultSetSort = e => {
        setDefSort(e.target.name ? e.target.name : _defSort);
    };

    React.useEffect(() => {
        if (filterValid && setFilterVaild) {
            setTimeout(() => {
                setFilterVaild(!filterValid);
            }, 1000);
        }
        return () => clearTimeout(0);
    }, [filterValid, setFilterVaild]);


    return (
        <DropdownButton
            variant={filterValid ? "danger" : "outline-info"}
            title={`Sort ${sortBy ? sortBy : _defSort}. `}
            drop="right"
        >
            {arrayData ? (
                arrayData.map((item, idx) => {
                    return (
                        <Dropdown.Item
                            key={idx.toString()}
                            drop="right"
                            type="submit"
                            as={Button}
                            name={item}
                            className="d-flex align-items-center justify-content-between"
                            onClick={setSort}
                        >
                            <strong name={item}>{item}</strong>
                            <IconCheck isSort={sortBy === item} />
                        </Dropdown.Item>
                    );
                })
            ) : (
                <FixItemDefault
                    setSort={setSort ? setSort : defaultSetSort}
                    onSelect={sortBy ? sortBy : _defSort}
                />
            )}
        </DropdownButton>
    );
};

export default FilterSort;
