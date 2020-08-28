import React from "react";
import { MDBDataTable } from "mdbreact";
import { columns } from "./columns";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import StatusBadgeDoc from "../../../student/components/tableReport/statusDocument";
import ConvertDate from "../../../middleware/method/convertDate";
import Swal from "sweetalert2";
import ButtonShowDoc from "./ButtonShowDoc";
import NameFormOnTable from "../../../name-form-ontable";
import NameSender from "./NameSender";
import wordShow from "../../../filter/showMyWord";

const TableApprover = ({
    urlApprover,
    sortTable,
    setValidSort,
    validSort,
    setSortBy,
    setRows,
    rows
}) => {
    const _userDocs = useSelector(s => s.userDocument);
    const _docTemps = useSelector(s => s.documentsTemplate);
    const _allUses = useSelector(s => s.allUsers);

    const { i18n, t } = useTranslation();

    const setRowsOnTable = async userDocs => {
        const _add2Rows = await userDocs.map((uDoc, idx) => {
            const _name = _docTemps.find(tDoc => {
                return tDoc.id === uDoc.form_id;
            });

            if (_name) {
                return {
                    row_id: (idx + 1).toString(),
                    status_badge: (
                        <StatusBadgeDoc key={idx} status={uDoc.pivot.status} />
                    ),
                    status: uDoc.pivot.status,
                    form_name: (
                        <NameFormOnTable
                            key={idx + 1}
                            thName={_name.th_name}
                            engName={_name.eng_name}
                        />
                    ),
                    from_user: <NameSender id={uDoc.user_id} />,
                    created_at_converted: (
                        <ConvertDate key={idx + 2} dateTime={uDoc.created_at} />
                    ),
                    action: (
                        <ButtonShowDoc
                            key={idx + 3}
                            url={urlApprover}
                            id={uDoc.id}
                        />
                    )
                };
            }
        });
        if (rows.length === 0) {
            const arr = _add2Rows.filter(item => {
                return item.status === sortTable;
            });
            if (sortTable !== "all" && arr.length === 0) {
                Swal.fire(
                    i18n.language === "th" ? `ขออภัย` : `Sorry !`,
                    `${wordShow(sortTable, t)} ${
                        i18n.language === "th" ? `ไม่มีข้อมูล` : `Empty`
                    } `,
                    "warning"
                ).then(() => {
                    setValidSort(!validSort);
                    setSortBy("all");
                });
            }
            setRows(
                sortTable === "all"
                    ? _add2Rows
                    : arr.length !== 0
                    ? arr
                    : _add2Rows
            );
        }
    };

    React.useEffect(() => {
        const abort = new AbortController();

        if (
            rows.length !== _userDocs.length &&
            _docTemps.length > 0 &&
            _userDocs.length > 0 &&
            _allUses.length > 0
        )
            setRowsOnTable(_userDocs, { signal: abort.signal });

        return () => abort.abort();
    }, [rows, _userDocs, _docTemps, _allUses]);

    return (
        <MDBDataTable
            small
            noBottomColumns={true}
            entriesLabel={t("approvers.table.header.pagination")}
            scrollX
            entriesOptions={[5, 10, 15]}
            entries={5}
            infoLabel={[
                t("approvers.table.footer.show"),
                "-",
                t("approvers.table.footer.of"),
                t("approvers.table.footer.list")
            ]}
            paginationLabel={[
                t("approvers.table.footer.prev"),
                t("approvers.table.footer.next")
            ]}
            searchLabel={t("approvers.table.header.search")}
            barReverse={true}
            borderless
            striped
            hover
            data={{ columns: columns(t), rows: rows }}
        />
    );
};

export default TableApprover;
