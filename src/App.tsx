import {useEffect, useState} from 'react';

import FilterableDirectoryTable from './components/FilterableDirectoryTable';

const dummuy = [
	{id: '1', name: '신짱구', number: '01012345678'},
	{id: '2', name: '김철수', number: '01056781234'},
	{id: '3', name: '이훈이', number: '01013579246'},
	{id: '4', name: '한유리', number: '01025972532'},
	{id: '5', name: '가맹구', number: '01012143578'},
];

export default function App() {
	const [directorys, setDirectorys] = useState(dummuy);

	useEffect(() => {
		setLocal;
	}, [directorys]);

	return (
		<div>
			<h1>☎️ 유소정 전화번호부</h1>
			<FilterableDirectoryTable
				directorys={directorys}
				setDirectorys={setDirectorys}
			/>
		</div>
	);
}
