import {useBoolean} from 'usehooks-ts';

import type Directory from '../types/Directory';
import {useState} from 'react';

type DirectoryRowProps = {
	directory: Directory;
	handleClickEdit: (id: string, name: string, number: string) => void;
	handleClickRemove: (id: string) => void;
};

export default function DirectoryRow({
	directory,
	handleClickEdit,
	handleClickRemove,
}: DirectoryRowProps) {
	const {id, name, number} = directory;

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const {value: isEdit, toggle: toggleIsEdit} = useBoolean(false);

	const [newName, setNewName] = useState(name);
	const [newNumber, setNewNumber] = useState(number);

	const handleClick = () => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		toggleIsEdit();
		handleClickEdit(id, newName, newNumber);
	};

	return (
		<tr>
			<td>
				{isEdit
					? <input
						value={newName}
						onChange={e => {
							setNewName(e.target.value);
						}}
					/>
					: <p>{name}</p>
				}
			</td>
			<td>
				{isEdit
					? <input
						value={newNumber}
						onChange={e => {
							setNewNumber(e.target.value);
						}}
					/>
					: <p>{number}</p>
				}
			</td>
			<td>
				<button onClick={handleClick}>
					{ isEdit ? '완료' : '수정' }
				</button>
			</td>
			<td>
				<button onClick={() => {
					handleClickRemove(id);
				}}>
                    삭제
				</button>
			</td>
		</tr>
	);
}
