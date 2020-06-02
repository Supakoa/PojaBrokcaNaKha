import React from "react";
import ModalNewsAdd from '../modalCRUD/ModalNews'

const dataNewsTable = () => {
    const [_data, setData] = React.useState({
        columns: [
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
                label: ,
                field: "action",
                sort: "asc",
                width: 100
            }
        ],
        rows: [
            {
                id: 1,
                url: "System Architect",
                images: "Edinburgh",
                action: "61"
            },
            {
                id: 2,
                url: "Accountant",
                images: "Tokyo",
                action: "2011/07/25"
            },
            {
                id: 3,
                url: "Junior Technical Author",
                images: "San Francisco",
                action: "2009/01/12"
            },
            {
                id: 4,
                url: "Senior Javascript Developer",
                images: "Edinburgh",
                action: "2012/03/29"
            },
            {
                id: 5,
                url: "Accountant",
                images: "Tokyo",
                action: "2008/11/28"
            },
            {
                id: 6,
                url: "Integration Specialist",
                images: "New York",
                action: "2012/12/02"
            },
            {
                id: 7,
                url: "Sales Assistant",
                images: "San Francisco",
                action: "2012/08/06"
            },
            {
                id: 8,
                url: "Integration Specialist",
                images: "Tokyo",
                action: "2010/10/14"
            },
            {
                id: 9,
                url: "Javascript Developer",
                images: "San Francisco",
                action: "2009/09/15"
            },
            {
                id: 10,
                url: "Software Engineer",
                images: "Edinburgh",
                action: "2008/12/13"
            },
            {
                id: 11,
                url: "images Manimagesr",
                images: "London",
                action: "2008/12/19"
            },
            {
                id: 12,
                url: "Support Lead",
                images: "Edinburgh",
                action: "2013/03/03"
            },
            {
                id: 13,
                url: "Regional Director",
                images: "San Francisco",
                action: "2008/10/16"
            },
            {
                id: 14,
                url: "Senior Marketing Designer",
                images: "London",
                action: "2012/12/18"
            },
            {
                id: 15,
                url: "Regional Director",
                images: "London",
                action: "2010/03/17"
            },
            {
                id: 16,
                url: "Marketing Designer",
                images: "London",
                action: "2012/11/27"
            },
            {
                id: 17,
                url: "Chief Financial imagesr (CFO)",
                images: "New York",
                action: "2010/06/09"
            },
            {
                id: 18,
                url: "Systems Administrator",
                images: "New York",
                action: "2009/04/10"
            },
            {
                id: 19,
                url: "Software Engineer",
                images: "London",
                action: "2012/10/13"
            },
            {
                id: 20,
                url: "Personnel Lead",
                images: "Edinburgh",
                action: "2012/09/26"
            },
            {
                id: 21,
                url: "Development Lead",
                images: "New York",
                action: "2011/09/03"
            },
            {
                id: 22,
                url: "Chief Marketing imagesr (CMO)",
                images: "New York",
                action: "2009/06/25"
            },
            {
                id: 23,
                url: "Pre-Sales Support",
                images: "New York",
                action: "2011/12/12"
            },
            {
                id: 24,
                url: "Sales Assistant",
                images: "Sidney",
                action: "2010/09/20"
            },
            {
                id: 25,
                url: "Chief Executive imagesr (CEO)",
                images: "London",
                action: "2009/10/09"
            },
            {
                id: 26,
                url: "Developer",
                images: "Edinburgh",
                action: "2010/12/22"
            },
            {
                id: 27,
                url: "Regional Director",
                images: "Singapore",
                action: "2010/11/14"
            },
            {
                id: 28,
                url: "Software Engineer",
                images: "San Francisco",
                action: "2011/06/07"
            },
            {
                id: 29,
                url: "Chief Operating imagesr (COO)",
                images: "San Francisco",
                action: "2010/03/11"
            },
            {
                id: 30,
                url: "Regional Marketing",
                images: "Tokyo",
                action: "2011/08/14"
            },
            {
                id: 31,
                url: "Integration Specialist",
                images: "Sidney",
                action: "2011/06/02"
            },
            {
                id: 32,
                url: "Developer",
                images: "London",
                action: "2009/10/22"
            },
            {
                id: 33,
                url: "Technical Author",
                images: "London",
                action: "2011/05/07"
            },
            {
                id: 34,
                url: "Team Leader",
                images: "San Francisco",
                action: "2008/10/26"
            },
            {
                id: 35,
                url: "Post-Sales support",
                images: "Edinburgh",
                action: "2011/03/09"
            },
            {
                id: 36,
                url: "Marketing Designer",
                images: "San Francisco",
                action: "2009/12/09"
            },
            {
                id: 37,
                url: "images Manimagesr",
                images: "San Francisco",
                action: "2008/12/16"
            },
            {
                id: 38,
                url: "Secretary",
                images: "San Francisco",
                action: "2010/02/12"
            },
            {
                id: 39,
                url: "Financial Controller",
                images: "San Francisco",
                action: "2009/02/14"
            },
            {
                id: 40,
                url: "images Manimagesr",
                images: "London",
                action: "2008/12/11"
            }
        ]
    });

    React.useEffect(() => {
        const abortController = new AbortController();

        return () => {
            abortController.abort()
        };
    },[]);

    return _data;
};

export default dataNewsTable;
