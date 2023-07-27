import DirectoryRow from './DirectoryRow';

import type Directory from '../types/Directory';

type DirectoryTableProps = {
	directorys: Directory[];
	handleClickEdit: (id: string, name: string, number: string) => void;
	handleClickRemove: (id: string) => void;
};

export default function DirectoryTable({
	directorys,
	handleClickEdit,
	handleClickRemove,
}: DirectoryTableProps) {
	return (
		<table>
			<thead>
				<tr>
					<th>이름</th>
					<th>전화번호</th>
				</tr>
			</thead>
			<tbody>
				{directorys.map(directory => (
					<DirectoryRow
						key={directory.id}
						directory={directory}
						handleClickEdit={handleClickEdit}
						handleClickRemove={handleClickRemove}
					/>
				))}
			</tbody>
		</table>
	);
}
