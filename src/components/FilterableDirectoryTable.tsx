import {useEffect, useState} from 'react';

import SearchBar from './SearchBar';
import DirectoryTable from './DirectroyTable';

import type Directory from '../types/Directory';

type FilterableDirectoryTableProps = {
	directorys: Directory[];
	setDirectorys: (value: Directory[]) => void;
};

export default function FilterableDirectoryTable({
	directorys,
	setDirectorys,
}: FilterableDirectoryTableProps) {
	const [filterText, setFilterText] = useState('');

	const filteredDirectorys = directorys.filter(directory =>
		directory.name.includes(filterText.trim()));

	const handleClickEdit = (id: string, name: string, number: string) => {
		const newDirectorys = directorys.map(directory =>
			directory.id === id
				? {id, name, number}
				: directory);
		setDirectorys(newDirectorys);
	};

	const handleClickRemove = (id: string) => {
		const newDirectorys = directorys.filter(
			directory => directory.id !== id,
		);
		setDirectorys(newDirectorys);
	};

	return (
		<div>
			<SearchBar
				filterText={filterText}
				setFilterText={setFilterText}
			/>
			<DirectoryTable
				directorys={filteredDirectorys}
				handleClickEdit={handleClickEdit}
				handleClickRemove={handleClickRemove}
			/>
		</div>
	);
}
