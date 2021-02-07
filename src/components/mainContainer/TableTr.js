import React from "react";

const TableTr = (prop) => {
    return (
        <tr>
            <td>
                <input type="number" min="0" step="0.01" className="form-control alcohol-percentage"
                       placeholder="%" defaultValue={prop.data.alcoholPercent} required /></td>
            <td>
                <input type="number" className="form-control raw-reading" placeholder="0.01"
                       autoFocus defaultValue={prop.data.rawReading} tabIndex={prop.data.tabIndex} required />
            </td>
        </tr>
    )
}

export default TableTr;