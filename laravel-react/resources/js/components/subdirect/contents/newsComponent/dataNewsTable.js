import React from "react";
import { ModalNewsAdd } from "../modalCRUD/ModalNews";

const dataNewsTable = () => {
    const columns = [
        {
            label: "#",
            field: "id",
            sort: "asc",
            width: 20
        },
        {
            label: "ที่อยู่เว็บ",
            field: "url",
            sort: "asc",
            width: 270
        },
        {
            label: "รูปข่าว",
            field: "images",
            sort: "asc",
            width: 200
        },
        {
            label: <ModalNewsAdd />,
            field: "action",
            sort: "asc",
            width: 100,
            sort: "disabled"
        }
    ];

    const [rows, setRows] = React.useState([
        {
            id: 1,
            url: "System Architect",
            images: "Edinburgh",
            action: ""
        },
        {
            id: 2,
            url: "Accountant",
            images: "Tokyo",
            action: ""
        },
        {
            id: 3,
            url: "Junior Technical Author",
            images: "San Francisco",
            action: ""
        },
        {
            id: 4,
            url: "Senior Javascript Developer",
            images: "Edinburgh",
            action: ""
        },
        {
            id: 5,
            url: "Accountant",
            images: "Tokyo",
            action: ""
        },
        {
            id: 6,
            url: "Integration Specialist",
            images: "New York",
            action: ""
        },
        {
            id: 7,
            url: "Sales Assistant",
            images: "San Francisco",
            action: ""
        },
        {
            id: 8,
            url: "Integration Specialist",
            images: "Tokyo",
            action: ""
        },
        {
            id: 9,
            url: "Javascript Developer",
            images: "San Francisco",
            action: ""
        },
        {
            id: 10,
            url: "Software Engineer",
            images: "Edinburgh",
            action: ""
        },
        {
            id: 11,
            url: "images Manimagesr",
            images: "London",
            action: ""
        },
        {
            id: 12,
            url: "Support Lead",
            images: "Edinburgh",
            action: ""
        },
        {
            id: 13,
            url: "Regional Director",
            images: "San Francisco",
            action: ""
        },
        {
            id: 14,
            url: "Senior Marketing Designer",
            images: "London",
            action: ""
        },
        {
            id: 15,
            url: "Regional Director",
            images: "London",
            action: ""
        },
        {
            id: 16,
            url: "Marketing Designer",
            images: "London",
            action: ""
        },
        {
            id: 17,
            url: "Chief Financial imagesr (CFO)",
            images: "New York",
            action: ""
        },
        {
            id: 18,
            url: "Systems Administrator",
            images: "New York",
            action: ""
        },
        {
            id: 19,
            url: "Software Engineer",
            images: "London",
            action: ""
        },
        {
            id: 20,
            url: "Personnel Lead",
            images: "Edinburgh",
            action: ""
        },
        {
            id: 21,
            url: "Development Lead",
            images: "New York",
            action: ""
        },
        {
            id: 22,
            url: "Chief Marketing imagesr (CMO)",
            images: "New York",
            action: ""
        },
        {
            id: 23,
            url: "Pre-Sales Support",
            images: "New York",
            action: ""
        },
        {
            id: 24,
            url: "Sales Assistant",
            images: "Sidney",
            action: ""
        },
        {
            id: 25,
            url: "Chief Executive imagesr (CEO)",
            images: "London",
            action: ""
        },
        {
            id: 26,
            url: "Developer",
            images: "Edinburgh",
            action: ""
        },
        {
            id: 27,
            url: "Regional Director",
            images: "Singapore",
            action: ""
        },
        {
            id: 28,
            url: "Software Engineer",
            images: "San Francisco",
            action: ""
        },
        {
            id: 29,
            url: "Chief Operating imagesr (COO)",
            images: "San Francisco",
            action: ""
        },
        {
            id: 30,
            url: "Regional Marketing",
            images: "Tokyo",
            action: ""
        },
        {
            id: 31,
            url: "Integration Specialist",
            images: "Sidney",
            action: ""
        },
        {
            id: 32,
            url: "Developer",
            images: "London",
            action: ""
        },
        {
            id: 33,
            url: "Technical Author",
            images: "London",
            action: ""
        },
        {
            id: 34,
            url: "Team Leader",
            images: "San Francisco",
            action: ""
        },
        {
            id: 35,
            url: "Post-Sales support",
            images: "Edinburgh",
            action: ""
        },
        {
            id: 36,
            url: "Marketing Designer",
            images: "San Francisco",
            action: ""
        },
        {
            id: 37,
            url: "images Manimagesr",
            images: "San Francisco",
            action: ""
        },
        {
            id: 38,
            url: "Secretary",
            images: "San Francisco",
            action: ""
        },
        {
            id: 39,
            url: "Financial Controller",
            images: "San Francisco",
            action: ""
        },
        {
            id: 40,
            url: "images Manimagesr",
            images: "London",
            action: ""
        }
    ]);

    React.useEffect(() => {
        const abortController = new AbortController();

        return () => {
            abortController.abort();
        };
    }, []);

    return { columns, rows };
};

export default dataNewsTable;
