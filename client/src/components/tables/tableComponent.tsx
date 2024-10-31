import React from 'react';
import '../css/tables.css';

interface TableRow {
    player: string;
    score: number;
    date: string;
}

interface TableContentProps {
    data: TableRow[];
    sortConfig: { key: keyof TableRow; direction: 'asc' | 'desc' } | null;
    handleSort: (key: keyof TableRow) => void;
}

const TableContent: React.FC<TableContentProps> = ({ data, sortConfig, handleSort }) => {
    const sortedData = React.useMemo(() => {
        if (sortConfig !== null) {
            return [...data].sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];
                if (aValue < bValue) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return data;
    }, [data, sortConfig]);

    return (
        <div className="tableContent">
            <table className="customTable">
                <thead>
                    <tr>
                        <th
                            onClick={() => handleSort('player')}
                            className={sortConfig?.key === 'player' ? `sort-${sortConfig.direction}` : ''}
                        >
                            Username
                        </th>
                        <th
                            onClick={() => handleSort('score')}
                            className={sortConfig?.key === 'score' ? `sort-${sortConfig.direction}` : ''}
                        >
                            Score
                        </th>
                        <th
                            onClick={() => handleSort('date')}
                            className={sortConfig?.key === 'date' ? `sort-${sortConfig.direction}` : ''}
                        >
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.player}</td>
                            <td>{row.score}</td>
                            <td>{row.date}</td>
                        </tr>
                    ))}
                    {/* Add empty rows to fill the space */}
                    {Array.from({ length: Math.max(0, 10 - sortedData.length) }).map((_, index) => (
                        <tr key={`empty-${index}`}>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableContent;