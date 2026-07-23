function StatusFilter({ status, setStatus }) {

    return (

        <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="status-filter"
        >

            <option value="ALL">All Tickets</option>

            <option value="OPEN">Open</option>

            <option value="IN_PROGRESS">In Progress</option>

            <option value="RESOLVED">Resolved</option>

            <option value="CLOSED">Closed</option>

        </select>

    );

}

export default StatusFilter;