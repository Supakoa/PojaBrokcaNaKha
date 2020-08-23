import React from "react";
import { Dropdown, Button, DropdownButton, Badge } from "react-bootstrap";
import { IconCheck } from "./iconCheck";
import FixItemDefault from "./FixItemDefault";
import wordShow from "./showMyWord";

const FilterSort = ({
    sortBy,
    setSort,
    arrayData,
    filterValid,
    setFilterVaild,
    noti
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
        <Dropdown drop="right">
            <Dropdown.Toggle variant={filterValid ? "danger" : "outline-info"}>
                <i className="fas fa-filter"></i>{" "}
                {sortBy ? wordShow(sortBy) : wordShow(_defSort)}.{" "}
                {noti && noti > 0 ? (
                    <Badge variant="danger">{noti}</Badge>
                ) : null}
            </Dropdown.Toggle>
            <Dropdown.Menu>
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
                                <strong name={item}>{item} </strong>
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
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default FilterSort;
